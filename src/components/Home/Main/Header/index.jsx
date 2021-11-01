import { useState } from "react";
import { Link } from "react-router-dom";
import hamburguerImg from "../../../../assets/hamburguer.svg";
import logoImg from "../../../../assets/logo.png";
import questionMarkIcon from "../../../../assets/question_mark.svg";
import {
  ActionsContainer,
  Container,
  HamburguerContainer,
  HamburguerMenuItems,
} from "./styles";

export function Header() {
  // const [showMenuItems, setShowMenuItems] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    // setShowMenuItems(!showMenuItems);
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <Container>
      <img src={logoImg} alt="city connect" />

      <ActionsContainer>
        <div>
          <img src={questionMarkIcon} alt="question mark" />
          <span>Preciso de Ajuda</span>
        </div>

        <button type="button">Entrar</button>
        <Link to="/cadastro-de-vaga">
          <button type="button">Cadastrar Vaga</button>
        </Link>
      </ActionsContainer>

      <HamburguerContainer
        isMenuOpen={isMenuOpen}
        onClick={() => handleMenuOpen()}
      >
        <img src={hamburguerImg} alt="" />
      </HamburguerContainer>

      {isMenuOpen && (
        <HamburguerMenuItems isMenuOpen={isMenuOpen}>
          <li>
            <Link to="/">Entrar</Link>
          </li>
          <li>
            <Link to="/cadastro-de-vaga">Cadastrar Vaga</Link>
          </li>
        </HamburguerMenuItems>
      )}
    </Container>
  );
}
