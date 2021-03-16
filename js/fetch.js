const API_GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const API_POST_URL = 'https://22.javascript.pages.academy/keksobooking';

const fetchData = () => {
  return fetch (
    API_GET_URL,
  )
    .then((response) => {
      return response.json()
    })
};

const postData = (data) => {
  return fetch (
    API_POST_URL,
    {
      method: 'POST',
      body: data,
    },
  )
};

export {fetchData, postData};
