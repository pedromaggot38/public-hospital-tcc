# Projeto de TCC - Desenvolvimento de Site para Instituição de Saúde de Maracaí

Este projeto de Trabalho de Conclusão de Curso (TCC) tem como objetivo o desenvolvimento de um site para uma instituição de saúde localizada em Maracaí. O projeto é uma iniciativa do curso técnico da **Etec Pedro D'Arcádia Neto**, e foi proposto como parte das exigências curriculares para a conclusão do curso.

Nosso objetivo principal é criar uma plataforma online eficiente, moderna e acessível, que facilite a comunicação entre a instituição de saúde e a comunidade local, além de aprimorar os serviços oferecidos. A proposta é desenvolver um site que integre informações importantes, como dados sobre o hospital, notícias, e uma lista de médicos disponíveis, tudo gerenciado a partir de um dashboard administrativo previamente implementado.

---

## Estrutura do Projeto

### Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e ferramentas:
- **Next.js**: Para o desenvolvimento do front-end e da interface do usuário.
- **Prisma**: Para o gerenciamento do banco de dados.
- **Supabase**: Como backend e serviço de banco de dados.
- **React**: Para construção de componentes reutilizáveis.
- **PNPM**: Para gerenciamento de pacotes, com suporte a alternativas como `npm`.
- **Node.js**: Para rodar o ambiente de desenvolvimento.

---

### Funcionalidades Principais

- **Informações Institucionais**: Apresentação das informações do hospital, como história, missão, visão e valores.
- **Notícias**: Integração com o banco de dados para exibir notícias atualizadas publicadas no dashboard.
- **Equipe Médica**: Listagem de médicos com informações detalhadas obtidas dinamicamente do banco de dados.
- **Responsividade**: Layout adaptável para dispositivos móveis, tablets e desktops.
- **Acessibilidade**: Seguindo boas práticas para garantir que o site seja inclusivo para todos os usuários.

---

## Configuração e Início do Projeto

Siga os passos abaixo para configurar o ambiente de desenvolvimento do projeto:

### 1. Instale as dependências do projeto
```bash
pnpm install
# ou, se preferir:
npm install
```

### 2. Configure o Prisma
```bash
npx prisma generate
```

### 3. Configure as Variáveis de Ambiente
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase?schema=public"
```

### 4. Inicie o servidor de desenvolvimento
```bash
pnpm run dev
# ou, se preferir:
npm run dev
```

### 5. Acesse o site no navegador
Abra o navegador e digite http://localhost:3000 para visualizar o projeto.