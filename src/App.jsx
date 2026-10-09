import ProfileCard from './components/ProfileCard.jsx';
import Container from './components/Container.jsx';

function App() {
  return (
    <main>
      <Container titulo="Equipe do Projeto">
        <div className="lista-cards">
          <ProfileCard
            nome="Carla"
            cargo="Desenvolvedora Front-end"
            imagemUrl="https://i.pravatar.cc/150?img=5"
            ativo={true}
          />
          <ProfileCard
            nome="Vick"
            cargo="Designer de Interfaces"
            imagemUrl="https://i.pravatar.cc/150?img=44"
            ativo={false}
          />
          <ProfileCard
            nome="Manoela"
            cargo="Gerente de Projetos"
            imagemUrl="https://i.pravatar.cc/150?img=45"
            ativo={true}
          />
        </div>
      </Container>
    </main>
  );
}

export default App;
