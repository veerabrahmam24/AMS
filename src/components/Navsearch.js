import React,{useState} from 'react';
import './Navsearch.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Search() {
  const [searchString, setSearchString] = useState("");

  const items = [
    {
    }
  ];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
    setSearchString(string);
  };

  const handleOnClear = () => {
    console.log("Cleared");
    setSearchString("");
  };

  const clearSearchBox = () => {
    setSearchString("");
  };

  return (
    <div className="Search">
    
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onClear={handleOnClear}
            inputSearchString={searchString}
            autoFocus
          />
         
        </div>
      
    
  );
}

export default Search;
