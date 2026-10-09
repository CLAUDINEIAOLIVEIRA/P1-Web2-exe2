# Exercício 2: React, componentes e props

## Parte 1: Criando o projeto React

**Passo 1. Abra o terminal** na pasta `Exercicio 2` (menu **Terminal > Novo Terminal** ou `Ctrl + '`).

**Passo 2. Crie o projeto com o Vite.**

```
npm create vite@latest cartoes-perfil -- --template react
```

Se o terminal fizer perguntas, escolha **React** e depois **JavaScript**.

**Passo 3. Entre na pasta, instale as dependências e abra no VS Code.**

```
cd cartoes-perfil
npm install
code .
```

**Passo 4. Rode o projeto para conferir.**

```
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`). Deve aparecer a página de exemplo do Vite.

**Passo 5. Limpe os arquivos de exemplo.**

- Apague o arquivo `src/App.css`.
- Apague a pasta `src/assets`.
- Apague todo o conteúdo de `src/index.css` (vamos escrever o nosso no Passo 9).

## Parte 2: Exercício 2.1, o componente ProfileCard

**Passo 6. Crie a pasta `src/components`** e, dentro dela, o arquivo `ProfileCard.jsx`:

```jsx
function ProfileCard({ nome, cargo, imagemUrl, ativo }) {
  return (
    <div className="card">
      <img src={imagemUrl} alt={`Foto de ${nome}`} />
      <h3>{nome}</h3>
      <p>{cargo}</p>

      {ativo ? (
        <span className="status online">Status: Online</span>
      ) : (
        <span className="status offline">Status: Offline</span>
      )}
    </div>
  );
}

export default ProfileCard;
```

> **O que são props?** São os dados que um componente recebe de fora, parecidos com os atributos de uma tag HTML.
> Em `{ nome, cargo, imagemUrl, ativo }` estamos "abrindo" o objeto de props e pegando cada valor pelo nome.

> **O que é o `? :`?** É o operador ternário, um `if/else` em uma linha só.
> `ativo ? A : B` significa: se `ativo` for verdadeiro, mostra A; senão, mostra B.

> **Por que `className` e não `class`?** No JSX, `class` é uma palavra reservada do JavaScript, por isso o React usa `className`.

## Parte 3: Exercício 2.2, o componente Container

**Passo 7. Crie o arquivo `src/components/Container.jsx`:**

```jsx
function Container({ titulo, children }) {
  return (
    <section className="container">
      <h2>{titulo}</h2>
      <div className="caixa">{children}</div>
    </section>
  );
}

export default Container;
```

> **O que é `children`?** É uma prop especial: tudo o que for escrito **entre** a tag de abertura e a de fechamento do componente.
> Em `<Container titulo="Equipe">...conteúdo...</Container>`, o "...conteúdo..." chega ao componente como `children`.

## Parte 4: Juntando tudo no App

**Passo 8. Substitua todo o conteúdo de `src/App.jsx`:**

```jsx
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
```

> **Por que `ativo={true}` com chaves?** Textos podem ir entre aspas, mas qualquer outro tipo de valor (booleano, número, variável) precisa ir entre chaves `{ }`.
> Se você escrever `ativo="false"`, o React recebe o **texto** `"false"`, que conta como verdadeiro, e o cartão aparece Online.

**Passo 9. Escreva os estilos em `src/index.css`:**

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f2f4f7;
  color: #222;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 16px;
}

/* Container (Exercício 2.2) */
.container h2 {
  margin: 0 0 12px;
}

.caixa {
  border: 2px solid #4a6cf7;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
}

/* Cartões (Exercício 2.1) */
.lista-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 220px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background-color: #fafafa;
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.card h3 {
  margin: 12px 0 4px;
}

.card p {
  margin: 0 0 12px;
  color: #555;
}

.status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.online {
  background-color: #2e9e44;
}

.offline {
  background-color: #8a8a8a;
}
```

**Passo 10. Confira no navegador.** Com o `npm run dev` rodando, a página deve mostrar:

| O que verificar | Resultado esperado |
|---|---|
| Título | "Equipe do Projeto" em um `<h2>` |
| Caixa | Borda azul em volta dos cartões (Container) |
| Cartões | 3 cartões com foto, nome e cargo diferentes |
| Maria e Ana | "Status: Online" em **verde** |
| João | "Status: Offline" em **cinza** |

## Problemas comuns

- **Tela em branco**: aperte `F12` e veja a aba **Console**. Normalmente é um erro de digitação no nome do arquivo do `import` (maiúsculas e minúsculas contam).
- **Erro `Failed to resolve import "./App.css"`**: o `App.jsx` antigo ainda importa o `App.css` que foi apagado. Substitua todo o `App.jsx` como no Passo 8.
- **As fotos não aparecem**: as imagens vêm da internet (`pravatar.cc`). Sem internet, o cartão aparece só com o texto alternativo.
- **Cartão do João aparece Online**: foi escrito `ativo="false"` em vez de `ativo={false}`.
- **Erro dizendo que a execução de scripts foi desabilitada, ao rodar `npm`**: troque o terminal para o **Prompt de Comando (cmd)**, pela setinha ao lado do `+` no terminal do VS Code.

## Entrega

Não coloque a pasta `node_modules` no .zip. Ela é grande e pode ser recriada com `npm install`.
