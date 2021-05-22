import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoadingData }) {
  const [link, setLink] = useState("");
  const [inputValid, setInputValid] = useState(true);
  const [buttonSubmitState, setButtonSubmitState] = useState(false);
  const [isValidationMessage, setIsValidationMessage] = useState("");
  const [linkInputInitial, setLinkInputInitial] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ avatar: link });
  }

  function handleChange(evt) {
    setLink(evt.target.value);
    if (!evt.target.validity.valid) {
      setInputValid(false);
      setIsValidationMessage(evt.target.validationMessage);
      setLinkInputInitial(false);
    } else {
      setLinkInputInitial(false);
      setInputValid(true);
    }
  }

  useEffect(() => {
    setInputValid(true);
    setButtonSubmitState(false);
    setLinkInputInitial(true);
    setLink("");
  }, [isOpen]);

  useEffect(() => {
    if (inputValid && !linkInputInitial) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [inputValid, linkInputInitial]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonSubmitText="Сохранить"
      loadingButtonSubmitText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      contentLabel="Форма редактирования аватара пользователя"
      isLoadingData={isLoadingData}
      isFormValid={buttonSubmitState}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
            type="url"
            name="link"
            aria-label="Cсылка на изображение"
            placeholder="Cсылка на изображение"
            className={`popup__input ${
              !inputValid ? "popup__input_type_error" : ""
            }`}
            required
            value={link}
            onChange={handleChange}
          />
          <span
            className={`popup__input-error ${
              !inputValid ? "popup__input-error_active" : ""
            }`}
          >
            {isValidationMessage}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
