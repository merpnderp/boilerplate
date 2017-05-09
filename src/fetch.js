import "whatwg-fetch";

let CSRFToken = undefined;

export function setCSRFToken(token) {
  CSRFToken = token;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    Promise.reject(error);
  }
}

function parseJSON(response) {
  return response.json();
}

export function getAJAX(url) {
  return fetch(url, {
    credentials: "include",
    headers: {
      "X-CSRF-TOKEN": CSRFToken
    }
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function postForm(url, form) {
  return fetch(url, {
    credentials: "include",
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": CSRFToken
    },
    body: new FormData(form)
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function postAJAX(url, object) {
  return new Promise((resolve, reject) => {
    window.fetch(url, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": CSRFToken
      },
      body: JSON.stringify(object)
    }).then(res => {
      if (res.ok) {
        res.json().then(resolve).catch(reject);
      } else {
        reject(res)
      }
    }).catch(reject);
  })
}

export function getCurrentUser() {
  return postAJAX('users/getCurrentUser');
}