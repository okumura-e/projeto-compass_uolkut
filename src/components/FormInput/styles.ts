import { styled, css } from "styled-components";

interface ContainerProps {
  half?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, half }) => {
    return css`
      display: flex;
      flex-direction: column;
      ${half
        ? css`
            width: 50%;
          `
        : css`
            width: 100%;
          `}
    `;
  }}
`;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ theme, error }) => {
    return css`
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.content};
      border-radius: 8px;
      padding-left: 1.6rem;
      height: 3.7rem;
      flex-shrink: 0;
      border: 1px solid transparent;
      align-items: center;
      justify-content: center;
      font-family: "Roboto Flex", sans-serif;
      font-size: 1.4rem;

      transition: border-color 0.2s ease-in-out;

      outline: transparent;

      ${error &&
      css`
        border-color: #ff0035;
      `}

      &::placeholder {
        color: ${theme.colors.placeholder};
      }

      &:hover {
        border-color: rgba(0, 0, 0, 0.2);
      }

      &:focus {
        border-color: ${theme.colors.content};
      }

      ${theme.medias.desktop} {
        font-size: 1.6rem;
        height: 5.1rem;
      }
    `;
  }}
`;

export const ErrorText = styled.small`
  ${({ theme }) => {
    return css`
      color: #ff0035;
      font-size: 1.2rem;
    `;
  }}
`;
