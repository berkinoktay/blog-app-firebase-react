import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

import PostDetail from './pages/PostDetail';
import Category from './pages/Category';
import AddPost from './pages/AddPost';
// import AllPosts from './components/Panel/AllPosts';
import EditPost from './pages/EditPost';
import EditCategory from './pages/EditCategory';
import { CategoryProvider } from './context/CategoryContext';
import { PostsProvider } from './context/PostContext';

const Home = lazy(() => import('./pages/Home'));
const Panel = lazy(() => import('./pages/Panel'));

function App() {
  return (
    <CategoryProvider>
      <PostsProvider>
        <Suspense
          fallback={
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Spin tip="Sayfa yükleniyor..." size="large" />
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path=":categorySlug" element={<Category />}></Route>
            <Route path=":categorySlug/:postSlug" element={<PostDetail />} />
            {/* <Route
              exact
              path="panel"
              element={
                <Panel breadcrumb="Tüm Yazılar">
                  <AllPosts />
                </Panel>
              }
            ></Route> */}
            <Route
              exact
              path="panel"
              element={
                <Panel breadcrumb="Yazı Yönetimi">
                  <EditPost />
                </Panel>
              }
            />
            <Route
              path="panel/yazi-ekle"
              element={
                <Panel breadcrumb="Yazı Ekle">
                  <AddPost />
                </Panel>
              }
            />

            <Route
              path="panel/yazi-yonetimi"
              element={
                <Panel breadcrumb="Yazı Yönetimi">
                  <EditPost />
                </Panel>
              }
            />
            <Route
              path="panel/kategori-yonetimi"
              element={
                <Panel breadcrumb="Kategori Yönetimi">
                  <EditCategory />
                </Panel>
              }
            />
            <Route path="panel/*" element={<h1>eşleşmedi</h1>} />
          </Routes>
        </Suspense>
      </PostsProvider>
    </CategoryProvider>
  );
}

export default App;
