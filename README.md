# 🌿 Daily Check

Um sistema simples para organização de tarefas do dia a dia, com consulta de temperatura em tempo real.

------------------------------

# 📌 Sobre o projeto

O Daily Check foi desenvolvido com o objetivo de facilitar o acompanhamento de tarefas diárias, reunindo em um só lugar:

- Visualização de tarefas em formato de cards
- Cadastro de novas tarefas
- Consulta de temperatura por cidade utilizando API externa

  -------------------

  # 🚀 Funcionalidades
- 🏠 Home
Exibe as tarefas cadastradas em formato de cards
Mostra nome, datas e opção de visualizar descrição
- 🌤️ Temperatura
Busca o clima de qualquer cidade
Exibe:
Temperatura
Descrição do clima
Umidade
Ícone representativo
- 📝 Tarefas
Cadastro de tarefas com:
Nome
Data de início
Data de fim
Descrição
Armazenamento em banco de dados

----------------------

# 🛠️ Tecnologias utilizadas
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Prisma ORM
- MySQL
- API OpenWeather

  ----------------------

  # ⚙️ Como executar o projeto
- 1. Instalar dependências
npm install
- 2. Configurar o banco de dados

No arquivo .env:

DATABASE_URL="mysql://root@localhost:3306/dailycheck"
- 3. Rodar o Prisma
npx prisma migrate dev
- 4. Iniciar o servidor
node server.js
- 5. Abrir o projeto

Abra o arquivo index.html no navegador ou utilize o Live Server.
