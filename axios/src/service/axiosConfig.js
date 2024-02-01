import axios from 'axios';
import { BASE_URL } from './address.js';

const DEFAULT_HEADER = 'application/json;charset=UTF-8';

export const privateService = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': DEFAULT_HEADER },
  timeout: 5000,
  responseType: 'json',
});
//* default로 사용될 instance
export const publicService = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': DEFAULT_HEADER },
  responseType: 'json',
});
