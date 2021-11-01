import { useContext } from "react";
import busImg from "../../../assets/bus.svg";
import closeImg from "../../../assets/close.svg";
import doctorImg from "../../../assets/doctor.svg";
import foodImg from "../../../assets/food.svg";
import carrefourDetailImg from "../../../assets/logo_carrefour_detail.png";
import { JobsContext } from "../../../contexts/JobsContext";
import { Container } from "./styles";

export function JobModal({ handleCloseJobModal }) {
  const { job } = useContext(JobsContext);

  return (
    <Container>
      <span>
        COD. 5491078{" "}
        <img onClick={handleCloseJobModal} src={closeImg} alt="close" />
      </span>
      <header>
        <img src={carrefourDetailImg} alt={job.name + "logo"} />
      </header>

      <article>
        <div>
          <h2>{job.profession}</h2>
          <p>{job.city}</p>
        </div>

        <div>
          <strong>
            {!isNaN(job.salary) ? (
              <>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(job.salary)}
              </>
            ) : (
              <>{job.salary}</>
            )}
          </strong>
        </div>

        <div>
          <p>{job.description}</p>
        </div>

        <div>
          <ul>
            <li>• Elaborar telas e protótipos;</li>
            <li>• Desenvolver páginas para testes axb;</li>
            <li>• Desenvolver códigos com boa organização;</li>
            <li>• Criação e edição de imagens para publicações e páginas;</li>
          </ul>
        </div>
      </article>

      <footer>
        <h6>
          Benefícios <small></small>
        </h6>
        <div>
          {job.Benefits?.map((benefit) => {
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
          <button type="button">QUERO ESSA VAGA</button>
        </div>
      </footer>
    </Container>
  );
}
