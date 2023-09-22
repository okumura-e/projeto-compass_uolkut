import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;

      background: ${theme.colors.secondaryBg};
      border-radius: 16px;

      padding: 1rem 2rem 0 2rem;

      max-width: 320px;
      width: 100%;

      min-height: 580px;

      ${theme.medias.tablet} {
        justify-content: center;
        max-width: 380px;
        min-height: 600px;
      }
    `;
  }}
`;
export const FormContainer = styled.form`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
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
