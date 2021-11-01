import styled from "styled-components";

export const Container = styled.form`
  max-width: 75rem;
  width: 100%;
  min-height: 45.375rem;
  height: auto;
  background: var(--white);
  border: 1px solid #cecece;
  border-radius: 0.9375rem;
  margin-top: 0.75rem;
  margin-left: 1rem;
  padding: 1.3125rem 1.375rem 2.5rem 1.6875rem;
  overflow-x: auto;

  @media (max-width: 1440px) {
    max-width: 53rem;
  }

  @media (max-width: 1360px) {
    max-width: 50rem;
  }

  @media (max-width: 800px) {
    margin-left: 0rem;
    height: auto;
    overflow-x: auto;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 450px) {
      flex-direction: column;
    }

    strong {
      margin-left: 1.25rem;
      color: var(--gray-600);
      font-size: 0.9375rem;
      line-height: 1.125rem;

      @media (max-width: 800px) {
        margin-left: 0rem;
      }

      @media (max-width: 375px) {
        font-size: 0.875rem;
      }
    }

    button {
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
        margin-top: 1rem;
        font-size: 0.75rem;
        width: 12rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  margin-top: 2.25rem;
  border-collapse: collapse;
  font-family: "Poppins", sans-serif;

  label {
    position: relative;
    cursor: pointer;
  }

  th,
  td {
    min-width: 12rem;
    width: 100%;

    @media (max-width: 1440px) {
      min-width: 8rem;
      white-space: nowrap;
    }

    &:not(:first-child) {
      @media (max-width: 800px) {
        min-width: 10rem;
      }

      @media (max-width: 600px) {
        min-width: 8rem;
      }

      @media (max-width: 375px) {
        min-width: 6rem;
      }
    }
  }

  /* TABLE HEAD*/
  thead {
    tr {
      display: flex;
      align-items: center;

      th {
        display: flex;
        align-items: center;
        padding: 1.25rem 0.25rem;

        label {
          font-size: 0.8125rem;
          line-height: 1.25rem;
          color: #334d6e;

          span {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            height: 16px;
            width: 16px;
            border-radius: 4px;
            border: 2px solid #d5d5d5;
            background: var(--white);
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            small {
              font-size: 0.5625rem;
              font-weight: bold;
              color: var(--white);
              opacity: 0;
            }
          }

          input[type="checkbox"] {
            margin-left: 2.5rem;
            opacity: 0;
            height: 0;
            width: 0;

            @media (max-width: 1440px) {
              margin-left: 2rem;
            }

            @media (max-width: 800px) {
              margin-left: 1.5rem;
            }

            &:checked + span {
              background-color: var(--orange-500);
              border: none;
              small {
                opacity: 1;
              }
            }
          }
        }

        img {
          margin-left: 1.375rem;
          cursor: pointer;
          transition: filter 0.2s;

          @media (max-width: 800px) {
            margin-left: 1.125rem;
            width: 0.875rem;
          }
          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }

  /* TABLE BODY */
  tbody {
    tr {
      width: 100%;
      border-top: 1px solid #ebeff2;
      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        background: var(--gray-100);

        td {
          &:last-child {
            opacity: 1;
          }
        }
      }
    }

    td {
      padding: 1.25rem 0.25rem;
      border: none;
      font-size: 0.9375rem;
      line-height: 1.375rem;
      letter-spacing: 0.01em;
      color: var(--gray-500);
      font-weight: 400;
      text-transform: capitalize;

      @media (max-width: 800px) {
        font-size: 0.875rem;
      }

      @media (max-width: 425px) {
        font-size: 0.8125rem;
      }

      label {
        font-weight: bold;

        span {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          height: 16px;
          width: 16px;
          border-radius: 4px;
          border: 2px solid #d5d5d5;
          background: var(--white);
          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          img {
            opacity: 0;
          }
        }

        input[type="checkbox"] {
          margin-left: 2.5rem;
          opacity: 0;
          height: 0;
          width: 0;

          @media (max-width: 1440px) {
            margin-left: 2rem;
          }

          @media (max-width: 800px) {
            margin-left: 1.5rem;
          }

          &:checked + span {
            background-color: var(--orange-500);
            border: none;
            img {
              opacity: 1;
            }
          }
        }
      }

      &:last-child {
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: right;

        @media (max-width: 800px) {
          justify-content: center;
        }

        img {
          transition: filter 0.2s;
          &:hover {
            filter: brightness(0.8);
          }

          & + img {
            margin-left: 0.75rem;
          }
        }

        img:last-child {
          margin-right: 1.75rem;
        }
      }
    }
  }
`;
