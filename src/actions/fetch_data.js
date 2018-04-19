import axios from 'axios';

export default function fetchData() {

    const API_KEY = '......'
    const END_POINT = 'https://api.nasa.gov/planetary/......'
    const request = axios.get(END_POINT+API_KEY);

    return {
        type: 'FETCH_DATA',
        payload: request
    }




}