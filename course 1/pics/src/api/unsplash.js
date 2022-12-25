import axio from 'axios'

export default axio.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 9rJ3qYc-QS5ggHO4clbV-33lX2jgzcIeBhxHLqF5lbU'
    }
});