
function Pagination(props) {
  const { currentPage, totalPages, goToNextPage, goToPreviousPage, goToPage } =
    props;
  return (
    <div className="flex flex-wrap">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-stone-200 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:focus:text-primary-500 dark:active:bg-stone-700 dark:active:text-primary-500"
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index + 1)}
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-stone-200 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => {
          goToNextPage();
        }}
        disabled={currentPage === totalPages}
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-stone-200 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:focus:text-primary-500 dark:active:bg-stone-700 dark:active:text-primary-500"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
