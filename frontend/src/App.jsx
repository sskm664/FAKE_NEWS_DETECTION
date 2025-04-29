import React from 'react';
import Navbar from './components/Navbar'; // already made
import NewsForm from './components/NewsForm';

function App() {
  return (
    <div>
      <Navbar />
      <main className="mt-6">
        <NewsForm />
      </main>
    </div>
  );
}

export default App;
