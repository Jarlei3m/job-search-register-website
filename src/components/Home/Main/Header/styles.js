import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 0 auto;
  padding: 2.625rem 2rem 0;

  img:first-child {
    margin-left: 15.5rem;

    @media (max-width: 1180px) {
      margin-left: 8rem;
    }

    @media (max-width: 1024px) {
      margin-left: 4rem;
    }

    @media (max-width: 1024px) {
      margin-left: 4rem;
    }

    @media (max-width: 800px) {
      margin-left: 2rem;
    }

    @media (max-width: 700px) {
      margin-left: 0rem;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;

  @media (max-width: 700px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
      text-decoration: underline;
    }

    img {
      font-size: 1rem;
      cursor: pointer;
    }

    span {
      font-size: 0.9375rem;
      line-height: 1.125rem;
      margin-left: 0.3125rem;
    }
  }

  button {
    font-size: 0.875rem;
    color: var(--white);
    font-weight: bold;
    line-height: 1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.3125rem;
    height: 3rem;
    transition: filter 0.2s;

    width: 5.75rem;
    margin-left: 1.25rem;

    background: var(--blue-300);

    &:last-child {
      width: 11rem;
      margin-left: 0.8125rem;
      margin-right: 5.125rem;
      background: var(--orange-500);

      @media (max-width: 1180px) {
        margin-right: 0;
      }
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const HamburguerContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  display: none;
  padding-right: 0.125rem;

  transition: transform 0.2s;
  transform: ${(props) =>
    props.isMenuOpen ? "rotateZ(180deg)" : "rotateZ(0deg)"};

  @media (max-width: 700px) {
    display: unset;
    opacity: 1;
    visibility: visible;
  }
  img {
    width: 2rem;
  }
`;

export const HamburguerMenuItems = styled.ul`
  opacity: 0;
  visibility: hidden;
  display: none;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    opacity: 1;
    visibility: visible;
  }

  position: absolute;
  top: 6.5rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.125rem;
  transition: transform 0.2s;
  transform: ${(props) =>
    props.isMenuOpen ? "translateX(0%)" : "translateX(200%)"};

  li li {
    margin-top: 1rem;
  }

  a {
    font-size: 0.875rem;
    color: var(--white);
    text-decoration: none;
  }
`;
