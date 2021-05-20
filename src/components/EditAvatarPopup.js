import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoadingData }) {
  //const inputAvatarRef = React.useRef();
  const [link, setLink] = React.useState("");
  const [inputValid, setInputValid] = React.useState(true);
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);
  const [isValidationMessage, setIsValidationMessage] = React.useState("");
  const [linkInputInitial, setLinkInputInitial] = React.useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ avatar: link });
  }

  function handleChange(evt) {
    setLink(evt.target.value);
    //console.log(evt.target.validationMessage);
    if (!evt.target.validity.valid) {
      setInputValid(false);
      setIsValidationMessage(evt.target.validationMessage);
      setLinkInputInitial(false);
    } else {
      setLinkInputInitial(false);
      setInputValid(true);
    }
  }

  React.useEffect(() => {
    setInputValid(true);
    setButtonSubmitState(false);
    setLinkInputInitial(true);
    setLink("");
  }, [isOpen]);

  React.useEffect(() => {
    if (inputValid && !linkInputInitial) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [inputValid, linkInputInitial]);

  /*function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value,
    });
  }*/

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
      buttonSubmitState={buttonSubmitState}
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
