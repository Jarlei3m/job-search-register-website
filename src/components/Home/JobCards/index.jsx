import { useContext, useState } from "react";
import Modal from "react-modal";
import arrowRightImg from "../../../assets/arrow_right.svg";
import busImg from "../../../assets/bus.svg";
import doctorImg from "../../../assets/doctor.svg";
import foodImg from "../../../assets/food.svg";
import carrefourImg from "../../../assets/logo_carrefour.png";
import { JobsContext } from "../../../contexts/JobsContext";
import { SearchContext } from "../../../contexts/SearchContext";
import { JobModal } from "../JobModal";
import {
  CardsContent,
  Container,
  FilterContainer,
  FilterContent,
} from "./styles";

export function JobCards() {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const { jobsData, getDataById } = useContext(JobsContext);
  const { searchResults, searchedItem, noSearchResults } =
    useContext(SearchContext);

  function handleOpenJobModal(jobId) {
    getDataById(jobId);
    setIsJobModalOpen(true);
  }

  function handleCloseJobModal() {
    setIsJobModalOpen(false);
  }

  return (
    <Container>
      <FilterContainer>
        <p>
          {noSearchResults ? (
            "Ops, nenhum resultado foi encontrado :("
          ) : (
            <>
              <strong>
                {searchResults.length !== 0 ? searchResults.length : 211}
              </strong>{" "}
              vagas de emprego para{" "}
              <strong>
                {searchResults.length !== 0 ? searchedItem : "Web Designer"}:
              </strong>
            </>
          )}
        </p>

        <FilterContent>
          <div>
            <label htmlFor="jobs">Refinar vagas</label>
            <select name="jobs" id="jobs">
              {/* <option value=""></option> */}
            </select>
          </div>

          <div>
            <label htmlFor="trendings">Mais relevantes</label>
            <select name="trendings" id="trendings">
              {/* <option value=""></option> */}
            </select>
          </div>
        </FilterContent>
      </FilterContainer>
      {searchResults.length !== 0 ? (
        <ul>
          {searchResults?.map((job) => {
            const {
              id,
              city,
              Benefits,
              description,
              logo,
              profession,
              salary,
            } = job;
            return (
              <CardsContent key={id} onClick={() => handleOpenJobModal(id)}>
                <header>
                  <img src={carrefourImg} alt="carrefour logo" />
                  <strong>
                    {!isNaN(salary) ? (
                      <>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(salary)}
                        <img src={arrowRightImg} alt="arrow to the right" />
                      </>
                    ) : (
                      <>
                        {salary}
                        <img src={arrowRightImg} alt="arrow to the right" />
                      </>
                    )}
                  </strong>
                </header>

                <article>
                  <h2>{profession}</h2>
                  <p>{city}</p>
                  <p>
                    {description?.length > 202
                      ? description.slice(0, 202) + "... "
                      : description}
                    {description.length > 202 && (
                      <strong>Ler descrição completa</strong>
                    )}
                  </p>
                </article>

                <div>
                  <h6>
                    Benefícios <small></small>
                  </h6>
                  <div>
                    {Benefits?.map((benefit) => {
                      return (
                        <img
                          key={benefit.id}
                          src={
                            benefit.name === "Vale transporte"
                              ? busImg
                              : benefit.name === "Vale alimentação"
                              ? foodImg
                              : benefit.name === "Plano de saúde"
                              ? doctorImg
                              : benefit.name === "Vale Refeição"
                              ? foodImg
                              : ""
                          }
                          alt={benefit.name}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardsContent>
            );
          })}
        </ul>
      ) : (
        <ul>
          {jobsData?.map((job) => {
            const {
              id,
              city,
              Benefits,
              description,
              logo,
              profession,
              salary,
            } = job;
            return (
              <CardsContent key={id} onClick={() => handleOpenJobModal(id)}>
                <header>
                  <img src={carrefourImg} alt="carrefour logo" />
                  <strong>
                    {!isNaN(salary) ? (
                      <>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(salary)}
                        <img src={arrowRightImg} alt="arrow to the right" />
                      </>
                    ) : (
                      <>
                        {salary}
                        <img src={arrowRightImg} alt="arrow to the right" />
                      </>
                    )}
                  </strong>
                </header>

                <article>
                  <h2>{profession}</h2>
                  <p>{city}</p>
                  <p>
                    {description?.length > 202
                      ? description.slice(0, 202) + "... "
                      : description}
                    {description.length > 202 && (
                      <strong>Ler descrição completa</strong>
                    )}
                  </p>
                </article>

                <div>
                  <h6>
                    Benefícios <small></small>
                  </h6>
                  <div>
                    {Benefits?.map((benefit) => {
                      return (
                        <img
                          key={benefit.id}
                          src={
                            benefit.name === "Vale transporte"
                              ? busImg
                              : benefit.name === "Vale alimentação"
                              ? foodImg
                              : benefit.name === "Plano de saúde"
                              ? doctorImg
                              : benefit.name === "Vale Refeição"
                              ? foodImg
                              : ""
                          }
                          alt={benefit.name}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardsContent>
            );
          })}
        </ul>
      )}
      <Modal
        isOpen={isJobModalOpen}
        onRequestClose={handleCloseJobModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <JobModal handleCloseJobModal={handleCloseJobModal} />
      </Modal>
    </Container>
  );
}
