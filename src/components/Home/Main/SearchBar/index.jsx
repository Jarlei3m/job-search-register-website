import { useContext } from "react";
import searchIcon from "../../../../assets/search.svg";
import { SearchContext } from "../../../../contexts/SearchContext";
import { Container, SearchContainer } from "./styles";

export function SearchBar() {
  const { handleSearchSubmit, searchedItem, setSearchedItem } =
    useContext(SearchContext);

  return (
    <Container>
      <p>
        Procure uma <strong>oportunidade de emprego</strong>
      </p>

      <SearchContainer onSubmit={handleSearchSubmit}>
        <label htmlFor="search">
          <img
            src={searchIcon}
            alt="search icon"
            onClick={handleSearchSubmit}
          />
        </label>
        <input
          onChange={(e) => setSearchedItem(e.target.value)}
          type="text"
          id="search"
          value={searchedItem}
          autoComplete="off"
          placeholder="Digite cargo, empresa ou localização"
        />
      </SearchContainer>
    </Container>
  );
}
