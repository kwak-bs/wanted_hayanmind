import { API_ENDPOINT, MAX } from '../constants/index';

export const getComments = async (page) => {
  const response = await fetch(`${API_ENDPOINT}?_page=${page}&_limit=${MAX}`, {
    method: 'GET',
  }).then((res) => res.json());
  return response;
};
