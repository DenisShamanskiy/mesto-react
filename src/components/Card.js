<<<<<<< HEAD
function Card({ card, onClickCard }) {
=======
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onClickCard, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `elements__button-remove ${
    isOwn ? "elements__button-remove_visible" : "elements__button-remove_hidden"
  }`;

  const cardLikeButtonClassName = isLiked
    ? "elements__button-like elements__button-like_active"
    : "elements__button-like";

>>>>>>> develop_11
  function handleClick() {
    onClickCard(card);
  }

<<<<<<< HEAD
=======
  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

>>>>>>> develop_11
  return (
    <div className="elements__item">
      <img
        className="elements__image"
        src={`${card.link}`}
        alt=""
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="Удалить"
<<<<<<< HEAD
        className="elements__button-remove"
=======
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
>>>>>>> develop_11
      ></button>
      <div className="elements__description">
        <h2 className="elements__name">{card.name}</h2>
        <div className="elements__like-container">
          <button
            type="button"
            aria-label="Нравится"
<<<<<<< HEAD
            className="elements__button-like"
=======
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
>>>>>>> develop_11
          ></button>
          <div className="elements__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
