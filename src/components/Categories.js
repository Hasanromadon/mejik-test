import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const GET_CATEGORIES = gql`
    query {
      categories {
        id
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const handleClickCategory = (cat) => {
    navigate(`/search?cat=${cat}`);
  };

  return (
    <div className="flex justify-center">
      {data?.categories?.map((category) => (
        <button
          onClick={() => handleClickCategory(category?.name)}
          key={category.id}
          className="rounded-full border border-cyan-600 px-4 py-1 mx-2 my-3 text-cyan-600"
        >
          {category?.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
