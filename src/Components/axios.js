import axios from 'axios';

const baseURL=`https://restcountries.com/v2/all`;
export const api = axios.create({
     baseURL:baseURL
})
