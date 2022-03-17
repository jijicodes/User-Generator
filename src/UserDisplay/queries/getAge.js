export const getAge = async (name) => {
  const url = `https://api.agify.io/?name=${name}`;
  const response = await fetch(url);
  const getAge = await response.json();

  return getAge;
};
