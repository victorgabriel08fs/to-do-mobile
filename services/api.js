import axios from "axios";

const api = axios.create({ baseURL: 'http://187.44.8.66:1083/api/' });

export { api };