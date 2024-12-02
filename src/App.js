import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { PageFirstPage} from './components/pages/pageFirstPage/PageFirstPage';
import { PageGamePage} from './components/pages/pageGamePage/PageGamePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<PageFirstPage/>} />
       <Route path="/play" element={<PageGamePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
