const getItems = async (q) => {
  const response = await fetch(`https://api.github.com/search/users?q=${q} in:login`);
  const responseData = await response.json();

  return responseData.items;
};

export default getItems;
