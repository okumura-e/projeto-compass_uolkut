import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: grid;

      max-width: 1200px;
      margin: 0 auto;

      gap: 3.2rem;

      padding-top: 9rem;
      padding-bottom: 4.6rem;

      ${theme.medias.desktop} {
        grid-template-columns: minmax(160px, 280px) minmax(320px, 600px) 1fr;
      }
    `;
  }}
`;
