import { useRef } from "react";
import { useKey } from "../hooks/useKey";

function Search({ query, setQuery }) {
  const inpEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inpEl.current) return;
    inpEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inpEl}
    />
  );
}

export default Search;
