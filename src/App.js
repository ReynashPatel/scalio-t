import { useState } from 'react';

import getItems from './api/request';

import Search from './components/search';
import Result from './components/result';

function App() {
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const handleResetError = () => {
    setHasError(false);
  };
  const handleSearch = async (value) => {
    if (isSearching) return;

    setIsSearching(true);

    try {
      const items = await getItems(value);

      setItems(items);
    } catch (_) {
      setHasError(true);
    }
    setIsSearching(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 h-screen pt-6">
      <Search
        onSearch={handleSearch}
        isSearching={isSearching}
        resetError={handleResetError}
      />
      <div className="mb-7" />
      {hasError && (
        <p className="text-red-500">
          Something went wrong, please try again later
        </p>
      )}
      {(!!items.length && !hasError) && (
        <Result items={items} />
      )}
    </div>
  );
}

export default App;
