export const getGender = async (name) => {
  const url = `https://api.genderize.io/?name=${name}`;
  const response = await fetch(url);
  const getData = await response.json();
  return getData;
};
