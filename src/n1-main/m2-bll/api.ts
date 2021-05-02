import axios from 'axios'

const settings = {
    withCredentials: true,
}


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    ...settings
})

export const cardAPI = {
    createTask(email: string, from: string, message:string) {
        return instance.post('auth/forgot', {email,from,message});
    },
}

