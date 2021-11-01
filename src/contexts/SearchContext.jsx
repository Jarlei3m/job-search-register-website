import { createContext, useContext, useState } from "react";
import { JobsContext } from "./JobsContext";

export const SearchContext = createContext({});

export function SearchProvider({ children }) {
  const [searchedItem, setSearchedItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noSearchResults, setNoSearchResults] = useState(false);

  const { jobsData } = useContext(JobsContext);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchedItem);

    if (searchedItem === "") {
      setSearchResults([]);
    } else {
      const response = jobsData.filter((job) => {
        const searchInput = searchedItem.toLowerCase();
        const professionMatches = job.profession
          .toLowerCase()
          .includes(searchInput);

        const cityMatches = job.city.toLowerCase().includes(searchInput);
        const salaryMatches = job.salary.toString().includes(searchInput);
        const descriptionMatches = job.description
          .toLowerCase()
          .includes(searchInput);
        const benefitsMatches = job.Benefits.some((benefit) =>
          benefit.name.toLowerCase().includes(searchInput)
        );

        return (
          professionMatches ||
          cityMatches ||
          salaryMatches ||
          descriptionMatches ||
          benefitsMatches
        );
      });

      if (response.length === 0) {
        setNoSearchResults(true);

        setTimeout(() => {
          setNoSearchResults(false);
        }, 3000);
      } else {
        setSearchResults(response);
        setNoSearchResults(false);
      }
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchedItem,
        handleSearchSubmit,
        setSearchedItem,
        searchResults,
        noSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
