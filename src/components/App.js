import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

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

  return (
    <div className="page">
      <Header />
      <Main
        editProfile={handleEditProfileClick}
        addPlace={handleAddPlaceClick}
        editAvatar={handleEditAvatarClick}
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
    </div>
  );
}

export default App;
