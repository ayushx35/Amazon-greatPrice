import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    const res = await fetch(`http://localhost:5000/api/search?q=${query}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Amazon Price & Quality Comparator</h1>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a product"
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px' }}>Search</button>
      <hr />
      {loading ? <p>Loading...</p> : results.map((p, i) => <ProductCard key={i} product={p} />)}
    </div>
  );
}

export default App;
