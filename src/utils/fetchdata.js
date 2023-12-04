export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4ae836e6e2msh70791e6394c6f16p16d651jsn43506293c5bb",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
