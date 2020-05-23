import axiosInstance from "../axios";
import qs from "qs";
export const userService = {
  login,
  logout,
  register,
  refreshToken,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(email, password) {
  const sendData = {
    email,
    password,
  };

  return axiosInstance
    .post(
      `/accounts/api-get-token-auth/`,
      JSON.stringify({
        username: email,
        password: password,
      })
    )
    .then(handleResponse)
    .then((user) => {
      console.log(user);
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout(refreshToken) {
  localStorage.removeItem("user");
}

function refreshToken(refreshToken) {}

function getAll() {
  return axiosInstance
    .get(`/api/users`)
    .then(handleResponse)
    .then((data) => {
      return data.users;
    })
    .catch((error) => {
      handleResponse(error.response);
    });
}

function getById(id) {
  return axiosInstance.get(`/users/${id}`).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
    body: user,
  };

  return axiosInstance
    .post(`/api/auth/signup`, requestOptions.body, requestOptions.headers)
    .then(handleResponse);
}

function update(user) {
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return axiosInstance
    .put(`/users/${user.id}`, requestOptions)
    .then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return axiosInstance.delete(`/users/${id}`).then(handleResponse);
}

function handleResponse(response) {
  const data = response.data;
  console.log(data);
  if (!response.status === 200 || !response.status === 201) {
    if (response.status === 400) {
      // auto logout if 401 response returned from api
      logout();
      window.location.reload(true);
    }

    const error = (data && data.message) || response.statusText;

    // eslint-disable-next-line no-throw-literal
    throw { error, code: data.code };
  }

  return data;
}
