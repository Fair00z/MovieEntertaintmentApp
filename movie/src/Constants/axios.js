import axios from 'axios'
import {baseURl} from './constants'

const instance = axios.create({
  baseURL: baseURl,
});

export default instance;