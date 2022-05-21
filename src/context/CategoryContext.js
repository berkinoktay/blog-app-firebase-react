import { createContext, useState, useContext, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      const q = query(
        collection(db, 'categories'),
        orderBy('timestamp', 'desc')
      );
      onSnapshot(q, (querySnapshot) => {
        setCategories(querySnapshot.docs.map((category) => category.data()));
      });
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
  }, []);

  const values = {
    categories,
    setCategories,
  };
  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};
// Custom Hook olarak kullanırsak daha temiz kod yazabiliriz.
export const useCategory = () => useContext(CategoryContext);
