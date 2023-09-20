import { styled } from "styled-components";
import { AiOutlineUser } from 'react-icons/ai';
import { GrGroup } from 'react-icons/gr';

export const Row = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Name = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    color: #4B4B4B;
`

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
`
export const SeeAll = styled.h1`
    font-family: 'Roboto', sans-serif;;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ED6D25;

    &:hover {
        text-decoration: underline;
    }
`

export const Section = styled.section`
    background-color: #FFFFFF;
    display: flex;
    max-width: 280px;
    padding: 24px;
    border-radius: 16px;
    flex-direction: column;
`
export const Grid = styled.section`
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(3, 80px);
    gap: 29px;
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