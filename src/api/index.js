const URL = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';

export const getCards = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
