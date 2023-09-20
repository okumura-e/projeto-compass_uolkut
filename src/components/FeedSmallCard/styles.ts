import { styled, css } from "styled-components";
import { AiOutlineUser } from 'react-icons/ai';
import { GrGroup } from 'react-icons/gr';

export const Section = styled.section`
    ${({ theme }) => 
        {
            return css`
                background-color: ${theme.colors.secondaryBg};
                display: flex;
                max-width: 320px;
                padding: 2.4rem;
                border-radius: 16px;
                flex-direction: column;
                ${theme.medias.tablet} {
                    max-width: 280px;
                }
            `
        }
    }
`

export const Row = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Name = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 0px;
    text-align: center;
    color: #4B4B4B;
`

export const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    letter-spacing: 0px;
`
export const SeeAll = styled.a`
    ${({ theme }) => {
        return css`
            font-family: 'Roboto', sans-serif;;
            font-size: 1.4rem;
            letter-spacing: 0px;
            color: #ED6D25;
            cursor: pointer;
            transition: 0.2s ease-in-out;

            &:hover {
                color: ${theme.colors.primaryHover};
                text-decoration: underline;
            }
        `
    }}
`
export const Grid = styled.section`
    ${({ theme }) => {
        return css`
        
            margin-top: 3.2rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr); 
            grid-template-rows: repeat(3, 80px);
            gap: 3.6rem;

            ${theme.medias.tablet} {
                gap: 3rem;
            }
        `
    }}
`
export const Profile = styled.section`
    width: 56px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProfilePhoto = styled.section`
    height: 56px;
    width: 56px;
    border: 1px solid #4B4B4B;
    border-radius: 100%;
    display: flex;
`
export const CommunityPhoto = styled.section`
    height: 56px;
    width: 56px;
    border: 1px solid #4B4B4B;
    border-radius: 12px;
    display: flex;
`

export const Icon = styled(AiOutlineUser)`
    width: 100%;
    height: 70%;
    align-self: center;
`
export const CommunityIcon = styled(GrGroup)`
    width: 100%;
    height: 50%;
    align-self: center;
`