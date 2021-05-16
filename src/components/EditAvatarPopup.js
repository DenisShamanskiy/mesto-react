import React from "react";
import PopupWithForm from "./PopupWithForm";

//import { Validation } from "./Validaion";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoadingData }) {
  //const { values, errors, isValid, handleChange, resetForm } = Validation({});

  const inputAvatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonSubmitText="Сохранить"
      loadingButtonSubmitText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      //isDisabled={!isValid}
      contentLabel="Форма редактирования аватара пользователя"
      isLoadingData={isLoadingData}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
            type="url"
            name="link"
            id="avatar-url"
            aria-label="Cсылка на изображение"
            placeholder="Cсылка на изображение"
            className="popup__input popup__input_type_link"
            required
            ref={inputAvatarRef}
          />
          <span className="popup__input-error popup__input-error_type_link"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
