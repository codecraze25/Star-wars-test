import classNames from 'classnames';
import { Character } from '../../../types';
import { Modal } from '../../Common';

interface CharacterModalProps {
  character: Character;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  isOpen,
  onClose,
}) => {
  const { name, height, mass, created, films, birth_year } = character;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formatMass = (mass: string): string =>
    mass === 'unknown' ? mass : `${mass} kg`;

  const formatHeight = (height: string): string =>
    height === 'unknown' ? height : `${height} cm`;

  // Utility function for class names
  const getClassName = (value: string): string =>
    classNames({
      'text-red-500': value === 'unknown',
    });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Height:</span>
            <span className={getClassName(height)}>
              {' '}
              {formatHeight(height)}
            </span>
          </p>
          <p>
            <span className="font-semibold">Mass:</span>
            <span className={getClassName(mass)}> {formatMass(mass)}</span>
          </p>
          <p>
            <span className="font-semibold">Birth Year:</span>
            <span className={getClassName(birth_year)}> {birth_year}</span>
          </p>
          <p>
            <span className="font-semibold">Created:</span>{' '}
            {formatDate(created)}
          </p>
          <p>
            <span className="font-semibold">Films:</span> {films.length}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export { CharacterModal };
