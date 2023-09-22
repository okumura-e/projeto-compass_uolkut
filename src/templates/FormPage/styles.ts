import styled, {css} from "styled-components";
import formImage from '../../assets/form-image.png'

export const Container = styled.main`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    
`
export const LeftSection = styled.section`
    background-image: url(${formImage});
    min-height: 600px;
    max-width: 800px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding: 3.2rem;
    
`
export const Text = styled.p`
    font-size: 3.2rem;
    color: #fff;
    font-weight: 500;
    max-width: 600px;
`
