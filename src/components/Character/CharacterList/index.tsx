import { useEffect, useState } from "react"
import { Character } from "../../../types"
import { fetchAllCharactersCount, fetchCharactersByPage } from "../../../helpers/fetch";
import { ITEMS_PER_PAGE } from "../../../constants/consts";
import { Loading, Pagination } from "../../Common";
import { CharacterCard } from "../CharacterCard";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    //  get the count of total characters
    const loadTotalPages = async () => {
      try {
        const totalCharactersCount = await fetchAllCharactersCount();
        setTotalPages(Math.ceil(totalCharactersCount / ITEMS_PER_PAGE));
      } catch (err) {
        setError('Failed to fetch total characters count');
      }
    }
    loadTotalPages();
  }, []);

  useEffect(() => {
    // get characters by page
    const loadCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const charactersData = await fetchCharactersByPage(currentPage);
        setCharacters(charactersData);
      } catch (err) {
        setError('Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, [currentPage]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <div className="flex flex-col">
        <div className="flex justify-center my-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="image-list flex flex-wrap">
          {!loading &&
            characters.map((character) => (
              <CharacterCard key={character.url} character={character} />
            ))}
        </div>
      </div>
    </div>
  )
}

export { CharacterList }