import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {string} email
 * @param {string} password
 *
 */
export async function login(email, password) {
    try {
        const response = await axios.post(
            `/auth/login`,
            JSON.stringify({email, password}),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}
