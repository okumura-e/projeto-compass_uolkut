import { BsDisplay } from "react-icons/bs";
import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => {
    return css`
      display: none;
      margin-top: auto;
      background: ${theme.colors.secondaryBg};
      padding: 2.4rem 0;

      ${theme.medias.desktop} {
        display: block;
      }
    `;
  }}
`;

export const Text = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.primary};

      font-size: 1.8rem;
      text-align: center;
    `;
  }}
`;
