const fetchData = () => {
  return fetch (
    'https://22.javascript.pages.academy/keksobooking/data',
  )
  .then((response) => {
    return response.json()
  })
};

export {fetchData};
