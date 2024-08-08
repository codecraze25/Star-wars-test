import './App.css';
import { CharacterList } from './components/Character';
import Topbar from './components/Topbar';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-950">
      <Topbar />
      <CharacterList />
    </div>
  );
};

export default App;
