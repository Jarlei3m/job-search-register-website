import { useContext } from "react";
import checkedImg from "../../../../assets/checked.svg";
import { JobsContext } from "../../../../contexts/JobsContext";
import { RegisterJobsContext } from "../../../../contexts/RegisterJobsContext";
import { Container, InputContainer, VouchersContainer } from "./styles";

export function Form() {
  const { citiesData, benefitsData } = useContext(JobsContext);

  const {
    jobsRegistered,
    handleChange,
    handleSubmit,
    allBenefits,
    jobsList,
    handleBackToPublicationMode,
    actionType,
  } = useContext(RegisterJobsContext);

  return (
    <Container onSubmit={handleSubmit}>
      <header>
        <div>
          <label>
            {actionType !== "" ? (
              `Cod:${jobsRegistered.code}`
            ) : (
              <>
                Cod:
                {jobsList?.length === 0
                  ? "001"
                  : (
                      "000" +
                      Number(Number(jobsList[jobsList?.length - 1]?.code) + 1)
                    ).slice(-3)}
              </>
            )}
          </label>
          <input
            onChange={handleChange}
            autoComplete="off"
            value={jobsRegistered.profession}
            type="text"
            name="profession"
            id="profession"
            placeholder="Título da vaga"
            required
            disabled={actionType === "preview" ? true : false}
          />
        </div>
        <div>
          <label htmlFor="salary">Salário:</label>
          <input
            onChange={handleChange}
            autoComplete="off"
            value={jobsRegistered.salary}
            type="number"
            name="salary"
            id="salary"
            placeholder="R$999,999"
            disabled={actionType === "preview" ? true : false}
            required
          />
        </div>
      </header>

      <InputContainer>
        <div>
          <select
            required
            value={jobsRegistered.city}
            onChange={handleChange}
            disabled={actionType === "preview" ? true : false}
            name="city"
          >
            <option value="" disabled defaultValue hidden>
              Cidade
            </option>
            {citiesData?.map((city) => {
              return (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              );
            })}
          </select>

          <select
            required
            value={jobsRegistered.company}
            onChange={handleChange}
            disabled={actionType === "preview" ? true : false}
            name="company"
          >
            <option value="" disabled defaultValue hidden>
              Empresa
            </option>
            <option value="city connect">City Connect</option>
          </select>
        </div>

        <textarea
          onChange={handleChange}
          value={jobsRegistered.description}
          disabled={actionType === "preview" ? true : false}
          name="description"
          id="description"
          placeholder="Descreva aqui um pouco mais sobre a vaga"
          required
        ></textarea>

        <textarea
          onChange={handleChange}
          value={jobsRegistered.topics}
          disabled={actionType === "preview" ? true : false}
          name="topics"
          id="topics"
          placeholder="Cite alguns pontos importantes que o cadidato deve se atentar"
          required
        ></textarea>

        <VouchersContainer>
          <h5>Quais os benefícios que você oferece?</h5>
          <ul>
            {benefitsData?.map((benefit) => {
              return (
                <li key={benefit.name}>
                  <label htmlFor={benefit.name}>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="benefits"
                      id={benefit.name}
                      checked={
                        jobsRegistered
                          ? jobsRegistered.benefits.includes(benefit.name)
                          : allBenefits.includes(benefit.name)
                      }
                      disabled={actionType === "preview" ? true : false}
                    />
                    <span>
                      <img src={checkedImg} alt="checked icon" />
                    </span>
                    {benefit.name}
                  </label>
                </li>
              );
            })}
          </ul>
        </VouchersContainer>

        <div>
          {actionType === "preview" ? (
            <button type="button" onClick={() => handleBackToPublicationMode()}>
              VOLTAR
            </button>
          ) : (
            <button type="submit">
              {actionType === "edit" ? "EDITAR" : "PUBLICAR NOVA VAGA"}
            </button>
          )}
        </div>
      </InputContainer>
    </Container>
  );
}
