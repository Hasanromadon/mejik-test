import React from 'react';
import Layout from '../HOC/Layout';
import Categories from '../components/Categories';
import BookCard from '../components/BookCard';
import { useSearchParams } from 'react-router-dom';
import { useSearchBook } from '../hooks/userSearchBooks';
import loadingIcon from '../assets/loadingIcon.gif';

const Search = () => {
  const [search] = useSearchParams();
  const filter = search.get('key')
    ? {
        name: search.get('key'),
        by: 'title',
      }
    : {
        name: search.get('cat'),
        by: 'category',
      };
  const { loading, error, data } = useSearchBook(filter);

  return (
    <Layout>
      <div className="container">
        <Categories />
        {loading ? (
          <>
            <div className="text-center">
              <img className="inline" src={loadingIcon} alt="" />
            </div>
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

export default Search;
