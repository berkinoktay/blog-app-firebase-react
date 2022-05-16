import { Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName" element={<Category />} />
        <Route path="/:categoryName/:slug" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
