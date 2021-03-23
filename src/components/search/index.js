import { useState } from 'react';

const Search = (props) => {
  const [value, setValue] = useState('');
  const handleChangeValue = (e) => {
    setValue(e.target.value);
    props.resetError();
  };
  const handleSearch = () => {
    props.onSearch(value);
  }

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={handleChangeValue}
        placeholder="Login"

        className="border rounded p-2 shadow-sm focus:ring focus:ring-offset-2 focus:ring-gray-300"
      />
      <button
        onClick={handleSearch}
        disabled={props.isSearching || !value.length}
        type="button"
        className="rounded py-2 px-4 ml-3 bg-green-500 text-gray-100 shadow-md hover:bg-green-400 hover:bg-green-400 hover:-translate-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500 active:bg-green-600 disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  );
};

export default Search;
