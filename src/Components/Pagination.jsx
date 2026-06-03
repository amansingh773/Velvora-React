import React from "react";

function Pagination({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) 
{
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="px-4 py-2 rounded-lg border border-[#2a2a28] text-[#888880] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
            currentPage === index + 1
              ? "bg-[#c8b89a] text-[#111110] border-[#c8b89a]"
              : "border-[#2a2a28] text-[#888880] hover:border-[#c8b89a] hover:text-[#f0ede6]"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="px-4 py-2 rounded-lg border border-[#2a2a28] text-[#888880] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;