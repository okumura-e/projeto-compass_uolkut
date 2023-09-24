import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      max-width: 320px;

      width: 100%;

      padding: 2.4rem 3rem 0 3rem;
      color: ${theme.colors.content};

      background: ${theme.colors.secondaryBg};
      border-radius: 16px;

      min-height: 940px;

      ${theme.medias.tablet} {
        padding: 3.2rem 4.6rem 0 4.6rem;
        max-width: 600px;
        min-height: 850px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      }
    `;
  }}
`;

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
