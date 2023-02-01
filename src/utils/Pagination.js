import React from "react";

export default function Pagination({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pages.push(index);
  }
  return (
    <div className="flex justify-center items-center">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={`p-3 mx-2 rounded-md border border-red-600 ${
              currentPage === page
                ? "bg-red-500 text-white"
                : "bg-white text-red-500"
            } `}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
