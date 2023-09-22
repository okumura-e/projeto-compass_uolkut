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
        min-height: 325px;
      }
    `;
  }}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
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

export const IconHolder = styled.div`
  ${({ theme }) => {
    return css`
      position: absolute;
      left: -8px;
      bottom: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      background: ${theme.colors.secondaryBg};

      font-size: 2rem;

      border: 3px solid ${theme.colors.primary};
      border-radius: 50%;

      max-width: 42px;
      min-height: 42px;
      width: 100%;

      color: ${theme.colors.primary};

      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `;
  }}
`;
