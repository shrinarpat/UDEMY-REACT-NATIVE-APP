import {JSON_SERVER_URL} from './constants';

const useUserAuth = () => {
  const signUpUser = formData => {
    return fetch(JSON_SERVER_URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };

  const loginUser = (email, password) => {
    return fetch(
      `${JSON_SERVER_URL}/users?email=${email}&password=${password}`,
    );
  };

  return {signUpUser, loginUser};
};

export default useUserAuth;
