import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  transform: translateY(-13rem);
  padding: 0 2.875rem 1rem 3.875rem;
  margin-bottom: 0.75rem;
  margin-top: 2rem;

  @media (max-width: 800px) {
    margin-top: 4rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--white);
    font-size: 0.875rem;
    line-height: 1rem;

    img {
      margin-right: 0.5rem;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: var(--white);
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
