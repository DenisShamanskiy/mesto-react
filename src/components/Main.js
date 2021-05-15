import React from "react";
import "../index.css";
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

  return (
    <main>
      <section className="profile page__container">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userInfo.userAvatar})` }}
          onClick={editAvatar}
        ></div>
        <div className="profile__info">
          <div className="profile__description">
            <h1 className="profile__name">{userInfo.userName}</h1>
            <button
              type="button"
              aria-label="Редактировать"
              className="profile__button-edit"
              onClick={editProfile}
            ></button>
          </div>
          <p className="profile__about">{userInfo.userAbout}</p>
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
        {cards.map((card) => {
          return <Card key={card._id} card={card} onClickCard={onClickCard} />;
        })}
      </section>
    </main>
  );
}

export default Main;
