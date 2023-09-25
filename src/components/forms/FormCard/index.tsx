import { Container } from "./styles"

interface FormCardProps{
    children: React.ReactNode
}

const FormCard = ({children}: FormCardProps) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default FormCard