import { Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
