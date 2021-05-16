import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  ///

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then(
      (data) => {
        setCurrentUser(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  //const [cards, setCards] = React.useState([]);

  ///

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    //console.log(card);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(data) {
    //setIsLoadingSetUserInfo(true);
    api.patchUserInfo(data).then(
      (data) => {
        setCurrentUser(data);
        closeAllPopups();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function handleUpdateAvatar(data) {
    //setIsLoadingAvatarUpdate(true);
    api.setUserAvatar(data).then(
      (data) => {
        setCurrentUser(data);
        closeAllPopups();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          editProfile={handleEditProfileClick}
          editAvatar={handleEditAvatarClick}
          addPlace={handleAddPlaceClick}
          onClickCard={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          currentUser={currentUser}
        />

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

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          title="Вы уверены?"
          name="remove"
          buttonSubmitText="Да"
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
