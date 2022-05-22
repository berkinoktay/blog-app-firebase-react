import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Sidebar from './Sidebar';
import { db } from '../firebase';
import Seperator from './Seperator';
const DetailSection = () => {
  const { postSlug } = useParams();
  const [data, setData] = useState({});
  const getData = async () => {
    let post = {};

    const q = query(collection(db, 'posts'), where('postSlug', '==', postSlug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      post = { ...doc.data() };
    });
    setData(post);
  };
  useEffect(() => {
    getData();
  }, [postSlug]);

  return (
    <main className="flex-1 w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start">
          <section className="flex flex-1 flex-col bg-white rounded shadow">
            <div className="p-7">
              <div className="flex items-center capitalize text-sm mb-3">
                <Link to="/">Anasayfa</Link> <MdKeyboardArrowRight />
                <span className="text-red-500"> {data.postCategoryName}</span>
              </div>
              <h1 className="font-semibold text-3xl">{data.postName}</h1>
              <div className="my-3 text-xs text-gray-700 flex items-center ">
                <span className='after:content-["·"] after:mx-2'>
                  Yazar: <strong>Berkin Oktay</strong>
                </span>
                <span>
                  {new Date(
                    data?.postCreatedTime?.seconds * 1000
                  ).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <Seperator />
            </div>
            <figure className="w-full block">
              <LazyLoadImage
                src={data.postImage}
                width="100%"
                className="max-w-full max-h-[30rem] object-fill w-full "
                effect="blur"
              />
            </figure>
            <div className="p-6">
              <p>{data.postDesc}</p>
            </div>
          </section>
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default DetailSection;
