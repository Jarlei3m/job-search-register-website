import styled from "styled-components";

export const Container = styled.form`
  max-width: 37.25rem;
  width: 100%;
  height: 45.375rem;
  background: var(--white);
  border: 1px solid #cecece;
  border-radius: 0.9375rem;
  margin-top: 0.75rem;
  padding: 1.875rem 2.375rem 1.875rem 1.875rem;

  @media (max-width: 1440px) {
    max-width: 35rem;
  }

  @media (max-width: 1360px) {
    max-width: 33rem;
  }

  @media (max-width: 1200px) {
    max-width: 30rem;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    padding: 1.3125rem 1.375rem 2.5rem 1.6875rem;
  }

  @media (max-width: 600px) {
    height: auto;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 356px) {
      flex-direction: column;
      align-items: flex-start;
    }

    div {
      flex-direction: column;
      display: flex;
      max-width: 12rem;

      & + div {
        @media (max-width: 356px) {
          margin-top: 0.5rem;
        }

        input {
          max-width: 7rem;

          @media (max-width: 380px) {
            width: 5rem;
          }
        }
      }
    }

    label {
      color: var(--gray-500);
      font-size: 0.9375rem;
      line-height: 1.5rem;
      cursor: pointer;

      @media (max-width: 356px) {
        font-size: 0.875rem;
      }
    }

    input {
      font-weight: bold;
      color: var(--blue-500);
      font-size: 1.25rem;
      line-height: 1.4rem;
      border: none;
      outline: transparent;

      @media (max-width: 600px) {
        font-size: 1rem;
      }

      @media (max-width: 356px) {
        font-size: 0.9375rem;
      }

      &::placeholder {
        font-weight: bold;
        color: var(--blue-500);
        font-size: 1.25rem;
        line-height: 1.4rem;

        @media (max-width: 600px) {
          font-size: 1rem;
        }

        @media (max-width: 356px) {
          font-size: 0.9375rem;
        }
      }
    }
  }

  div:nth-child(5) {
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 600px) {
      justify-content: center;
    }

    button {
      margin-top: 2.5rem;
      border: none;
      background: var(--orange-500);
      border-radius: 0.3125rem;
      width: 12.875rem;
      height: 3rem;
      padding: 1rem;

      color: var(--white);
      font-weight: bold;
      line-height: 1rem;
      font-size: 0.875rem;
      text-transform: uppercase;

      transition: filter 0.2s;

      @media (max-width: 450px) {
        font-size: 0.75rem;
        width: 12rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const InputContainer = styled.div`
  margin-top: 1.875rem;

  select,
  textarea {
    background: var(--white-500);
    border: 1px solid #cecece;
    border-radius: 0.3125rem;
    padding: 1.25rem;
    font-size: 0.9375rem;
    line-height: 1.125rem;
    color: var(--gray-500);

    @media (max-width: 600px) {
      padding: 0.9375rem;
      font-size: 0.75rem;
    }
  }

  select {
    cursor: pointer;
    & + select {
      margin-left: 0.75rem;

      @media (max-width: 600px) {
        margin-left: 0;
      }
    }
  }

  div:first-child {
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    select {
      height: 4.625rem;
      width: 19rem;

      @media (max-width: 800px) {
        width: 100%;
      }

      @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 1rem;
        height: 3.75rem;
      }

      & + select {
        width: 13.25rem;

        @media (max-width: 800px) {
          min-width: 13.25rem;
        }

        @media (max-width: 600px) {
          width: 100%;
          height: 3.75rem;
        }
      }
    }
  }

  textarea {
    width: 100%;
    height: 9.25rem;
    resize: none;
    margin-top: 0.8125rem;

    @media (max-width: 600px) {
      height: 8rem;
    }

    & + textarea {
      height: 8rem;

      @media (max-width: 600px) {
        height: 6.5rem;
      }
    }
  }
`;

export const VouchersContainer = styled.div`
  width: 100%;
  margin-top: 1.8125rem;
  h5 {
    font-size: 0.9375rem;
    line-height: 1.125rem;
    color: var(--gray-400);
    font-weight: bold;
    margin-bottom: 1.625rem;

    @media (max-width: 380px) {
      font-size: 0.875rem;
      margin-bottom: 1.125rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0.75rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 356px) {
      grid-template-columns: 1fr;
    }

    li {
      display: flex;
      align-items: center;
      position: relative;

      label {
        margin-left: 2rem;
        cursor: pointer;
        font-size: 0.9375rem;
        line-height: 1.125rem;
        color: var(--gray-500);

        @media (max-width: 1200px) {
          margin-left: 1.5rem;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        @media (max-width: 800px) {
          margin-left: 1.75rem;
          font-size: 0.875rem;
        }

        @media (max-width: 380px) {
          margin-left: 1.5rem;
          font-size: 0.8125rem;
        }
      }

      span {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 1.3125rem;
        width: 1.3125rem;
        border-radius: 0.4375rem;
        border: 1px solid #cecece;
        background: var(--white);
        cursor: pointer;

        @media (max-width: 800px) {
          height: 1.125rem;
          width: 1.125rem;
          border-radius: 0.375rem;
        }

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          opacity: 0;
        }
      }

      input[type="checkbox"] {
        opacity: 0;
        height: 0;
        width: 0;

        &:checked + span {
          background-color: var(--blue-500);
          img {
            opacity: 1;
          }
        }
      }
    }
  }
`;
