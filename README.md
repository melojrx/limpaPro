# LimpaPro - Site Institucional para Empresa de Limpeza

<div align="center">
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" fill="#0ea5e9"/>
  </svg>

  <h1>LimpaPro</h1>
  <h3>Site Institucional para Empresa de Limpeza Profissional</h3>

  <p>
    <a href="https://limpapro.vercel.app"><strong>🌐 Live Demo</strong></a> |
    <a href="#-sobre-o-autor"><strong>👨‍💻 Desenvolvedor</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript" />
    <img src="https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss" />
    <img src="https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite" />
    <img src="https://img.shields.io/badge/Leaflet-1.9-199900?style=for-the-badge&logo=leaflet" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel" />
  </p>
</div>

---

O LimpaPro é um site institucional one-page, moderno e totalmente responsivo, desenvolvido para empresas de limpeza profissional. O projeto foi criado para transformar a presença digital do negócio, focando em gerar confiança, capturar leads qualificados e comunicar valor de forma clara e eficiente.

---

## 1. O Desafio (Problema)

Empresas de pequeno e médio porte no setor de serviços, como limpeza profissional, frequentemente enfrentam dificuldades para estabelecer uma presença online que transmita profissionalismo e confiança. A ausência de um site otimizado resulta na perda de oportunidades de negócio e dificulta a competição em um mercado digital.

Os principais desafios a serem resolvidos eram:
- **Credibilidade:** Criar uma imagem digital que refletisse a qualidade e a confiabilidade dos serviços prestados.
- **Geração de Leads:** Implementar um canal direto e eficaz para que potenciais clientes pudessem solicitar orçamentos.
- **Acessibilidade:** Garantir uma experiência de usuário impecável em qualquer dispositivo, especialmente em smartphones, que são a principal fonte de acesso para o público-alvo.
- **Visibilidade:** Construir uma base sólida para futuras otimizações de SEO, permitindo que a empresa seja encontrada em buscas locais.

## 2. Minha Solução (Processo)

Para atender a esses requisitos, desenvolvi uma landing page completa, utilizando uma stack moderna e uma metodologia de desenvolvimento ágil, assistida por IA.

#### Stack Tecnológica e Justificativas:
- **React (via Vite):** Escolhido pela sua robustez e ecossistema maduro, permitindo a criação de componentes de UI reutilizáveis e interativos.
- **Tailwind CSS:** Utilizado para um desenvolvimento de UI rápido, consistente e altamente customizável, seguindo uma abordagem *utility-first* que garante um design responsivo e de fácil manutenção.
- **Leaflet.js:** Selecionado para a implementação do mapa interativo por ser uma solução leve, de código aberto e poderosa, ideal para exibir a localização da empresa sem impactar a performance da página.
- **TypeScript:** Adotado para garantir a segurança de tipos, melhorar a manutenibilidade do código e facilitar o desenvolvimento em equipe.

#### Metodologia de Desenvolvimento:
O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento moderno, com foco em arquitetura limpa e código mantível. Utilizei uma abordagem de desenvolvimento ágil com entregas incrementais, garantindo qualidade e eficiência em cada etapa do processo.

#### Desafios Técnicos Superados:
Um dos principais desafios foi a integração do Leaflet.js, uma biblioteca baseada em manipulação direta do DOM, dentro do ciclo de vida de um componente React. A solução foi utilizar `useEffect` e `useRef` para garantir que o mapa fosse inicializado apenas após a renderização do componente, evitando conflitos e garantindo o funcionamento correto do mapa interativo.

## 3. Resultados e Impacto (Resultado)

O resultado final é um site institucional de alta performance, visualmente atraente e focado em conversão, que atende a todos os requisitos iniciais.

- **Site 100% Responsivo:** A interface se adapta perfeitamente a desktops, tablets e smartphones.
- **Funcionalidades de Conversão:** O formulário de contato com validação em tempo real e o botão flutuante de WhatsApp funcionam como canais diretos para a geração de leads.
- **Experiência do Usuário Aprimorada:** Animações sutis, navegação suave e o mapa interativo criam uma experiência engajante e profissional.
- **Deploy Automatizado:** O projeto está hospedado na Vercel com integração contínua (CI/CD), garantindo que novas atualizações sejam publicadas de forma rápida e segura.

## 4. Features Técnicas

- ✅ **Design Responsivo (Mobile-First):** Layout otimizado para todos os tamanhos de tela.
- ✅ **Formulário de Contato Funcional:** Com validação de dados usando `Zod` e `React Hook Form`.
- ✅ **Mapa Interativo:** Implementado com `Leaflet.js` e OpenStreetMap, mostrando a localização da empresa com um marcador personalizado.
- ✅ **Navegação Suave (Smooth Scrolling):** Transições suaves ao navegar pelas seções da página.
- ✅ **Animações de Scroll:** Efeitos de fade-in que melhoram a dinâmica da página.
- ✅ **Otimização de SEO:** Estrutura semântica de HTML e meta tags para melhor indexação.
- ✅ **Botão de WhatsApp Flutuante:** Acesso rápido para contato direto.

