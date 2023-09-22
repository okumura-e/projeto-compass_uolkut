import { BsDisplay } from "react-icons/bs";
import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => {
    return css`
      background: ${theme.colors.secondaryBg};
      padding: 2.4rem 0;

      ${theme.medias.mobile} {
        display: none;
      }
    `;
  }}
`;

export const Text = styled.p`
    ${({ theme }) => {
    return css`
    color: #ED6D25;
    font-family: Roboto Flex;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;   
    text-align: center;

    ${theme.medias.mobile} {
        display: none;
    }
`;
    }}

`;

