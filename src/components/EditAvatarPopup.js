import React from "react";
import PopupWithForm from "./PopupWithForm";

//import { useFormWithValidation } from "../hooks/useFormWithValidation";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  //const currentUser = React.useContext(CurrentUserContext);
  const inputAvatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value,
    });
  }

  /*React.useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);*/

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonSubmitText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
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
