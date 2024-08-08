import { apiEndPoints } from '../constants/apiEndPoints';
import { Character } from '../types';

const fetchCharactersByPage = async (page: number): Promise<Character[]> => {
  const url = `${apiEndPoints.all_Characters}?page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

const fetchAllCharactersCount = async (): Promise<number> => {
  const url = apiEndPoints.all_Characters;
  const response = await fetch(url);
  const data = await response.json();
  return data.count;
};

export { fetchCharactersByPage, fetchAllCharactersCount };
