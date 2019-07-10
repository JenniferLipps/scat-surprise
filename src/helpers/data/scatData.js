import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseConfig.databaseURL;

const getScats = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const scats = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          scats.push(res.data[fbKey]);
        });
      }
      resolve(scats);
    })
    .catch(err => console.error('no scats', err));
});

const deleteScat = scatId => axios.delete(`${baseUrl}/scats/${scatId}.json`);

const getSingleScat = scatId => axios.get(`${baseUrl}/scats/${scatId}.json`);

const postScat = newScat => axios.post(`${baseUrl}/scats.json`, newScat);

export default {
  getScats,
  deleteScat,
  getSingleScat,
  postScat,
};
