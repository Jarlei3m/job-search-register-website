import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { JobsProvider } from "./contexts/JobsContext";
import { RegisterJobsProvider } from "./contexts/RegisterJobsContext";
import { SearchProvider } from "./contexts/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <RegisterJobsProvider>
      <JobsProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </JobsProvider>
    </RegisterJobsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
