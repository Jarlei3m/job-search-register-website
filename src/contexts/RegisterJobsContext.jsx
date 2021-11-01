import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id: uuidv4(),
  code: 0,
  profession: "",
  salary: "",
  city: "",
  company: "",
  description: "",
  topics: "",
  benefits: [],
  createdAt: "",
};

export const RegisterJobsContext = createContext({});

export function RegisterJobsProvider({ children }) {
  const [jobsRegistered, setJobsRegistered] = useState(initialState);
  const [jobsList, setJobsList] = useState([]);
  const [allBenefits, setAllBenefits] = useState([]);

  const [actionType, setActionType] = useState("");

  const handleChange = (e) => {
    var { name, value } = e.target;

    if (name === "benefits") {
      const newBenefits = e.target.id;

      // check allBenefits array
      if (allBenefits.includes(newBenefits)) {
        const filteredBenefits = allBenefits.filter(
          (benefit) => benefit !== newBenefits
        );

        setAllBenefits(filteredBenefits);

        value = [...filteredBenefits];
      } else {
        setAllBenefits((allBenefits) => [...allBenefits, newBenefits]);

        value = [...allBenefits, newBenefits];
      }
    }

    const formatedCode = ("000" + Number(jobsList?.length + 1)).slice(-3);
    const formatedDate = new Intl.DateTimeFormat("pt-BR").format(new Date());

    setJobsRegistered({
      ...jobsRegistered,
      [name]: value,
      createdAt: formatedDate,
      code: formatedCode,
    });
  };

  // DELETE
  const handleDelete = (itemId) => {
    if (itemId) {
      const filteredJobsList = jobsList.filter((job) => job.id !== itemId);

      setJobsList(filteredJobsList);
      Cookies.set("jobList", JSON.stringify(filteredJobsList), { expires: 7 });
    }
  };

  const handleDeleteMultipleItems = (multipleItems) => {
    if (multipleItems) {
      const filteredMultipleJobsList = jobsList.filter(
        (job) => !multipleItems.includes(job.profession)
      );

      console.log("filteredJobsList", filteredMultipleJobsList);
      setJobsList(filteredMultipleJobsList);
      Cookies.set("jobList", JSON.stringify(filteredMultipleJobsList), {
        expires: 7,
      });
    }
  };

  // VIEW
  const handleViewOrEdit = (itemId, action) => {
    if (itemId) {
      const filteredJob = jobsList.find((job) => job.id === itemId);

      setJobsRegistered(filteredJob);
      setActionType(action);
    }
  };

  const handleBackToPublicationMode = () => {
    setJobsRegistered({
      ...initialState,
      id: uuidv4(),
      code: ("000" + Number(jobsList?.length + 1)).slice(-3),
    });
    setActionType("");
  };

  //SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    const newJob = jobsRegistered;

    // check action type
    if (actionType === "edit") {
      const filteredJob = jobsList.filter((job) => job.id !== newJob.id);

      // save data
      setJobsList([...filteredJob, newJob]);
      const toSaveOnCookies = [...filteredJob, newJob];

      // save on cookies
      Cookies.set("jobList", JSON.stringify(toSaveOnCookies), { expires: 7 });

      // clean inputs
      setJobsRegistered({ ...initialState, id: uuidv4() });
      setAllBenefits([]);
      setActionType("");
    } else {
      // check if code job already exists
      const jobExists = jobsList.find((job) => job.code === newJob.code);

      if (!jobExists) {
        // save data somewhere else
        setJobsList((jobsList) => [...jobsList, newJob]);
        const toSaveOnCookies = [...jobsList, newJob];

        // save on cookies
        Cookies.set("jobList", JSON.stringify(toSaveOnCookies), { expires: 7 });

        // clean inputs
        setJobsRegistered({
          ...initialState,
          id: uuidv4(),
          code: ("000" + Number(jobsList?.length + 1)).slice(-3),
        });
        setAllBenefits([]);
      } else {
        window.alert("Vaga com código já cadastrado.");
      }
    }
  }

  return (
    <RegisterJobsContext.Provider
      value={{
        jobsRegistered,
        handleChange,
        handleSubmit,
        allBenefits,
        jobsList,
        setJobsList,
        handleDelete,
        handleDeleteMultipleItems,
        handleViewOrEdit,
        actionType,
        handleBackToPublicationMode,
      }}
    >
      {children}
    </RegisterJobsContext.Provider>
  );
}
