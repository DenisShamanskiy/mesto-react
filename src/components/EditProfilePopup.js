import React from "react";
import PopupWithForm from "./PopupWithForm";

//import { useFormWithValidation } from '../hooks/useFormWithValidation';

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  /*function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser(values);
  }

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm, props.isOpen]);*/

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="user"
      buttonSubmitText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
            value={name}
            onChange={handleName}
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
            value={description}
            onChange={handleDescription}
          />
          <span className="popup__input-error popup__input-error_type_about"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
