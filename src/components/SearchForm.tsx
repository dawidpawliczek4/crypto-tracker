import React from "react";
import "font-awesome/css/font-awesome.min.css";

interface SearchFormProps {
  searchString: string;
  setSearchString: (string: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchString,
  setSearchString,
}) => {
  return (
    <>
      <input
        placeholder="&#xF002; Search"
        style={{ fontFamily: "Arial, FontAwesome" }}
        className="mb-6 mt-3 w-3/12 rounded-md bg-secondary px-4 py-2 text-sm font-extralight"
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </>
  );
};

export default SearchForm;
