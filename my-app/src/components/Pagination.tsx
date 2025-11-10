import React from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex gap-2 mt-4">
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="p-2 border rounded">Previous</button>
      {pages.map((p) => (
        <button key={p} onClick={() => setCurrentPage(p)} className={`p-2 border rounded ${currentPage === p ? 'bg-blue-500 text-white' : ''}`}>{p}</button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="p-2 border rounded">Next</button>
    </div>
  );
};

export default Pagination;
