import { Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';

import  Palette from './Palette';

function App() {

  const findPalette = (id) => seedPalettes.find(palette => palette.id === id);
  const PaletteWrapper = () => {
    const { id } = useParams();
    const palette = generatePalette(findPalette(id))
    return <Palette palette={palette} />;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<PaletteList palettes={seedPalettes} />} />
        <Route path="/palette/:id" element={<PaletteWrapper />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
