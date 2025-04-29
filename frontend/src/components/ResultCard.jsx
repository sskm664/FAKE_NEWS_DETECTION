import React from 'react';

const ResultCard = ({ prediction }) => {
  return (
    <div className={`alert ${prediction === 'Real' ? 'alert-success' : 'alert-error'} shadow-lg`}>
      <span>
        📰 This news is <strong>{prediction}</strong>
      </span>
    </div>
  );
};

export default ResultCard;
