import axios from "axios";
const BASE_URL = 'http://localhost:8080';

// const headers = {
//     'content-type': 'application/json',
//     'Authorization': `Bearer ${token}`,
// };
// export const get = async (resource, token) => {
//     return fetch([BASE_URL, resource].join('/'),
//         {
//             headers: {
//                 'content-type': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 }
//         })
//         .then((res) => res.json())
//         .then((res) => {
//             return res;
//         })
// };

const headers = {
    'content-type': 'application/json',
};

const login = (user) => {
    return axios.post(`${BASE_URL}/login`, JSON.stringify(user),{headers})
};

const profileUser = (token) => {
    return axios.get(`${BASE_URL}`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

const getToys = (token) => {
    return axios.get(`${BASE_URL}/toys`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

const getToy = (token, id) => {
    return axios.get(`${BASE_URL}/toys/${id}`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

const createToy = (token, toy) => {
  return axios.post(`${BASE_URL}/toys`, JSON.stringify(toy),{
      headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  })
};

const updateToy = (token, id, toy) => {
    return axios.put(`${BASE_URL}/toys/${id}`, JSON.stringify(toy), {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

export const getCategory = (token) => {
  return axios.get(`${BASE_URL}/categories`, {
      headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  })
};

export const getTransactions = (token) => {
    return axios.get(`${BASE_URL}/transactions`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

export const getTransaction = (token, id) => {
    return axios.get(`${BASE_URL}/transactions/${id}`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

export const createTransactions = (token, transaction) => {
    return axios.post(`${BASE_URL}/transactions`, JSON.stringify(transaction),{
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

export default {
    login,
    getToys,
    getToy,
    updateToy,
    profileUser,
    getCategory,
    getTransactions,
    createToy,
    createTransactions,
    getTransaction,
}