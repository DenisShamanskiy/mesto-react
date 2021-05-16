import React from "react";
import "../index.css";
import Card from "./Card.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  cards,
  editAvatar,
  editProfile,
  addPlace,
  onClickCard,
  onCardLike,
  onCardDeleteRequest,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  //console.log(card);

  //const [cards, setCards] = React.useState([]);
  //const [cardForDelete, setCardForDelete] = React.useState({});

  /*function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then(
      (newCard) => {
        const newCards = cards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        );
        setCards(newCards);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ///

  function handleCardDelete(_id) {
    api.deleteCard(_id).then(
      () => {
        //const newCards = cards.filter((elem) => elem !== currentUser._id);
        const newCards = cards.filter(function (elem) {
          return elem !== currentUser._id;
        });
        setCards(newCards);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  React.useEffect(() => {
    api.getCards().then(
      (data) => {
        setCards(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [setCards]);*/

  return (
    <main>
      <section className="profile page__container">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
          onClick={editAvatar}
        ></div>
        <div className="profile__info">
          <div className="profile__description">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              aria-label="Редактировать"
              className="profile__button-edit"
              onClick={editProfile}
            ></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить"
          className="profile__button-add-image"
          onClick={addPlace}
        >
          {" "}
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onClickCard={onClickCard}
            onCardLike={onCardLike}
            onCardDeleteRequest={onCardDeleteRequest}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
