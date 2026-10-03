React: Componentes e Props

Exercício 2.1: Componente de Cartão de Perfil (ProfileCard) 
Crie um componente reutilizável chamado ProfileCard que receba dados via props e exiba as informações estruturadas em HTML.
Props esperadas: nome (string), cargo (string), imagemUrl (string) e ativo (boolean).
Regra: Se a prop ativo for true, exiba uma tag "Status: Online" em verde; caso contrário, "Status: Offline" em cinza.
Renderize 3 cartões diferentes na tela passando dados variados.

Exercício 2.2: Composição de Componentes (children)
Crie um componente wrapper chamado Container que aceite a prop children e uma prop titulo.
O Container deve renderizar uma estrutura fixa com cabeçalho h2 contendo o título e uma caixa delimitadora em volta do conteúdo passado em children.

