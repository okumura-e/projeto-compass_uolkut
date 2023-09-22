import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: minmax(300px, 320px);
      justify-content: center;

      padding: 2rem;

      align-items: center;

      article {
        justify-self: center;
        order: 3;
      }

      max-width: 1200px;

      margin: 0 auto;
      margin-top: 8rem;

      padding-bottom: 5rem;

      gap: 2.8rem;

      article + section {
        order: 2;
        margin: 0 auto;
      }

      article + section + section {
        order: 4;
        margin: 0 auto;
      }
      & > section:first-child {
        flex-direction: column-reverse;
      }

      @media screen and (max-width: 1200px) {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      }

      @media screen and (min-width: 800px) {
        & > section:first-child {
          flex-direction: column;
        }
        gap: 2.8rem;
        grid-template-columns: minmax(160px, 280px) minmax(320px, 600px) minmax(
            160px,
            280px
          );
        grid-template-rows: 1fr;

        align-items: flex-start;

        article + section + section {
          order: initial;
          margin: 0;
        }

        article {
          order: initial;
          justify-self: stretch;
          align-self: flex-start;
        }

        article + section {
          order: initial;

          display: flex;
        }
      }
    `;
  }}
`;

export const CardSection = styled.section`
  ${({ theme }) => {
    return css`
      order: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.8rem;

      ${theme.medias.desktop} {
        order: initial;
      }
    `;
  }}
`;
export const PseudoSection = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.2rem;
      justify-content: space-between;
      height: 100%;
      order: 2;

      flex-shrink: 1;

      width: 100%;
    `;
  }}
`;