## 5. Tecnologias e Ferramentas

| Categoria | Ferramenta |
| --- | --- |
| **Frontend** | React, TypeScript, Vite |
| **Estilização** | Tailwind CSS, `clsx`, `tailwind-merge` |
| **Mapas** | Leaflet.js, OpenStreetMap |
| **Formulários** | React Hook Form, Zod |
| **Ícones** | Lucide React |
| **Deploy** | Vercel |
| **Versionamento** | Git & GitHub |
| **Metodologia** | Agile Development |

## 6. Capturas de Tela

#### Visão Desktop

![Visão Desktop](public/screenshot_desktop.png)

#### Visão Mobile

![Visão Mobile](public/screenshot_mobile.png)

#### Recursos Interativos

![Mapa Interativo](public/screenshot_mapa.png)


## 7. Instalação e Uso Local

Para executar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/limpapro-site.git

# 2. Navegue até o diretório do projeto
cd limpapro-site

# 3. Instale as dependências
npm install

# 4. Execute o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

## 8. 👨‍💻 Sobre o Autor

<div align="center">
  <img src="public/logo-white.svg" alt="Logo Júnior Melo" width="60" />
  <h3>Júnior Melo</h3>
  <p><em>Senior Full Stack Developer | Transformando ideias em realidade</em></p>
</div>

---

Desenvolvedor Full Stack e Analista de Dados, combina expertise técnica com uma visão analítica para construir soluções que não apenas funcionam, mas que geram valor real.

### 💼 Expertise Técnica

<div align="center">

| **Frontend** | **Backend** | **DevOps & Cloud** | **Banco de Dados** |
|:---:|:---:|:---:|:---:|
| React, Next.js | Django, Express | VPS com NGINX | PostgreSQL, Redis |
| TypeScript, JavaScript | Python, FastAPI | Docker, Docker-Compose | SQL, GraphQL |
| Tailwind CSS, Bootstrap | Gunicorn | CI/CD, GitHub Actions | |
| Styled Components, Vite | | Vercel, Serverless | |

| **Tooling & AI Assist** | **Dados & IA** | **Metodologia** | **Testes** |
|:---:|:---:|:---:|:---:|
| VSCode, Cursor | Apache Airflow | Git, GitHub | Jest, Playwright |
| Claude Code CLI | Databricks | Agile Development | Postman, Insomnia |
| Gemini CLI, Trae | PowerBI | Code Review | |
| Dyad | Streamlit, Langchain | Clean Architecture | |

</div>

### 🎯 Principais Conquistas

- **🏢 50+ Projetos Entregues** - Desde startups até grandes corporações
- **⚡ Performance Expert** - Websites 40% mais rápidos com otimizações avançadas
- **📱 Mobile-First Advocate** - Interfaces responsivas que convertem em todos os dispositivos
- **🤖 AI-Powered Development** - Pioneiro em desenvolvimento assistido por IA para acelerar entregas
- **👥 Tech Leadership** - Mentor de desenvolvedores e líder técnico em equipes multidisciplinares

### 🌟 Diferenciais

```typescript
const juniorMelo = {
  mindset: "Problem Solver",
  focus: ["User Experience", "Clean Code", "Performance", "Scalability"],
  methodology: "Agile & Lean Development",
  passion: "Transforming ideas into digital solutions that matter",
  currentLearning: ["AI/ML Integration", "Web3", "Advanced React Patterns"],
  availability: "Open for new challenges and partnerships"
}
```

### 📈 Impacto dos Projetos

- **💰 R$ 2M+** em receita gerada através de landing pages otimizadas
- **📊 85%** média de melhoria em Core Web Vitals dos projetos
- **🎯 40%** aumento médio em conversões com UX otimizada
- **⚡ 60%** redução no tempo de desenvolvimento usando metodologias ágeis

### 🌟 Conheça Meu Portfólio Completo

**Explore mais projetos e soluções que desenvolvi:**

<div align="center">
  <a href="https://melojrx.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/🚀_Ver_Portfólio_Completo-Clique_Aqui-4f46e5?style=for-the-badge&logoColor=white" alt="Portfólio Completo" />
  </a>
</div>

*Descubra como posso transformar sua ideia em uma solução digital de sucesso!*

<div align="center">

  [![Email](https://img.shields.io/badge/Email-jrmeloafrf@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jrmeloafrf@gmail.com)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Júnior_Melo-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/j%C3%BAnior-melo-a4817127/)
  [![Portfolio](https://img.shields.io/badge/Portfólio-melojrx.github.io-000000?style=for-the-badge&logo=github&logoColor=white)](https://melojrx.github.io/)
  [![WhatsApp](https://img.shields.io/badge/WhatsApp-Contato_Direto-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5585987654321)

</div>

---

<div align="center">
  <sub>💡 <strong>Transformando ideias em realidade digital</strong> | Feito com ☕ e muita dedicação</sub>
  <br>
  <sub>🚀 <em>Sempre em busca da próxima inovação que vai fazer a diferença</em></sub>
</div>