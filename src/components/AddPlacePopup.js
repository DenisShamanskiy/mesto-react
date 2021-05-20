import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoadingData }) {
  const [place, setPlace] = React.useState("");
  const [link, setLink] = React.useState("");

  const [inputValidPlace, setInputValidPlace] = React.useState(true);
  const [inputValidLink, setInputValidLink] = React.useState(true);
  const [placeValidationMessage, setPlaceValidationMessage] =
    React.useState("");
  const [linkValidationMessage, setLinkValidationMessage] = React.useState("");
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);
  const [placeInputInitial, setPlaceInputInitial] = React.useState(true);
  const [linkInputInitial, setLinkInputInitial] = React.useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: place, link });
  }

  function handlePlace(evt) {
    setPlace(evt.target.value);
    checkPlaceValidation(evt.target);
  }

  function handleLink(evt) {
    setLink(evt.target.value);
    checkLinkValidation(evt.target);
  }

  React.useEffect(() => {
    setPlace("");
    setLink("");
    setInputValidPlace(true);
    setInputValidLink(true);
    setButtonSubmitState(false);
    setPlaceInputInitial(true);
    setLinkInputInitial(true);
  }, [isOpen]);

  React.useEffect(() => {
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

  function checkPlaceValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setPlaceInputInitial(false);
      setInputValidPlace(false);
      setPlaceValidationMessage(inputElement.validationMessage);
    } else {
      setPlaceInputInitial(false);
      setInputValidPlace(true);
    }
  }

  function checkLinkValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setLinkInputInitial(false);
      setInputValidLink(false);
      setLinkValidationMessage(inputElement.validationMessage);
    } else {
      setLinkInputInitial(false);
      setInputValidLink(true);
    }
  }

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
      buttonSubmitState={buttonSubmitState}
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
