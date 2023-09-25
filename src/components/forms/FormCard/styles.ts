import styled, {css} from "styled-components";


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

      a {
        font-size: 1.4rem;
        color: ${theme.colors.primary};
        text-decoration: underline;

        margin-top: 7.7rem;

        transition: color 0.2s ease-in-out;
      }

      a:hover {
        color: ${theme.colors.primaryHover};
      }
    `;
  }}
`;