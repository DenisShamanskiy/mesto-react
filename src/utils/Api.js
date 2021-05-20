import { settingsApi } from "./utils.js";
class Api {
  constructor({ idCohort, token, urlServer }) {
    this._idCohort = idCohort;
    this._token = token;
    this._urlServer = urlServer;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

<<<<<<< HEAD
  getUser() {
=======
  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  getUserInfo() {
>>>>>>> develop_11
    return fetch(`${this._urlServer}/${this._idCohort}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._urlServer}/${this._idCohort}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

<<<<<<< HEAD
  patchUserInfo(user) {
=======
  setUserInfo(user) {
>>>>>>> develop_11
    return fetch(`${this._urlServer}/${this._idCohort}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      }),
    }).then(this._checkResponse);
  }

<<<<<<< HEAD
=======
  setUserAvatar(link) {
    return fetch(`${this._urlServer}/${this._idCohort}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse);
  }

>>>>>>> develop_11
  postCard(card) {
    return fetch(`${this._urlServer}/${this._idCohort}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then(this._checkResponse);
  }

<<<<<<< HEAD
  likeCard(card) {
    return fetch(
      `${this._urlServer}/${this._idCohort}/cards/likes/${card._id}`,
      {
        method: "PUT",
        headers: {
          authorization: this._token,
        },
      }
    ).then(this._checkResponse);
  }

  dislikeCard(card) {
    return fetch(
      `${this._urlServer}/${this._idCohort}/cards/likes/${card._id}`,
      {
        method: "DELETE",
=======
  /*
  likeCard(id) {
    return fetch(`${this._urlServer}/${this._idCohort}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  dislikeCard(id) {
    return fetch(`${this._urlServer}/${this._idCohort}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }
*/

  changeLike(card, isLikedStatus) {
    //console.log(isLikedStatus);
    return fetch(
      `${this._urlServer}/${this._idCohort}/cards/likes/${card._id}`,
      {
        method: !isLikedStatus ? "DELETE" : "PUT",
>>>>>>> develop_11
        headers: {
          authorization: this._token,
        },
      }
    ).then(this._checkResponse);
  }

  getCountsOfLikes(card) {
    return fetch(
      `${this._urlServer}/${this._idCohort}/cards/likes/${card._id}`,
      {
        headers: {
          authorization: this._token,
        },
      }
    ).then(this._checkResponse);
  }

  deleteCard(card) {
    return fetch(`${this._urlServer}/${this._idCohort}/cards/${card._id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }
<<<<<<< HEAD

  changeAvatar(link) {
    return fetch(`${this._urlServer}/${this._idCohort}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse);
  }
=======
>>>>>>> develop_11
}

const api = new Api(settingsApi);
export default api;
