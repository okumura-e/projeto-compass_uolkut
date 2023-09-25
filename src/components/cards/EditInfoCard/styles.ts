import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.primary};
      font-weight: 600;
      font-size: 3.2rem;

      text-align: center;

      padding-bottom: 5rem;

      ${theme.medias.desktop} {
        padding-bottom: 8rem;
        font-size: 3.6rem;
      }
    `;
  }}
`;

export const Form = styled.form`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: 1fr;

      ${theme.medias.desktop} {
        grid-template-columns: repeat(2, minmax(180px, 270px));
        gap: 1rem;
      }
    `;
  }}
`;

export const Fieldset = styled.fieldset`
  ${({ theme }) => {
    return css`
      border: none;
      display: flex;
      flex-direction: column;

      gap: 2rem;
      margin-bottom: 4rem;
    `;
  }}
`;

export const ButtonHolder = styled.div`
  ${({ theme }) => {
    return css`
      grid-column-start: 1;
      grid-column-end: 3;
      max-width: 330px;
      width: 100%;

      margin: 0 auto;
      margin-top: 170px;
      ${theme.medias.desktop} {
        margin-top: 170px;
      }
    `;
  }}
`;
