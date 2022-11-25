import axios from 'axios';
import Config from './config';

export const get = async (endUrl, payload, successCallback, erorCallback) => {
  const API_URL = Config.BASE_URL;
  return axios
    .get(`${API_URL + endUrl}`, {
      params: payload,
    })
    .then(response => {
      successCallback(response);
    })
    .catch(error => {
      erorCallback(error);
    });
};
