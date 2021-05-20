import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
<<<<<<< HEAD
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
=======
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] =
    React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cardForDelete, setCardForDelete] = React.useState({});
  const [isLoadingSetUserInfo, setIsLoadingSetUserInfo] = React.useState(false);
  const [isLoadingAvatarUpdate, setIsLoadingAvatarUpdate] =
    React.useState(false);
  const [isLoadingAddPlaceSubmit, setIsLoadingAddPlaceSubmit] =
    React.useState(false);
  const [isLoadingDeleteCard, setIsLoadingDeleteCard] = React.useState(false);

  React.useEffect(() => {
    api
      .getInitialData()
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateUser(user) {
    setIsLoadingSetUserInfo(true);
    api
      .setUserInfo(user)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingSetUserInfo(false);
      });
  }

  function handleUpdateAvatar(avatar) {
    setIsLoadingAvatarUpdate(true);
    api
      .setUserAvatar(avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingAvatarUpdate(false);
      });
  }

  function handleAddCard(card) {
    setIsLoadingAddPlaceSubmit(true);
    api
      .postCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingAddPlaceSubmit(false);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLike(card, !isLiked)
      .then((newCard) => {
        setCards(
          cards.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    setIsLoadingDeleteCard(true);
    api
      .deleteCard(card)
      .then(() => {
        setCards(cards.filter((cardDelete) => cardDelete._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingDeleteCard(false);
      });
  }
>>>>>>> develop_11

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
<<<<<<< HEAD
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
=======

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

>>>>>>> develop_11
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
<<<<<<< HEAD
    //console.log(card);
    setSelectedCard(card);
  }

=======
    setSelectedCard(card);
  }

  function confirmCardDelete(card) {
    setCardForDelete(card);
    setIsDeleteCardPopupOpen(true);
  }

>>>>>>> develop_11
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
<<<<<<< HEAD
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        editProfile={handleEditProfileClick}
        editAvatar={handleEditAvatarClick}
        addPlace={handleAddPlaceClick}
        onClickCard={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="user"
        buttonSubmitText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <label className="popup__label">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="popup__input popup__input_type_name"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error popup__input-error_type_name"></span>
          </label>
          <label className="popup__field">
            <input
              type="text"
              name="about"
              placeholder="Что-то о себе"
              className="popup__input popup__input_type_about"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error popup__input-error_type_about"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="place"
        buttonSubmitText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <label className="popup__label">
            <input
              type="text"
              name="place"
              placeholder="Название"
              className="popup__input popup__input_type_title"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__input-error popup__input-error_type_title"></span>
          </label>
          <label className="popup__field">
            <input
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_link"
              required
            />
            <span className="popup__input-error popup__input-error_type_link"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonSubmitText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <label className="popup__label">
            <input
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_link"
              required
            />
            <span className="popup__input-error popup__input-error_type_link"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="remove" buttonSubmitText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
=======
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({});
    setCardForDelete({});
  }

  React.useEffect(() => {
    function handleEscapeClick(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keyup", handleEscapeClick);

    return () => {
      document.removeEventListener("keyup", handleEscapeClick);
    };
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          editProfile={handleEditProfileClick}
          editAvatar={handleEditAvatarClick}
          addPlace={handleAddPlaceClick}
          onClickCard={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={confirmCardDelete}
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
          onAddPlace={handleAddCard}
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
          card={cardForDelete}
          onSubmitDelete={handleCardDelete}
          isLoadingData={isLoadingDeleteCard}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
>>>>>>> develop_11
    </div>
  );
}

export default App;
