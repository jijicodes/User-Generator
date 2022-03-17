export const getNationality = async (name) => {
  const url = `https://api.nationalize.io/?name=${name}`;
  const response = await fetch(url);
  const getData = await response.json();
  return getData;
};
