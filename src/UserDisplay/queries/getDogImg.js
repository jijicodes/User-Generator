export const getDogImg = async () => {
  const url = `https://dog.ceo/api/breeds/image/random`;
  const response = await fetch(url);
  const getData = await response.json();

  return getData;
};
