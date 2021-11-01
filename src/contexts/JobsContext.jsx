import { createContext, useEffect, useState } from "react";
import mockedData from "../db.json";

export const JobsContext = createContext({});

export function JobsProvider({ children }) {
  const [jobsData, setJobsData] = useState();
  const [citiesData, setCitiesData] = useState();
  const [benefitsData, setBenefitsData] = useState();

  const [job, setJob] = useState();

  useEffect(() => {
    const { jobs, cities, Benefits } = mockedData;

    setJobsData(jobs);
    setCitiesData(cities);
    setBenefitsData(Benefits);
  }, []);

  function getDataById(id) {
    const filteredData = jobsData.filter((job) => job.id === id);
    console.log("filteredData", filteredData[0]);
    setJob(filteredData[0]);
  }

  return (
    <JobsContext.Provider
      value={{ getDataById, jobsData, citiesData, benefitsData, job }}
    >
      {children}
    </JobsContext.Provider>
  );
}
