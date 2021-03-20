/* eslint-disable no-console */
import axios from 'axios';
import API_ENV from '../config/api.config';

/**
 * Function login. Make login request to API
 * @param {object} param obj sign in key
 *
 */
export async function signIn(param = {}) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/signup`,
      JSON.stringify(param),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err) ;
    return Promise.reject(err);
  }
}
