import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: ${theme.colors.secondaryBg};
      border-radius: 16px;

      padding: 0rem 2rem;

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

      ${theme.medias.tablet} {
        font-size: 2.4rem;
        margin-bottom: 3.8rem;
      }
    `;
  }}
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonContainer = styled.section`
  width: 100%;
  margin-top: 3.8rem;
`;

export const RememberContainer = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      margin-top: 10.9rem;
      ${theme.medias.desktop} {
        gap: 1.5rem;
      }
    `;
  }}
`;

export const RememberPassword = styled.p`
  ${({ theme }) => {
    return css`
      font-size: 1.4rem;
      font-weight: 400;
      font-family: "Roboto Flex", sans-serif;
      color: ${theme.colors.primary};
      text-align: center;
      ${theme.medias.desktop} {
        font-size: 1.8rem;
      }
    `;
  }}
`;
