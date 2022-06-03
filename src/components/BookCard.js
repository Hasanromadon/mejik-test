import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIcon from '../assets/CategoryIcon';
import RackIcon from '../assets/RackIcon.js';

const BookCard = ({ book }) => {
  return (
    <div className="bg-cyan-100 w-full rounded overflow-hidden drop-shadow-sm relative h-96 ">
      {book.status === 'BORROWED' ? (
        <span className="absolute top-2 right-2  drop-shadow-sm  bg-gray-400  text-white text-xs p-1 rounded-sm">
          {book.status}
        </span>
      ) : (
        <span className="absolute top-2 right-2  drop-shadow-sm   bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs p-1 rounded-sm">
          {book.status}
        </span>
      )}

      <img
        className="w-full h-64 object-cover"
        src={book.cover ? book.cover : 'https://picsum.photos/200/300'}
        alt=""
      />
      <div className="bg-white p-3 h-full">
        <Link to={`book/${book.id}`} className="card-link">
          {book.name}
        </Link>
        <div className="flex absolute text-sm bottom-4">
          <p className="mr-3  ">
            <RackIcon />
            <span className="align-middle text-gray-700">
              {'  '}
              {book.rack.name}
            </span>
          </p>
          <p>
            <CategoryIcon />
            <span className="align-middle text-gray-700">
              {' '}
              {book.category.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
