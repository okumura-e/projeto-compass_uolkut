import { styled, css } from "styled-components";

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, color }) => {
    return css`
      ${color === "main"
        ? css`
          background-color: ${theme.colors.primary};
          color: white;
        `
        : css`
          background-color: ${theme.colors.lightGray};
          color: ${theme.colors.primary} ;
        `}
      width: 100%;
      border-radius: 8px;
      height: 3.7rem;
      flex-shrink: 0;
      border: 0;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: "Roboto Flex", sans-serif;
      font-size: 1.4rem;

      ${theme.medias.desktop} {
        font-size: 1.8rem;
        height: 5.1rem;
      }
    `;
  }}
`;
