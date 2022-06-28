
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home';
import List from './pages/lists/lists';
import Hotel from './pages/hotel/hotel'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hotels' element={<List />}></Route>
         <Route path='/hotels/:id' element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
