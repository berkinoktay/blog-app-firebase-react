import { createContext, useState, useContext, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  useEffect(() => {
    try {
      const categoryQuery = query(
        collection(db, 'categories'),
        orderBy('timestamp', 'desc')
      );

      onSnapshot(categoryQuery, (snapshot) => {
        const categories = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categories);
      });
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
  }, []);

  const values = {
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    isVisibleModal,
    setIsVisibleModal,
  };
  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};
// Custom Hook olarak kullanırsak daha temiz kod yazabiliriz.
export const useCategory = () => useContext(CategoryContext);
