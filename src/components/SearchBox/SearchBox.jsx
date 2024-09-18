import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={css.wrapper}>
    <label className={css.label} htmlFor="filter">
      Find contacts by name:
    </label>
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchBox;
