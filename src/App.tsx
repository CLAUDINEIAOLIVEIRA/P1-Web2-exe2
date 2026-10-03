import ProfileCard from "./components/ProfileCard";
import Container from "./components/Container";

function App() {
    return (
        <div className="app">
            <h1>Perfis</h1>

            <Container titulo="Lista de Perfis">
                <div className="profiles">
                    <ProfileCard
                        nome="Maria Silva"
                        cargo="Desenvolvedora Front-end"
                        imagemUrl="https://i.pravatar.cc/150?img=1"
                        ativo={true}
                    />

                    <ProfileCard
                        nome="João Santos"
                        cargo="Designer"
                        imagemUrl="https://i.pravatar.cc/150?img=2"
                        ativo={false}
                    />

                    <ProfileCard
                        nome="Ana Oliveira"
                        cargo="Desenvolvedora Back-end"
                        imagemUrl="https://i.pravatar.cc/150?img=3"
                        ativo={true}
                    />
                </div>
            </Container>
        </div>
    );
}

export default App;