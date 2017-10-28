const URL = 'https://api.themoviedb.org/3/search/';

const fetchFilms = async (query, typeOfQuery) => {
  const result = await fetch(`${URL}${typeOfQuery}?api_key=da833af6d87a8331c27ee63a7fced1b1&query=${query}`).then(res => res.json());
  return result;
};

export default fetchFilms;
