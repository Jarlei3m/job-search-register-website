import styled from "styled-components";

export const Container = styled.section`
  transform: translateY(-17.5rem);
  margin-left: 2.5rem;

  @media (max-width: 1730px) {
    transform: translateY(-15.5rem);
  }

  @media (max-width: 1080px) {
    transform: translateY(-17.5rem);
  }

  ul {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;

    @media (max-width: 800px) {
      overflow-x: auto;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }

  color: var(--white);
  font-size: 0.875rem;
  line-height: 1rem;
`;

export const FilterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  select {
    background: transparent;
    border: none;
    color: var(--white);
    cursor: pointer;
  }
`;

export const CardsContent = styled.li`
  min-width: 34.3125rem;
  max-width: 34.3125rem;
  height: 25.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  padding: 1.875rem 2.25rem;
  background: var(--white);
  border: 1px solid #cecece;
  border-radius: 1rem;

  @media (max-width: 1540px) {
    min-width: 26.25rem;
    padding: 1.25rem 1.75rem;
  }

  @media (max-width: 1080px) {
    min-width: 19.5rem;
    max-width: 19.5rem;
    height: 26rem;

    padding: 1.125rem 1.5rem;
  }

  transition: border 0.2s;

  &:hover {
    border: 1px solid var(--orange-500);
  }

  & + li {
    margin-left: 1.375rem;

    @media (max-width: 1230px) {
      margin-left: 1rem;
    }
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    img {
      @media (max-width: 1540px) {
        width: 5rem;
      }
    }

    strong {
      color: var(--orange-500);
      font-size: 1.125rem;
      line-height: 1.5rem;

      display: flex;
      align-items: center;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      img {
        margin-left: 1.375rem;
        width: unset;
      }
    }
  }

  article {
    h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: var(--blue-500);

      @media (max-width: 1540px) {
        font-size: 1.125rem;
      }
    }

    p {
      color: var(--gray-500);
      &:first-child {
        margin-top: 0.25rem;
        font-size: 1rem;
        line-height: 1.5rem;
      }

      &:last-child {
        line-height: 1.125rem;
        margin-top: 0.875rem;
        font-size: 0.9375rem;

        strong {
          cursor: pointer;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(1.1);
          }
        }
      }
    }
  }

  div:last-child {
    margin-top: 0.375rem;
    color: var(--gray-400);
    min-height: 3.1875rem;

    h6 {
      display: flex;
      align-items: center;
      font-size: 0.75rem;

      small {
        height: 1px;
        width: 100%;
        margin-left: 0.4375rem;
        border-radius: 0.9375rem;
        background: #e0e0e0;
      }
    }

    div {
      margin-top: 1.125rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        cursor: pointer;
        transition: filter 0.2s;

        @media (max-width: 1540px) {
          width: 3rem;
        }

        &:hover {
          filter: invert(84%) sepia(33%) saturate(6204%) hue-rotate(347deg)
            brightness(102%) contrast(95%);
        }
      }
    }
  }
`;
