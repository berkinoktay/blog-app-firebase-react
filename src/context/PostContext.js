import { createContext, useState, useContext, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [selectedCategory, setSelectedCategory] = useState({});
  //   const [isVisibleModal, setIsVisibleModal] = useState(false);

  useEffect(() => {
    try {
      const postsQuery = query(
        collection(db, 'posts'),
        orderBy('postCreatedTime', 'desc')
      );

      onSnapshot(postsQuery, (snapshot) => {
        const postSnap = snapshot.docs.map((doc) => ({
          firebaseID: doc.id,
          ...doc.data(),
        }));
        setPosts(postSnap);
        setLoading(false);
      });
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
  }, []);

  const values = {
    posts,
    setPosts,
    loading,
  };
  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};
// Custom Hook olarak kullanırsak daha temiz kod yazabiliriz.
export const usePosts = () => useContext(PostsContext);
