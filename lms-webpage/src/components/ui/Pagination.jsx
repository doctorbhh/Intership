import React from 'react';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = ''
}) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`d-flex align-items-center  gap-2 ${className}`}>
      {/* Previous Button */}
      {showPrevNext && (
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="btn rounded-circle p-1 bg-accent hover-bg-accent-dark text-secondary-gray disabled-opacity-50 disabled-cursor-not-allowed transition-colors"
          style={{ width: '28px', height: '28px' }} 
        >
          <img
            src="/images/img_vector_gray_600.svg"
            alt="Previous"
            className="w-3 h-2"
          />
        </button>
      )}

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`btn rounded-circle p-1 text-xs font-semibold transition-colors ${
            page === currentPage
              ? 'bg-primary-purple text-primary-white' :'text-secondary-gray hover-bg-accent-light'
          }`}
          style={{ width: '28px', height: '28px' }} 
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      {showPrevNext && (
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="btn rounded-circle p-1 bg-accent hover-bg-accent-dark text-secondary-gray disabled-opacity-50 disabled-cursor-not-allowed transition-colors"
          style={{ width: '28px', height: '30px' }}
        >
          <img
            src="/images/img_vector_gray_601.svg"
            alt="Next"
            className="w-3 h-2 transform scale-x-[-1]"
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;