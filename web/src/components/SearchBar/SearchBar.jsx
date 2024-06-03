import { useState } from "react";

import SearchIcon from "../../imgs/Search.png"
import styles from "./SearchBar.module.css";
export const SearchBar = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleChange = (e) => {
      const inputValue = e.target.value;
      setQuery(inputValue);
      onSearch(inputValue);
    };
  
    return (
      <div className={styles.searchbar} >
         <img src={SearchIcon} alt="search_icon" className={styles.search_icon} />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          className={styles.search_input}
        />
      </div>
    );
  };
