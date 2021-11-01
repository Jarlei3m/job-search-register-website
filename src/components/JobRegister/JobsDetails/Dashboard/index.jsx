import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import checkedImg from "../../../../assets/checked.svg";
import eyeImg from "../../../../assets/eye.svg";
import pencilImg from "../../../../assets/pencil.svg";
import trashImg from "../../../../assets/trash.svg";
import { RegisterJobsContext } from "../../../../contexts/RegisterJobsContext";
import { Container, TableContainer } from "./styles";
export function Dashboard() {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const {
    jobsList,
    setJobsList,
    handleDelete,
    handleDeleteMultipleItems,
    handleViewOrEdit,
  } = useContext(RegisterJobsContext);

  useEffect(() => {
    if (Cookies.get("jobList")) {
      const cookiesData = Cookies.get("jobList");

      setJobsList(JSON.parse(cookiesData));
    }
  }, [setJobsList]);

  const handleJobSelection = (e) => {
    var newJobTitle = e.target.name;
    if (e.target.checked) {
      setSelectedJobs((jobs) => [...jobs, newJobTitle]);
    } else {
      const filteredJobs = selectedJobs.filter((job) => job !== newJobTitle);
      setSelectedJobs([...filteredJobs]);
    }
  };

  const handleMultipleJobsDeletion = (selectedJobs) => {
    handleDeleteMultipleItems(selectedJobs);
    setSelectedJobs([]);
  };

  return (
    <Container>
      <header>
        <strong>Vagas cadastradas</strong>
        <button type="button">Publicar nova vaga</button>
      </header>

      <TableContainer>
        <thead>
          <tr>
            <th>
              <label>
                <input
                  checked={selectedJobs.length !== 0 ? true : false}
                  type="checkbox"
                />
                Selecionado
                <span>
                  <small>
                    {selectedJobs.length === 0 ? "" : selectedJobs.length}
                  </small>
                </span>
              </label>
              <img
                src={trashImg}
                onClick={() => handleMultipleJobsDeletion(selectedJobs)}
                alt="trash icon"
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {jobsList?.map((job) => {
            return (
              <tr key={job.id}>
                <td>
                  <label htmlFor={job.profession}>
                    <input
                      onClick={(e) => handleJobSelection(e)}
                      type="checkbox"
                      name={job.profession}
                      id={job.profession}
                    />
                    {job.profession}
                    <span>
                      <img src={checkedImg} alt="checked icon" />
                    </span>
                  </label>
                </td>
                <td>{job.company}</td>
                <td>Cod:{job.code}</td>
                <td>{job.createdAt}</td>
                <td>
                  <img
                    onClick={() => handleViewOrEdit(job.id, "preview")}
                    src={eyeImg}
                    alt="eye icon"
                  />
                  <img
                    src={pencilImg}
                    alt="pencil icon"
                    onClick={() => handleViewOrEdit(job.id, "edit")}
                  />
                  <img
                    onClick={() => handleDelete(job.id)}
                    src={trashImg}
                    alt="trash icon"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </Container>
  );
}
