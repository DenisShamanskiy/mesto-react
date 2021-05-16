import React from "react";
import PopupWithForm from "./PopupWithForm";

//import { useFormWithValidation } from '../hooks/useFormWithValidation';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoadingData }) {
  const [place, setPlace] = React.useState("");
  const [link, setLink] = React.useState("");

  function handlePlace(evt) {
    setPlace(evt.target.value);
  }

  function handleLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: place, link });
  }
  /*
  function handleSubmit(evt) {
    evt.preventDefault(evt);
    props.onAddPlace(values);
  }
  

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);
  */

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      buttonSubmitText="Создать"
      loadingButtonSubmitText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      //isDisabled={!isValid}
      contentLabel="Форма добавления изображения"
      isLoadingData={isLoadingData}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
            type="text"
            name="place"
            placeholder="Название"
            className="popup__input popup__input_type_title"
            required
            minLength="2"
            maxLength="30"
            value={place}
            onChange={handlePlace}
          />
          <span className="popup__input-error popup__input-error_type_title"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            required
            value={link}
            onChange={handleLink}
          />
          <span className="popup__input-error popup__input-error_type_link"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
