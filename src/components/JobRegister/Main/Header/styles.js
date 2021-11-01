import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* max-width: 1571px; */
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
  padding-right: 0.875rem;

  img {
    cursor: pointer;
    margin-left: 1rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);

  @media (max-width: 700px) {
    display: none;
    visibility: visible;
    opacity: 0;
  }

  img {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  img:first-child {
    margin-left: 1rem;
  }

  img {
    @media (max-width: 700px) {
      width: 2rem;
    }
  }

  span {
    position: relative;

    small {
      position: absolute;
      width: 0.8125rem;
      height: 0.8125rem;
      border-radius: 50%;
      background-color: var(--red-500);
      top: 0;
      right: 0;
    }
  }
`;
