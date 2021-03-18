const API_URL = 'https://22.javascript.pages.academy/keksobooking';

const fetchData = () => {
  return fetch (
    `${API_URL}/data`,
  )
    .then((response) => {
      return response.json()
    })
};

const postData = (data) => {
  return fetch (
    API_URL,
    {
      method: 'POST',
      body: data,
    },
  )
};

export {fetchData, postData};
