import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('https://facility-manager-v1.azurewebsites.net/api/user/register', {
      "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "firstName": "string",
      "lastName": "string",
      "email": "stefan@wp.pl",
      "phone": "string",
      "password": "string",
      "isEmailVerified": true,
      "roles": [
        "string"
      ],
      "verificationEmailToken": "string",
      "resetPasswordToken": "string"
    });
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
}