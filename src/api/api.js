import axios from "axios"

const API = axios.create({
    baseURL: "https://my-json-server.typicode.com/hadi-b-js/Easy-Todo"
})

export default API