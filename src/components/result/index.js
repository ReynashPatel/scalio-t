import { useState, useEffect } from 'react';

import ListItem from './list-item';
import Pagination from './pagination';

const SORT_OPTIONS = {
  login: 'login',
  type: 'type',
  avatar_url: 'avatar_url'
};
const ITEMS_PER_PAGE = 10;

const Result = ({ items }) => {
  const [sortedBy, setSortedBy] = useState(SORT_OPTIONS.login);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const handleChangeSort = (e) => {
    setSortedBy(e.target.value);
  };
  const handlePageChange = (selected) => {
    const offset = Math.ceil(selected * ITEMS_PER_PAGE);
    setOffset(offset);
  };

  useEffect(() => {
    const sortArray = () => {
      const sorted = [...items].sort((a, b) => {
        if (a[sortedBy] < b[sortedBy]) return -1;
        if (a[sortedBy] > b[sortedBy]) return 1;

        return 0;
      });

      setData(sorted);
    };

    sortArray();
  }, [sortedBy, items]);

  return (
    <div className="sm:w-3/4 lg:w-4/7">
      <div>
        Sort By:
        <select onChange={handleChangeSort}>
          <option value={SORT_OPTIONS.login}>Login</option>
          <option value={SORT_OPTIONS.type}>Type</option>
          <option value={SORT_OPTIONS.avatar_url}>Avatar Url</option>
        </select>
      </div>
      <div className="mt-5">
        <div className="mb-5">
          {data.slice(offset, offset + ITEMS_PER_PAGE).map((item, index) => <ListItem key={item.id} {...item} isEven={index%2 === 0} />)}
        </div>
        <Pagination
          totalPages={Math.ceil(items.length / ITEMS_PER_PAGE)}
          onPageChange={handlePageChange}
          items={data}
        />
      </div>
    </div>
  )
};

export default Result;
