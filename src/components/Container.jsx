// Exercício 2.2 - Componente "wrapper" que recebe um título e um conteúdo (children)
function Container({ titulo, children }) {
  return (
    <section className="container">
      <h2>{titulo}</h2>
      <div className="caixa">{children}</div>
    </section>
  );
}

export default Container;
