import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 2rem;

      align-items: center;

      max-width: 1200px;

      margin: 0 auto;
      margin-top: 8rem;

      padding-bottom: 5rem;

      gap: 2.8rem;

      @media screen and (max-width: 1200px) {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      }

      @media screen and (min-width: 800px) {
        gap: 2.8rem;
        flex-direction: row;

        align-items: flex-start;
      }
    `;
  }}
`;

export const CardSection = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.8rem;

      width: 100%;
      max-width: 320px;

      ${theme.medias.desktop} {
        order: initial;
      }
    `;
  }}
`;
export const PseudoSection = styled.section`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: minmax(300px, 320px);
      flex-direction: column;
      align-items: center;
      gap: 3.2rem;
      justify-content: center;
      flex-shrink: 1;

      width: 100%;
      max-width: 320px;

      article + section {
        order: 1;
      }

      article {
        order: 2;
      }

      section + section {
        order: 3;
      }

      @media screen and (min-width: 800px) {
        max-width: initial;
        grid-template-columns: minmax(320px, 600px) minmax(160px, 280px);
        grid-template-rows: 2;

        article {
          order: initial;
          grid-row-start: 1;
          grid-row-end: 3;
        }

        article + section {
          order: initial;
        }

        section + section {
          order: initial;
        }
      }
    `;
  }}
`;
