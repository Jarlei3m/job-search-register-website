import { Link } from "react-router-dom";
import arrowLeftFilledImg from "../../../assets/arrow_left_filled.svg";
import { Dashboard } from "./Dashboard";
import { Form } from "./Form";
import { Container, Content } from "./styles";

export function JobsDetails() {
  return (
    <Container>
      <header>
        <strong>Detalhes da vaga:</strong>
        <Link to="/">
          <img src={arrowLeftFilledImg} alt="return page arrow" /> Voltar
        </Link>
      </header>
      <Content>
        <Form />
        <Dashboard />
      </Content>
    </Container>
  );
}
