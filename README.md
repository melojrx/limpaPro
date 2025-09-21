# LimpaPro - Site Institucional para Empresa de Limpeza

![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-black?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=for-the-badge&logo=typescript)

![Screenshot Desktop](public/screenshot_desktop.png)

**[Live Demo](https://limpapro.vercel.app)** | **[Repositório do Projeto](https://github.com/seu-usuario/limpapro-site)**

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
O projeto foi desenvolvido com o auxílio do **Dyad**, um assistente de desenvolvimento por IA. Essa abordagem permitiu acelerar a implementação de componentes, a configuração do projeto e a escrita de código boilerplate, liberando tempo para focar em decisões de arquitetura, experiência do usuário e na lógica de negócio.

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
| **Desenvolvimento** | Dyad (AI Assistant) |
| **Versionamento** | Git & GitHub |

## 6. Capturas de Tela

#### Visão Desktop
![Screenshot Desktop](public/screenshot_desktop.png)

#### Visão Mobile
![Screenshot Mobile](public/screenshot_mobile.png)

#### Recursos Interativos
![Screenshot Mapa](public/screenshot_mapa.png)

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

# O site estará disponível em http://localhost:8080