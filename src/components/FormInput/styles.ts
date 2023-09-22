import { styled, css } from "styled-components";

interface InputProps {
  full: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ theme, full }) => {
    return css`
      ${full
        ? css`
          width: 100%;
        `
        : css`
          width: 50%;
        `}
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.content};
        border-radius: 8px;
        padding-left: 1.6rem;
        height: 3.7rem;
        flex-shrink: 0;
        border: 0;
        align-items: center;
        justify-content: center;
        font-family: "Roboto Flex", sans-serif;
        font-size: 1.4rem;
          
        &::placeholder {
          color: ${theme.colors.placeholder};
        }
        ${theme.medias.desktop} {
          font-size: 1.6rem;
          height: 5.1rem;
        }
    `;
  }}
`;
