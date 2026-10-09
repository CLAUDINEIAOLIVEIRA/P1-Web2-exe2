import ProfileCard from './components/ProfileCard.jsx';
import Container from './components/Container.jsx';

function App() {
  return (
    <main>
      <Container titulo="Equipe do Projeto">
        <div className="lista-cards">
          <ProfileCard
            nome="Maria Souza"
            cargo="Desenvolvedora Front-end"
            imagemUrl="https://i.pravatar.cc/150?img=47"
            ativo={true}
          />
          <ProfileCard
            nome="João Lima"
            cargo="Designer de Interfaces"
            imagemUrl="https://i.pravatar.cc/150?img=12"
            ativo={false}
          />
          <ProfileCard
            nome="Ana Costa"
            cargo="Gerente de Projetos"
            imagemUrl="https://i.pravatar.cc/150?img=32"
            ativo={true}
          />
        </div>
      </Container>
    </main>
  );
}

export default App;
