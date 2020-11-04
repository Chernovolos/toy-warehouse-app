import axios from "axios";

const BASE_URL = 'http://localhost:8080';
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});


// LOGIN API
const login = (user, token) => {
    return instance.post("/login", JSON.stringify(user), {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

const profileUser = () => {
    return instance.get(`${BASE_URL}`)
};

// TOYS API
const getToys = (token) => {
    return instance.get("/toys", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

const getToy = (id, token) => {
    return instance.get(`/toys/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

const createToy = (toy, token) => {
  return instance.post("/toys", JSON.stringify(toy), {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  })
};

const updateToy = (id, toy, token) => {
    return instance.put(`/toys/${id}`, JSON.stringify(toy), {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};


// CATEGORIES API
export const getCategories = (token) => {
  return instance.get("/categories", {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  })
};

export const createCategory = (newCategory, token) => {
    let name = newCategory;
    console.log(typeof name);
    return instance.post("/categories", {name}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

export const getCategory = (id, token) => {
    return instance.get(`/categories/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

export const deleteCategory = (id, token) => {
    return instance.delete(`/categories/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

export const changeCategory = (id, token, category) => {
    return instance.put(`/categories/${id}`, JSON.stringify(category), {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

// TRANSACTIONS API
export const getTransactions = (token) => {
    return instance.get("/transactions", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

export const getTransaction = (id, token) => {
    return instance.get(`/transactions/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

export const createTransactions = (token, transaction) => {
    return axios.post("/transactions", JSON.stringify(transaction), {
        headers: {
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
    getCategories,
    getTransactions,
    createToy,
    createTransactions,
    getTransaction,
    createCategory,
    getCategory,
    deleteCategory,
    changeCategory,
}

// const getToy = (token, id) => {
//     return axios.get(`${BASE_URL}/toys/${id}`, {
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };
//
// const createToy = (token, toy) => {
//     return axios.post(`${BASE_URL}/toys`, JSON.stringify(toy),{
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };
//
// const updateToy = (token, id, toy) => {
//     return axios.put(`${BASE_URL}/toys/${id}`, JSON.stringify(toy), {
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };
//
// export const getCategory = (token) => {
//     return axios.get(`${BASE_URL}/categories`, {
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };
// //
// // export const createCategory = (token, newCategory) => {
// //     let name = newCategory;
// //     return axios.post(`${BASE_URL}/categories`, {name},{
// //         headers: {
// //             'content-type': 'application/json',
// //             'Authorization': `Bearer ${token}`
// //         }
// //     })
// // };
//
//
//
//
// // export default function setAuthorizationToken(token) {
// //     if(token) {
// //         axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
// //     } else {
// //         delete axios.defaults.headers.common['authorization'];
// //     }
// // }
//
// export const createCategory = (token, newCategory) => {
//     let name = newCategory;
//     return instance.post("/categories", {name},{
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };
//
// export const getTransactions = (token) => {
//     return axios.get(`${BASE_URL}/transactions`, {
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };
//
// export const getTransaction = (token, id) => {
//     return axios.get(`${BASE_URL}/transactions/${id}`, {
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };
//
// export const createTransactions = (token, transaction) => {
//     return axios.post(`${BASE_URL}/transactions`, JSON.stringify(transaction),{
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     })
// };