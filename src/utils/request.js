// import { fetch } from 'whatwg-fetch';


class Model {
  checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  parseJSON = (response) => {
    return response.json()
  }

  genQueryString = (params) => {
    return Object
    .keys(params)
    .map(keyName => {
      if (Array.isArray(params[keyName])) {
        return params[keyName]
          .map(val => `${encodeURIComponent(keyName)}[]=${encodeURIComponent(params[val])}`)
          .join('&')  
      }

      return `${encodeURIComponent(keyName)}=${encodeURIComponent(params[keyName])}`
    })
    .join('&');
  }

  get = (url, params) => {
    let querys;
    if (params) {
      querys = this.genQueryString(params);
    }
    return new Promise((resolve, reject) => {
      fetch(`${url}?${querys}`)
        .then(this.checkStatus)
        .then(this.parseJSON)
        .then((ret) => {
          resolve(ret);
        })
        .catch((err) => {
          reject(err);
        });
    })
  }

  post = (url, params) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((ret) => {
        resolve(ret);
      })
      .catch((err) => {
        reject(err);
      });
    }) 
  }
}

const requestModel = new Model();

export default requestModel;