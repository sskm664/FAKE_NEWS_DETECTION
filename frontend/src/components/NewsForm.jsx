import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';
import ConfidenceChart from './ConfidenceChart';

const NewsForm = () => {
  const [news, setNews] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!news.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', { text: news });
      const { real, fake } = response.data;

      const prediction = real > fake ? 'Real' : 'Fake';

      setResult({ prediction, real, fake });
    } catch (error) {
      console.error('Prediction failed:', error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <textarea
        className="textarea textarea-bordered w-full min-h-[120px]"
        placeholder="Paste or type the news text here..."
        value={news}
        onChange={(e) => setNews(e.target.value)}
      ></textarea>

      <button className="btn btn-primary w-full" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Predicting...' : 'Predict'}
      </button>

      {result && (
        <>
          <ResultCard prediction={result.prediction} />
          <ConfidenceChart real={result.real} fake={result.fake} />
        </>
      )}
    </div>
  );
};

export default NewsForm;
