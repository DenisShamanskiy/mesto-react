import React from "react";
import "../index.css";
<<<<<<< HEAD
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ editAvatar, editProfile, addPlace, onClickCard }) {
  const [userInfo, setUserInfo] = React.useState({
    userName: "",
    userAbout: "",
    userAvatar: "",
  });

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([userData, cards]) => {
        setUserInfo({
          userName: userData.name,
          userAbout: userData.about,
          userAvatar: userData.avatar,
        });
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
=======
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  cards,
  editAvatar,
  editProfile,
  addPlace,
  onClickCard,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);
>>>>>>> develop_11

  return (
    <main>
      <section className="profile page__container">
        <div
          className="profile__avatar"
<<<<<<< HEAD
          style={{ backgroundImage: `url(${userInfo.userAvatar})` }}
=======
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
>>>>>>> develop_11
          onClick={editAvatar}
        ></div>
        <div className="profile__info">
          <div className="profile__description">
<<<<<<< HEAD
            <h1 className="profile__name">{userInfo.userName}</h1>
=======
            <h1 className="profile__name">{currentUser.name}</h1>
>>>>>>> develop_11
            <button
              type="button"
              aria-label="Редактировать"
              className="profile__button-edit"
              onClick={editProfile}
            ></button>
          </div>
<<<<<<< HEAD
          <p className="profile__about">{userInfo.userAbout}</p>
=======
          <p className="profile__about">{currentUser.about}</p>
>>>>>>> develop_11
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
<<<<<<< HEAD
        {cards.map((card) => {
          return <Card key={card._id} card={card} onClickCard={onClickCard} />;
        })}
=======
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onClickCard={onClickCard}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
>>>>>>> develop_11
      </section>
    </main>
  );
}

export default Main;
