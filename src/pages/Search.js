import React from 'react';
import Layout from '../HOC/Layout';
import Categories from '../components/Categories';
import BookCard from '../components/BookCard';
import { useSearchParams } from 'react-router-dom';
import { useSearchBook } from '../hooks/userSearchBooks';
import loadingIcon from '../assets/loadingIcon.gif';

const Home = () => {
  const [search] = useSearchParams();
  const { loading, error, data } = useSearchBook(
    search.get('key') ? search.get('key') : search.get('cat')
  );

  return (
    <Layout>
      <div className="container">
        <Categories />
        {loading ? (
          <>
            <img src={loadingIcon} alt="" />
          </>
        ) : (
          <>
            <p className="font-semibold text-xl text-left my-5">
              {data?.books.length} Buku ditemukan
            </p>

            <div className="grid grid-cols-5 gap-4 gap-y-6 p-4 bg-slate-50">
              {data?.books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
