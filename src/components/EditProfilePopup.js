import React from "react";
import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoadingData }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("Name");
  const [description, setDescription] = React.useState("About");

  const [inputValidName, setInputValidName] = React.useState(true);
  const [inputValidDescription, setInputValidDescription] =
    React.useState(true);
  const [nameValidationMessage, setNameValidationMessage] = React.useState("");
  const [descriptionValidationMessage, setDescriptionValidationMessage] =
    React.useState("");
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);

  React.useEffect(
    () => {
      if (currentUser.name && currentUser.about) {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }
      setInputValidName(true);
      setInputValidDescription(true);
    },
    [currentUser],
    isOpen
  );

  function handleName(evt) {
    setName(evt.target.value);
    checkNameValidation(evt.target);
  }

  function handleDescription(evt) {
    setDescription(evt.target.value);
    checkDescriptionValidation(evt.target);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    if (inputValidName && inputValidDescription) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [inputValidName, inputValidDescription]);

  function checkNameValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setInputValidName(false);
      setNameValidationMessage(inputElement.validationMessage);
    } else {
      setInputValidName(true);
    }
  }

  function checkDescriptionValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setInputValidDescription(false);
      setDescriptionValidationMessage(inputElement.validationMessage);
    } else {
      setInputValidDescription(true);
    }
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="user"
      buttonSubmitText="Сохранить"
      buttonSubmitState={buttonSubmitState}
      loadingButtonSubmitText="Загрузка..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      contentLabel="Форма редактирования имени пользователя"
      isLoadingData={isLoadingData}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className={`popup__input ${
              !inputValidName ? "popup__input_type_error" : ""
            }`}
            required
            minLength="2"
            maxLength="40"
            value={name}
            onChange={handleName}
          />
          <span
            className={`popup__input-error ${
              !inputValidName ? "popup__input-error_active" : ""
            }`}
          >
            {nameValidationMessage}
          </span>
        </label>
        <label className="popup__field">
          <input
            type="text"
            name="about"
            placeholder="Что-то о себе"
            className={`popup__input ${
              !inputValidDescription ? "popup__input_type_error" : ""
            }`}
            required
            minLength="2"
            maxLength="200"
            value={description}
            onChange={handleDescription}
          />
          <span
            className={`popup__input-error ${
              !inputValidDescription ? "popup__input-error_active" : ""
            }`}
          >
            {descriptionValidationMessage}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
