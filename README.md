# Simone de Oliveira — Landing Page Profissional

Landing Page moderna, elegante, responsiva e pronta para produção desenvolvida para **Simone de Oliveira**, profissional de Tecnologia da Informação com sólida experiência em TI, Saúde, Consultoria, Implantação de Sistemas, Gestão de Projetos, Processos, Qualidade, Automação e Inteligência Artificial.

---

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite** (Build ultrarrápido e otimizado)
- **Lucide Icons** (Ícones modernos e leves)
- **CSS3 Moderno** (Variáveis nativas para facilitar alteração de cores, Flexbox, CSS Grid, Bento Grid)
- **SEO & Acessibilidade** (Schema.org JSON-LD, Open Graph, meta tags completas, sitemap.xml e robots.txt)

---

## 📁 Estrutura do Projeto

`	ext
├── public/
│   ├── favicon.svg             # Favicon moderno da marca
│   ├── robots.txt              # Regras para motores de busca (Google, etc.)
│   ├── sitemap.xml             # Mapa do site para SEO
│   └── simone-oliveira.png     # Foto de perfil de Simone
├── src/
│   ├── assets/                 # Imagens e assets estáticos
│   ├── components/             # Componentes reutilizáveis (Header, Footer, InstagramIcon)
│   ├── data/
│   │   └── content.js          # ⭐ ARQUIVO PRINCIPAL DE TEXTOS E CONTATOS
│   ├── sections/               # Seções da Landing Page (Hero, Timeline, Experience, AI, Contact, etc.)
│   ├── styles/
│   │   └── global.css          # ⭐ CORES, FONTES E ESTILOS GLOBAIS
│   ├── App.jsx                 # Componente principal
│   └── main.jsx                # Ponto de entrada
├── index.html                  # Metadados, SEO, título e Schema.org
├── package.json
└── README.md
`

---

## 🛠️ Como Executar Localmente

Se você quiser testar o projeto no seu computador:

1. **Instalar as dependências:**
   `ash
   npm install
   `

2. **Iniciar o servidor de desenvolvimento:**
   `ash
   npm run dev
   `
   Abra no seu navegador o endereço indicado no terminal (normalmente http://localhost:5173).

3. **Gerar o pacote de produção (Build):**
   `ash
   npm run build
   `

---

## ✏️ Onde Alterar Informações Futuramente

Tudo foi centralizado para que você consiga atualizar o site mesmo sem conhecimento avançado de código:

### 1. Textos, Informações e Contatos
- Abra o arquivo: src/data/content.js
  - Para alterar o WhatsApp: edite phoneDisplay, phoneRaw e whatsappMessage.
  - Para alterar o E-mail: edite email.
  - Para alterar o Instagram: edite instagram e instagramHandle.
  - Para atualizar formação (Faculdade/Ano/Cursos): edite o bloco education.
  - Para ajustar textos, timeline, princípios ou competências: tudo está organizado de forma clara nesse arquivo.

### 2. Foto de Perfil
- Substitua o arquivo public/simone-oliveira.png por uma nova imagem mantendo o mesmo nome (ou atualize o caminho em src/data/content.js).

### 3. Cores e Identidade Visual
- Abra o arquivo: src/styles/global.css
  - No bloco inicial :root, você pode alterar facilmente --color-primary, --color-teal, --color-accent e os tons de fundo.

---

## 🌐 Guia Passo a Passo: Como Publicar no GitHub e na Vercel

### PASSO 1 — Criar conta no GitHub
Se ainda não possuir conta, acesse [github.com](https://github.com/) e crie uma conta gratuita.

### PASSO 2 — Criar repositório no GitHub
1. No canto superior direito do GitHub, clique no ícone **+** e selecione **New repository**.
2. Digite o nome: landing-page-simone.
3. Mantenha como **Public** (Público).
4. Deixe todas as opções de inicialização (README, .gitignore, license) desmarcadas.
5. Clique em **Create repository**.

### PASSO 3 — Enviar o projeto para o GitHub
No terminal da pasta do seu projeto, execute os comandos:
`ash
git init
git add .
git commit -m "Publicação inicial da Landing Page Simone de Oliveira"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO_GITHUB/landing-page-simone.git
git push -u origin main
`
*(Substitua SEU_USUARIO_GITHUB pelo seu nome de usuário no GitHub).*

### PASSO 4 — Criar conta na Vercel
Acesse [vercel.com](https://vercel.com/) e faça login utilizando a opção **Continue with GitHub**.

### PASSO 5 — Conectar e Importar o Repositório
1. No painel da Vercel, clique no botão **Add New...** e escolha **Project**.
2. Na lista de repositórios do seu GitHub, localize landing-page-simone e clique em **Import**.

### PASSO 6 — Configurar e Publicar
1. A Vercel detectará automaticamente que o projeto é **Vite / React**.
2. Deixe as opções padrão de Build e Output como estão (
pm run build e dist).
3. Clique no botão azul **Deploy**.

### PASSO 7 — Abrir o Endereço Gerado
Em menos de 1 minuto, a Vercel concluirá a publicação e exibirá o link oficial gratuito gerado (exemplo: https://landing-page-simone.vercel.app).
Pronto! Sempre que você enviar novos commits para o repositório no GitHub, a Vercel atualizará o site automaticamente.

### PASSO 8 — (Opcional) Domínio Personalizado
Para vincular um domínio como simoneoliveira.com.br:
- No painel do seu projeto na Vercel, vá em **Settings** > **Domains**.
- Digite seu domínio e siga as instruções simples de apontamento DNS da Vercel.

---

© 2026 Simone de Oliveira. Todos os direitos reservados.
