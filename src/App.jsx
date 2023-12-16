import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';
import Characters from './components/Characters';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:page" element={<Characters />} />
        <Route path="/character/:name" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
