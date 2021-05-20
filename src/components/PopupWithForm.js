<<<<<<< HEAD
=======
import React from "react";

>>>>>>> develop_11
function PopupWithForm({
  title,
  name,
  buttonSubmitText,
<<<<<<< HEAD
  children,
  isOpen,
  onClose,
=======
  loadingButtonSubmitText,
  isLoadingData,
  children,
  isOpen,
  onClose,
  onSubmit,
  buttonSubmitState,
>>>>>>> develop_11
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_form">
        <h2 className="popup__title">{title}</h2>
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__button-close"
          onClick={onClose}
        ></button>
<<<<<<< HEAD
        <form className="popup__form" name={name} noValidate>
          {children}
          <button type="submit" className="popup__button-save">
            {buttonSubmitText}
=======
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            className={`popup__button-save ${
              !buttonSubmitState ? "popup__button-save_inactive" : ""
            }`}
            disabled={!buttonSubmitState ? true : ""}
          >
            {isLoadingData ? loadingButtonSubmitText : buttonSubmitText}
>>>>>>> develop_11
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
