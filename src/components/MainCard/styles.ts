import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      max-width: 320px;
      padding: 2.4rem;

      color: ${theme.colors.content};

      background: ${theme.colors.secondaryBg};
      border-radius: 16px;

      ${theme.medias.tablet} {
        max-width: 600px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      }
    `;
  }}
`;

export const Title = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: 2rem;
      font-weight: 400;

      margin-bottom: 2rem;

      ${theme.medias.tablet} {
        font-size: 2.6rem;
      }
    `;
  }}
`;

export const Thought = styled.p`
  ${({ theme }) => {
    return css`
      position: relative;

      display: flex;
      align-items: center;

      padding-left: 1.2rem;
      margin-bottom: 4rem;

      background: ${theme.colors.lightGray};
      border-radius: 10px;

      width: 100%;
      min-height: 32px;

      font-size: 1.2rem;

      &::before {
        position: absolute;
        left: 10px;
        top: -7px;
        content: "";
        display: block;

        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;

        border-bottom: 8px solid ${theme.colors.lightGray};
      }

      ${theme.medias.tablet} {
        font-size: 1.6rem;
        min-height: 40px;

        &::before {
          top: -11px;
          left: 20px;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;

          border-bottom: 12px solid ${theme.colors.lightGray};
        }
      }
    `;
  }}
`;

export const StatisticsContainer = styled.section`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(auto-fill, 100px);
      gap: 3.2rem;
      width: 100%;

      margin-bottom: 4.8rem;
    `;
  }}
`;

export const Statistic = styled.p`
  ${({ theme }) => {
    return css`
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    `;
  }}
`;

export const StatisticTitle = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 1.6rem;
    `;
  }}
`;

export const StatisticData = styled.span`
  ${({ theme }) => {
    return css`
      display: flex;

      align-items: center;

      gap: 0.6rem;
      font-size: 1.6rem;

      svg {
        width: 2.4rem;
        height: auto;
      }
    `;
  }}
`;

export const DetailsDataContainer = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      color: ${theme.colors.lightestGray};
      font-size: 1.6rem;

      strong {
        color: ${theme.colors.content};
        font-weight: 400;
      }
    `;
  }}
`;

export const Detail = styled.p`
  ${({ theme }) => {
    return css``;
  }}
`;

export const PreferencesContainer = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      margin-top: 244px;
      gap: 3.2rem;
    `;
  }}
`;

export const Preference = styled.p`
  ${({ theme }) => {
    return css`
      font-size: 1.6rem;
      color: ${theme.colors.lightestGray};
    `;
  }}
`;

export const Tag = styled.span`
  ${({ theme }) => {
    return css`
      padding: 0.2rem 1.6rem;
      font-size: 1.4rem;
      color: ${theme.colors.content};

      border: 1px solid ${theme.colors.primary};
      border-radius: 9999px;

      &:first-child {
        margin-left: 1.2rem;
      }
      &:not(:last-child) {
        margin-right: 1.4rem;
      }

      &:not(:first-child) {
        display: none;
      }

      ${theme.medias.tablet} {
        &:not(:first-child) {
          display: inline;
        }
      }
    `;
  }}
`;

export const SeeMoreLink = styled.a`
  ${({ theme }) => {
    return css`
      text-decoration: none;
      color: ${theme.colors.primary};
      transition: color 0.2s ease-in-out;

      margin-left: 1.6rem;
      font-size: 1.4rem;

      cursor: pointer;

      &:hover {
        color: ${theme.colors.primaryHover};
        text-decoration: underline;
      }
    `;
  }}
`;