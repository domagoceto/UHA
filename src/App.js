import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import NewsArticle from './components/NewsArticle';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <TopBar />
      <Navbar />
      <NewsArticle />
      <Footer />
    </div>
  );
}

export default App;
