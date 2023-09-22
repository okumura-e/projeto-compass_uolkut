import React from 'react';
import {Container, LeftSection, Text} from './styles';
import FormPageHeader from '../../components/FormPageHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';




function FormPage() {
  return (
   <> 
   <FormPageHeader />
   <Container>
      <LeftSection className="imagem">
        <Text>Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</Text>
      </LeftSection>
      <Outlet />
    </Container>

  <Footer/>
    
  
</>
  );
}

export default FormPage;
