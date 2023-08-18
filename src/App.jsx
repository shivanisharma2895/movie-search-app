import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import MovieApp from './component/main-panel';
import SelectedMovie from './component/selected-movie';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieApp />} />
        <Route path='/select' element={<SelectedMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
