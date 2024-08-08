import { useEffect, useState } from 'react';
import { Character } from "../../../types"
import { getRandomInt } from "../../../helpers/math";

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { name } = character;

  const [imageId, setImageId] = useState<number | null>(null);

  useEffect(() => {
    setImageId(getRandomInt());
  }, []);

  if (imageId === null) return null;
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/5 mb-8 cursor-pointer"
    >
      <div className="rounded overflow-hidden shadow mx-2 dark:bg-gray-800 dark:text-white">
        <div className="relative overflow-hidden">
          <img
            className="w-full transform transition-transform duration-500 ease-in-out hover:scale-125"
            src={`https://picsum.photos/seed/${imageId}/200`}
            alt={name}
          />
        </div>
        <div className="px-6 pb-4 z-50">
          <div className="flex flex-wrap">
            <div className="grow pt-4">
              <p className="author break-words whitespace-pre-wrap text-sm">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CharacterCard }