import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  /// Переменные открытия/закрытия Popup
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] =
    React.useState(false);
  ///
  /// Card
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cardForDelete, setCardForDelete] = React.useState({});
  ///
  /// Переменные загрузки
  const [isLoadingSetUserInfo, setIsLoadingSetUserInfo] = React.useState(false);
  const [isLoadingAvatarUpdate, setIsLoadingAvatarUpdate] =
    React.useState(false);
  const [isLoadingAddPlaceSubmit, setIsLoadingAddPlaceSubmit] =
    React.useState(false);
  /// Функция постановки "Лайк" карточке
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then(
      (newCard) => {
        const newCards = cards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        );
        setCards(newCards);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ///
  /// Функции удаления карточки
  function handleCardDelete(evt) {
    evt.preventDefault();
    api.deleteCard(cardForDelete._id).then(
      () => {
        const newCards = cards.filter((elem) => elem !== cardForDelete);
        setCards(newCards);
        closeAllPopups();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function handleCardDeleteRequest(card) {
    setCardForDelete(card);
    setIsDeleteCardPopupOpen(true);
  }
  ///
  ///Функции добавления новой карточки
  function handleAddPlaceSubmit(data) {
    setIsLoadingAddPlaceSubmit(true);
    api
      .postCard(data)
      .then(
        (newCard) => {
          setCards([newCard, ...cards]);
          closeAllPopups();
        },
        (err) => {
          console.log(err);
        }
      )
      .finally(() => {
        setIsLoadingAddPlaceSubmit(false);
      });
  }
  /// Функции просмотра карточки
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  ///
  /// Функции открытия/закрытия Popup
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({});
  }
  ///
  /// Функция изменения имени пользователя
  function handleUpdateUser(data) {
    setIsLoadingSetUserInfo(true);
    api
      .patchUserInfo(data)
      .then(
        (data) => {
          setCurrentUser(data);
          closeAllPopups();
        },
        (err) => {
          console.log(err);
        }
      )
      .finally(() => {
        setIsLoadingSetUserInfo(false);
      });
  }
  ///
  /// Функция изменения аватара пользователя
  function handleUpdateAvatar(data) {
    setIsLoadingAvatarUpdate(true);
    api
      .setUserAvatar(data)
      .then(
        (data) => {
          setCurrentUser(data);
          closeAllPopups();
        },
        (err) => {
          console.log(err);
        }
      )
      .finally(() => {
        setIsLoadingAvatarUpdate(false);
      });
  }
  ///
  React.useEffect(() => {
    api.getInitialData().then(
      (data) => {
        const [userData, cardsData] = data;
        setCards(cardsData);
        setCurrentUser(userData);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          editProfile={handleEditProfileClick}
          editAvatar={handleEditAvatarClick}
          addPlace={handleAddPlaceClick}
          onClickCard={handleCardClick}
          onCardLike={handleCardLike}
          onCardDeleteRequest={handleCardDeleteRequest}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          currentUser={currentUser}
          isLoadingData={isLoadingSetUserInfo}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoadingData={isLoadingAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoadingData={isLoadingAvatarUpdate}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
