import env from '../constants'

class Auth {
  /**
   * Handles error if success is not present on response object.
   * @param {Object} response
   */
  async handleError(response) {
    if (!response.ok) {
      const json = await response.json()

      throw new Error(json.clientCode ? json.clientCode : 'generic')
    }

    return response
  }

  /**
   * Wraps login API call in a Promise and processes response
   * @param {string} loginId
   * @param {string} password
   */
  login(loginId, password) {
    return new Promise((resolve, reject) => {
      fetch(`${env.base_url}/api/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginId,
          password,
        }),
        credentials: 'include',
      })
        .then(this.handleError)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('attemptSilentLogin', true)

          return resolve(data)
        })
        .catch((e) => {
          return reject(e.message)
        })
    })
  }

  /**
   * Retrieves the current logged in user
   */
  getCurrentUser() {
    return new Promise((resolve, reject) => {
      fetch(`${env.base_url}/api/user`, {
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((user) => {
          return resolve(user)
        })
        .catch(() => {
          return reject()
        })
    })
  }

  /**
   * Retrieves a user using a JWT as authentication. Used
   * for onboarding a new account.
   */
  getCurrentUserByToken(token) {
    return new Promise((resolve, reject) => {
      fetch(`${env.base_url}/api/user/token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(this.handleError)
        .then((response) => response.json())
        .then((user) => {
          return resolve(user)
        })
        .catch((e) => {
          return reject(e.message)
        })
    })
  }

  /**
   * Init request for password reset
   */
  resetPassword(email) {
    return new Promise((resolve, reject) => {
      fetch(`${env.base_url}/api/forgot-password`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })
        .then(this.handleError)
        .then((response) => response.json())
        .then(() => {
          return resolve(true)
        })
        .catch((e) => {
          return reject(e.message)
        })
    })
  }

  /**
   * Retrieves a user using a JWT as authentication. Used
   * for onboarding a new account.
   */
  onboardUser(token, password) {
    return new Promise((resolve, reject) => {
      fetch(`${env.base_url}/api/user/onboard`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
        }),
      })
        .then(this.handleError)
        .then((response) => response.json())
        .then((user) => {
          console.log(user)
          return resolve(user)
        })
        .catch((e) => {
          return reject(e.message)
        })
    })
  }

  /**
   * Retrieves the current logged in user
   */
  logout() {
    return new Promise((resolve, reject) => {
      fetch(`${env.base_url}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      })
        .then((response) => response.json())
        .then(() => {
          localStorage.setItem('attemptSilentLogin', false)

          return resolve()
        })
        .catch((e) => {
          return reject()
        })
    })
  }
}

const AuthClient = new Auth()

export default AuthClient
