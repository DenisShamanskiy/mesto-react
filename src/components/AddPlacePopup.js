import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoadingData }) {
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");

  const [inputValidPlace, setInputValidPlace] = useState(true);
  const [inputValidLink, setInputValidLink] = useState(true);
  const [placeValidationMessage, setPlaceValidationMessage] = useState("");
  const [linkValidationMessage, setLinkValidationMessage] = useState("");
  const [buttonSubmitState, setButtonSubmitState] = useState(false);
  const [placeInputInitial, setPlaceInputInitial] = useState(true);
  const [linkInputInitial, setLinkInputInitial] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: place, link });
  }

  function handlePlace(evt) {
    setPlace(evt.target.value);
    setInputValidPlace(evt.target.validity.valid);
    if (!evt.target.validity.valid) {
      setPlaceInputInitial(false);
      setInputValidPlace(false);
      setPlaceValidationMessage(evt.target.validationMessage);
    } else {
      setPlaceInputInitial(false);
      setInputValidPlace(true);
    }
  }

  function handleLink(evt) {
    setLink(evt.target.value);
    setInputValidLink(evt.target.validity.valid);
    if (!evt.target.validity.valid) {
      setLinkInputInitial(false);
      setInputValidLink(false);
      setLinkValidationMessage(evt.target.validationMessage);
    } else {
      setLinkInputInitial(false);
      setInputValidLink(true);
    }
  }

  useEffect(() => {
    setPlace("");
    setLink("");
    setInputValidPlace(true);
    setInputValidLink(true);
    setButtonSubmitState(false);
    setPlaceInputInitial(true);
    setLinkInputInitial(true);
  }, [isOpen]);

  useEffect(() => {
    if (
      inputValidPlace &&
      inputValidLink &&
      !placeInputInitial &&
      !linkInputInitial
    ) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [inputValidPlace, inputValidLink, placeInputInitial, linkInputInitial]);

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      buttonSubmitText="Создать"
      loadingButtonSubmitText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      contentLabel="Форма добавления изображения"
      isLoadingData={isLoadingData}
      isFormValid={buttonSubmitState}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
            type="text"
            name="place"
            placeholder="Название"
            className={`popup__input ${
              !inputValidPlace ? "popup__input_type_error" : ""
            }`}
            required
            minLength="2"
            maxLength="30"
            value={place}
            onChange={handlePlace}
          />
          <span
            className={`popup__input-error ${
              !inputValidPlace ? "popup__input-error_active" : ""
            }`}
          >
            {placeValidationMessage}
          </span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className={`popup__input ${
              !inputValidLink ? "popup__input_type_error" : ""
            }`}
            required
            value={link}
            onChange={handleLink}
          />
          <span
            className={`popup__input-error ${
              !inputValidLink ? "popup__input-error_active" : ""
            }`}
          >
            {linkValidationMessage}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
