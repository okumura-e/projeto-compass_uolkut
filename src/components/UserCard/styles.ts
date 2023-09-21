import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      max-width: 320px;
      width: 100%;

      min-height: 260px;
      max-height: 260px;
      height: 100%;

      border-radius: 16px;

      background: ${theme.colors.secondaryBg};

      color: ${theme.colors.content};

      ${theme.medias.desktop} {
        max-width: 280px;
        min-height: 325px;
      }
    `;
  }}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 110px;
      height: 110px;

      padding: 5px;

      border: 3px solid ${theme.colors.primary};
      border-radius: 50%;

      margin-bottom: 2.4rem;

      color: ${theme.colors.primary};
      font-size: 4rem;

      ${theme.medias.desktop} {
        width: 180px;
        height: 180px;

        font-size: 5.4rem;

        margin-bottom: 1.9rem;
      }
    `;
  }}
`;
export const Fullname = styled.p`
  ${({ theme }) => {
    return css`
      font-size: 2rem;
      margin-bottom: 1.6rem;

      ${theme.medias.desktop} {
        font-size: 2.4rem;
        margin-bottom: 2.6rem;
      }
    `;
  }}
`;
export const Details = styled.p`
  font-size: 1.8rem;
`;
