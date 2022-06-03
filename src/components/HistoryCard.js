import React from 'react';
import clockIcon from '../assets/clock.svg';
import statusIcon from '../assets/status.svg';
import penaltyIcon from '../assets/penalty.svg';

const HistoryCard = () => {
  return (
    <div>
      <div className="bg-white p-8 rounded grid grid-cols-4 gap-2 border mb-1">
        <span>Dua Dunia</span>
        <p>
          <img className="inline" src={clockIcon} alt="" />{' '}
          <span className="align-middle">21 Jul 2022 - 23 Jul 2022</span>
        </p>
        <p className="text-center">
          <img className="inline" src={statusIcon} alt="" />{' '}
          <span className="align-middle">Borrowed</span>
        </p>
        <p>
          <img className="inline" src={penaltyIcon} alt="" />{' '}
          <span className="align-middle">IDR . 3000.000 (3 Days)</span>
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;
