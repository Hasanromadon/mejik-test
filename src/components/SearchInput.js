const SearchInput = ({ placeholder }) => {
  return (
    <form method="GET">
      <div className="relative w-[44rem] text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.7669"
                cy="11.7666"
                r="8.98856"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0186 18.4851L21.5426 22"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="w-full transition-all ease-linear duration-100  border-slate-200 text-white bg-shade rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900"
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default SearchInput;
