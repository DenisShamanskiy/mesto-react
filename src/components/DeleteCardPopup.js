import React from "react";

import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, onSubmit }) {
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="remove"
      buttonSubmitText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    ></PopupWithForm>
  );
}

export default DeleteCardPopup;
