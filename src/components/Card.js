function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__element">
      <img
        className="elements__image"
        src={`${card.link}`}
        alt=""
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="Удалить"
        className="elements__btn-remove"
      ></button>
      <div className="elements__place">
        <h2 className="elements__name text-cut">{card.name}</h2>
        <div className="cards__likes-container">
          <button
            type="button"
            aria-label="Нравится"
            className="elements__like"
          ></button>
          <div className="elements__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
