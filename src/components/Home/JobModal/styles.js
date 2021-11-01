import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  span:nth-child(1) {
    display: flex;
    align-items: center;
    color: var(--gray-400);

    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.9375rem;
    line-height: 1.5rem;

    img {
      margin-left: 1.75rem;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  header {
    margin-bottom: 2rem;
    @media (max-width: 420px) {
      img {
        width: 7rem;
      }
    }
  }

  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2.375rem;
    row-gap: 1.5rem;

    @media (max-width: 750px) {
      grid-template-columns: 1fr;
      row-gap: 1rem;
    }

    div:first-child {
      h2 {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1.5rem;
        color: var(--blue-500);
      }

      p {
        color: var(--gray-600);
        margin-top: 0.25rem;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    div:nth-child(2) {
      strong {
        color: var(--orange-500);
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }

    div:nth-child(3) {
      height: 17rem;
      overflow: hidden;

      @media (max-width: 750px) {
        height: 16rem;
      }
      p {
        color: var(--gray-400);
        line-height: 1.25rem;
        font-size: 0.9375rem;
      }
    }

    div:nth-child(4) {
      height: 17rem;
      overflow: hidden;

      @media (max-width: 750px) {
        height: 10rem;
      }

      ul {
        color: var(--gray-400);
        line-height: 1.25rem;
        font-size: 0.9375rem;
      }
    }
  }

  footer {
    color: var(--gray-400);

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

      @media (max-width: 420px) {
      }

      img {
        cursor: pointer;
        transition: filter 0.2s;

        @media (max-width: 420px) {
          width: 3rem;
        }

        @media (max-width: 370px) {
          width: 2.5rem;
        }

        &:hover {
          filter: invert(27%) sepia(10%) saturate(2309%) hue-rotate(163deg)
            brightness(100%) contrast(94%);
        }
      }

      button {
        margin-left: auto;
        background: var(--orange-500);
        border-radius: 5px;
        width: 11.875rem;
        height: 3rem;
        border: none;
        font-size: 0.875rem;
        line-height: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--white);
        transition: filter 0.2s;

        @media (max-width: 420px) {
          width: 10rem;
          height: 2.75rem;
          font-size: 0.75rem;
        }

        @media (max-width: 370px) {
          font-size: 0.6875rem;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
