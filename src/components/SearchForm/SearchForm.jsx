import css from "./SearchForm.module.css";

const SearchForm = ({ handleSearchMovie }) => {
  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSearchMovie({ query: event.target.elements.query.value });
    event.target.reset();
  };

  return (
    <form className={css.searchForm} onSubmit={onHandleSubmit}>
      <input
        className={css.searchInput}
        type="search"
        name="query"
        required
      />
      <button className={css.searchButton} type="submit">Search</button>
    </form>
  );
};

export default SearchForm;