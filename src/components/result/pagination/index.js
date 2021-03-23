import { useState, useEffect, memo } from 'react';

const paginationButtonClassNames = 'rounded bg-green-500 text-gray-100 px-2 py-1 hover:bg-green-400 hover:-translate-0.5 transform transition shadow-md'
const paginationActiveClassname = `${paginationButtonClassNames} bg-green-700`;
const disabledPaginationControl = `${paginationButtonClassNames} opacity-50`;

const Pagination = ({ totalPages, onPageChange, items }) => {
  const [current, setCurrent] = useState(0);
  const pagesButtons = Array.apply(null, Array(totalPages)).map(function (x, i) { return i; });

  const handlePrev = () => { if (current > 0) setCurrent(state => state - 1); };
  const handleNext = () => { if (current < totalPages - 1) setCurrent(state => state + 1); };
  const handlePage = (e) => { setCurrent(+e.target.value); };

  useEffect(() => {
    onPageChange(current);
  }, [current, onPageChange]);

  useEffect(() => {
    setCurrent(0);
  }, [items]);

  return (
    <div className="flex gap-x-3">
      <button
        onClick={handlePrev}
        className={current === 0 ? disabledPaginationControl : paginationButtonClassNames}
      >
        Previous
      </button>
      {pagesButtons.map((_, index) => (
        <button
          key={index}
          value={index}
          onClick={handlePage}
          className={current === index ? paginationActiveClassname : paginationButtonClassNames}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        className={current === (totalPages - 1) ? disabledPaginationControl : paginationButtonClassNames}
      >
        Next
      </button>
    </div>
  );
};

export default memo(Pagination, (prevProps, nextProps) => prevProps.items === nextProps.items);
