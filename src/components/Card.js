function Card({ card, onClickCard }) {
  function handleClick() {
    onClickCard(card);
    //console.log(card);
  }

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
        className="elements__button-remove"
      ></button>
      <div className="elements__description">
        <h2 className="elements__name">{card.name}</h2>
        <div className="elements__like-container">
          <button
            type="button"
            aria-label="Нравится"
            className="elements__button-like"
          ></button>
          <div className="elements__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
