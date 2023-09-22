import { BsDisplay } from "react-icons/bs";
import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => {
    return css`s

      display: none;
      margin-top: auto;
      background: ${theme.colors.secondaryBg};
      padding: 2.4rem 0;

      ${theme.medias.tablet} {
        display: block;
      }
    `;
  }}
`;

export const Text = styled.p`
  ${({ theme }) => {
    return css`
      color: #ed6d25;
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
