import styled from "styled-components";

export const Container = styled.div`
  margin: 5.875rem auto 7.25rem;
  max-width: 540px;

  p {
    font-size: 1.25rem;
    color: var(--white);
    line-height: 1.4rem;
    text-align: center;

    @media (max-width: 700px) {
      font-size: 1.125rem;
    }
  }
`;

export const SearchContainer = styled.form`
  margin-top: 1.375rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  input {
    width: 33.75rem;
    height: 4.625rem;
    border-radius: 0.5rem;
    border: 1px solid var(--white);
    padding: 0.5rem 2rem;
    outline-color: transparent;

    @media (max-width: 800px) {
      width: 30.75rem;
    }

    @media (max-width: 700px) {
      width: 28.75rem;
      padding: 0.5rem 1.5rem;
    }

    @media (max-width: 700px) {
      width: 28.75rem;
      padding: 0.5rem 1.5rem;
    }

    @media (max-width: 336px) {
      padding: 0.5rem 0.5rem;
    }

    font-size: 0.9375rem;
    line-height: 1.125rem;
    color: var(--white);

    background: transparent;

    &::placeholder {
      color: var(--white);
    }
  }

  img {
    position: absolute;
    right: 4rem;
    top: 1.625rem;
    color: var(--white);
    cursor: pointer;

    @media (max-width: 1080px) {
      width: 1.25rem;
    }

    @media (max-width: 700px) {
      right: 6rem;
    }

    @media (max-width: 500px) {
      right: 4rem;
    }

    @media (max-width: 336px) {
      width: 1.125rem;
      right: 3rem;
    }
  }
`;
