import React from 'react';
import Layout from '../HOC/Layout';
import Categories from '../components/Categories';
import BookCard from '../components/BookCard';
import { useBooks } from '../hooks/useBooks';

const Home = () => {
  const { loading, error, data } = useBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <Layout>
      <div className="container">
        <Categories />
        <p className="font-semibold text-xl text-center my-5">
          Kuasai segala jenis kemampuan dengan membaca buku
        </p>

        <div className="grid grid-cols-5 gap-4 gap-y-6 p-4 bg-slate-50">
          {data?.books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
