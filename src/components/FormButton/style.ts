import { styled, css } from "styled-components";

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, color }) => {
    return css`
      ${color === "orange"
        ? css`
          background-color: ${theme.colors.primary};
          color: white;
        `
        : css`
          background-color: ${theme.colors.lightGray};
          color: ${theme.colors.primary} ;
        `}
      display: flex;
      width: 100%;
      border-radius: 8px;
      height: 3.7rem;
      flex-shrink: 0;
      border: 0;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      ${theme.medias.desktop} {
        height: 5.1rem;
      }
    `;
  }}
`;

export const Title = styled.p`
  ${({ theme }) => {
    return css`
      font-family: "Roboto Flex", sans-serif;
      font-size: 1.4rem;
      ${theme.medias.desktop} {
        font-size: 1.8rem;
      }
    `;
  }}
`;
