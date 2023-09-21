import React from 'react';

function MainComponent() {
  return (
    <main>
      <section className="imagem">
        <img src="caminho-para-sua-imagem.jpg" alt="Imagem" />
      </section>
      <section className="formulario">
        <form>
          {/* Seu formulário aqui */}
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default MainComponent;
