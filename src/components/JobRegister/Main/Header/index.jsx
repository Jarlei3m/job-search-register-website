import bellImg from "../../../../assets/bell.svg";
import hamburguerImg from "../../../../assets/hamburguer.svg";
import logoImg from "../../../../assets/logo.png";
import {
  ActionsContainer,
  AvatarContainer,
  Container,
  IconsContainer,
} from "./styles";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="city connect" />

      <ActionsContainer>
        <AvatarContainer>
          <p>Railan Rabelo</p>
          <img src="https://source.unsplash.com/user/erondu" alt="avatar" />
        </AvatarContainer>

        <IconsContainer>
          <span>
            <img src={bellImg} alt="notification bell" />
            <small></small>
          </span>

          <img src={hamburguerImg} alt="habirguer icon" />
        </IconsContainer>
      </ActionsContainer>
    </Container>
  );
}
