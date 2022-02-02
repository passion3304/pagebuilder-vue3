import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost'

const Api = {
    login: async (credentials) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.post('/login', credentials)

            if(response.status == 200) {
                return true
            }

            return false
        }
        catch (error) {
            return false
        }
    },

    logout: async () => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/logout')

            return true
        }
        catch (error) {
            return false
        }
    },

    register: async (data) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.post('/register', data)

            if(response.status == 201) {
                return true
            }

            return false
        }
        catch (error) {
            return false
        }
    },

    isAuthenticated: async () => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.get('/api/v1/auth/check')
            
            return response.data.authenticated
        }
        catch (error) {
            return false
        }
    },

    fetchLandingPages: () => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.get('/api/v1/landing-pages')
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
            
        })
    },

    getLandingPage: async (uuid) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.get('/api/v1/landing-pages/' + uuid)
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    getLandingPageBySlug: (slug) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.get('/api/v1/public/landing-pages/' + slug)
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    fetchAccount: async () => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.get('/api/v1/auth/account')
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    updatePages: (uuid, data) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.put('/api/v1/landing-pages/' + uuid, {pages: data})
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    updateDraft: async (uuid, data) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.put('/api/v1/landing-pages/' + uuid + '/draft', {pages: data})
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    deleteLandingPage: (uuid) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.delete('/api/v1/landing-pages/' + uuid)
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    createLandingPage: (data) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('/api/v1/landing-pages', data)
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}

export default Api
