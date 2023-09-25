import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100%;
      justify-content: center;
      gap: 2rem;

      flex: 1;

      padding-bottom: 2.4rem;

      ${theme.medias.desktop} {
        flex: initial;
        padding-bottom: 0;
      }
    `;
  }}
`;

export const Logo = styled.span`
  ${({ theme }) => {
    return css`
      height: 3.2rem;
      width: 3.2rem;

      border: 4px solid ${theme.colors.primary};
      border-radius: 50%;

      margin-bottom: 0.8rem;
    `;
  }}
`;

export const Title = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: 2rem;
      font-weight: 800;
      color: ${theme.colors.primary};

      margin-bottom: 3.2rem;

      ${theme.medias.desktop} {
        margin-bottom: 2rem;
      }
    `;
  }}
`;

export const RowContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      width: 100%;
      gap: 2.5rem;
    `;
  }}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      height: 100%;
      align-items: flex-end;
      width: 100%;
      margin-top: auto;
    `;
  }}
`;
