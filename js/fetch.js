const fetchData = () => {
  return fetch (
    'https://22.javascript.pages.academy/keksobooking/data',
  )
    .then((response) => {
      return response.json()
    })
};

const postData = (data) => {
  return fetch (
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
      // credentials: multipart/form-data,
    },
  )
};

export {fetchData, postData};
