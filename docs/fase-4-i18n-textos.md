# Fase 4 — Internacionalização dos Textos

**Status:** ✅ Concluído
**Depende de:** Fase 1 (i18next configurado)
**Bloqueia:** —

---

## Objetivo

Substituir todos os textos hardcoded por chaves de tradução (`t('chave')`), e preencher os arquivos JSON para PT-BR, EN e FR.

---

## Checklist

### 4.1 Estrutura das chaves de tradução

Organização por seção/componente:

```
translation.json
├── nav              → Header
├── hero             → Hero
├── services         → Services
├── whyUs            → WhyUs
├── about            → About
├── contact          → Contact
├── footer           → Footer
└── common           → Termos reutilizados
```

---

### 4.2 Preencher translation.json — PT-BR

**Arquivo:** `public/locales/pt-BR/translation.json`

- [ ] Criar e preencher com todos os textos extraídos do código atual

```json
{
  "common": {
    "cta": "Solicitar Orçamento Grátis",
    "learnMore": "Saiba Mais",
    "send": "Enviar Mensagem",
    "sending": "Enviando...",
    "loading": "Carregando..."
  },
  "nav": {
    "services": "Serviços",
    "whyUs": "Por Que Nós",
    "about": "Sobre",
    "contact": "Contato",
    "cta": "Solicitar Orçamento"
  },
  "hero": {
    "badge": "Serviço de Limpeza Profissional",
    "title": "Limpeza Profissional para Sua Casa e Empresa",
    "subtitle": "Serviços de limpeza residencial e comercial com qualidade garantida, profissionais treinados e produtos de alta qualidade.",
    "cta": "Solicitar Orçamento Grátis",
    "secondary": "Conheça Nossos Serviços"
  },
  "services": {
    "badge": "O Que Oferecemos",
    "title": "Nossos Serviços",
    "subtitle": "Soluções completas de limpeza para qualquer ambiente",
    "residential": {
      "title": "Limpeza Residencial",
      "description": "Cuidamos da sua casa com atenção aos detalhes, usando produtos de qualidade para um ambiente limpo e saudável."
    },
    "commercial": {
      "title": "Limpeza Comercial",
      "description": "Mantemos seu espaço comercial impecável, garantindo um ambiente profissional para sua equipe e clientes."
    },
    "deep": {
      "title": "Faxina Completa",
      "description": "Limpeza profunda e detalhada para renovar completamente seu espaço, incluindo áreas de difícil acesso."
    }
  },
  "whyUs": {
    "badge": "Diferenciais",
    "title": "Por Que Escolher a LimpaPro?",
    "subtitle": "Comprometidos com excelência em cada detalhe",
    "trained": {
      "title": "Profissionais Treinados",
      "description": "Nossa equipe é altamente qualificada e passa por treinamentos contínuos."
    },
    "products": {
      "title": "Produtos de Qualidade",
      "description": "Utilizamos apenas produtos certificados, seguros para sua família e o meio ambiente."
    },
    "punctual": {
      "title": "Pontualidade Garantida",
      "description": "Respeitamos seu tempo e cumprimos os horários acordados com precisão."
    },
    "satisfaction": {
      "title": "Satisfação Garantida",
      "description": "Sua satisfação é nossa prioridade. Não ficou satisfeito? Refazemos sem custo."
    }
  },
  "about": {
    "badge": "Sobre Nós",
    "title": "Comprometidos com a Excelência",
    "p1": "A LimpaPro nasceu da paixão por ambientes limpos e organizados. Com mais de 10 anos de experiência, nos tornamos referência em limpeza profissional na região.",
    "p2": "Nossa missão é transformar espaços, proporcionando conforto e bem-estar para nossos clientes através de um serviço impecável e personalizado.",
    "items": {
      "experience": "Mais de 10 anos de experiência",
      "clients": "Mais de 500 clientes satisfeitos",
      "trained": "Equipe treinada e uniformizada",
      "products": "Produtos eco-friendly certificados"
    }
  },
  "contact": {
    "badge": "Fale Conosco",
    "title": "Entre em Contato",
    "subtitle": "Pronto para ter um ambiente impecável? Fale conosco e solicite seu orçamento sem compromisso.",
    "form": {
      "name": "Nome",
      "namePlaceholder": "Seu nome completo",
      "email": "Email",
      "emailPlaceholder": "seu@email.com",
      "phone": "Telefone",
      "phonePlaceholder": "(XX) XXXXX-XXXX",
      "service": "Tipo de Serviço",
      "servicePlaceholder": "Selecione o serviço",
      "message": "Mensagem",
      "messagePlaceholder": "Descreva o que você precisa...",
      "submit": "Enviar Mensagem",
      "submitting": "Enviando...",
      "services": {
        "residential": "Limpeza Residencial",
        "commercial": "Limpeza Comercial",
        "deep": "Faxina Completa"
      }
    },
    "info": {
      "title": "Nossas Informações",
      "address": "Rua São Joaquim, 240 - Santana, Piracicaba - SP, CEP 13411-515",
      "location": "Nossa Localização"
    },
    "toast": {
      "success": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      "error": "Ocorreu um erro ao enviar a mensagem. Tente novamente."
    }
  },
  "footer": {
    "tagline": "Limpeza profissional com qualidade e confiança.",
    "links": "Links Rápidos",
    "contact": "Contato",
    "rights": "© {{year}} LimpaPro. Todos os direitos reservados.",
    "social": {
      "whatsapp": "Fale no WhatsApp",
      "instagram": "Instagram",
      "facebook": "Facebook"
    }
  },
  "whatsapp": {
    "label": "Fale no WhatsApp",
    "message": "Olá! Gostaria de solicitar um orçamento de limpeza."
  },
  "theme": {
    "light": "Modo claro",
    "dark": "Modo escuro"
  },
  "lang": {
    "pt-BR": "Português",
    "en": "English",
    "fr": "Français"
  },
  "notFound": {
    "title": "Página não encontrada",
    "subtitle": "A página que você está procurando não existe.",
    "back": "Voltar ao Início"
  }
}
```

---

### 4.3 Preencher translation.json — EN

**Arquivo:** `public/locales/en/translation.json`

- [ ] Criar e preencher com tradução em inglês

```json
{
  "common": {
    "cta": "Get a Free Quote",
    "learnMore": "Learn More",
    "send": "Send Message",
    "sending": "Sending...",
    "loading": "Loading..."
  },
  "nav": {
    "services": "Services",
    "whyUs": "Why Us",
    "about": "About",
    "contact": "Contact",
    "cta": "Get a Quote"
  },
  "hero": {
    "badge": "Professional Cleaning Service",
    "title": "Professional Cleaning for Your Home and Business",
    "subtitle": "Residential and commercial cleaning services with guaranteed quality, trained professionals, and premium products.",
    "cta": "Get a Free Quote",
    "secondary": "Explore Our Services"
  },
  "services": {
    "badge": "What We Offer",
    "title": "Our Services",
    "subtitle": "Complete cleaning solutions for any environment",
    "residential": {
      "title": "Residential Cleaning",
      "description": "We care for your home with attention to detail, using quality products for a clean and healthy environment."
    },
    "commercial": {
      "title": "Commercial Cleaning",
      "description": "We keep your business space spotless, ensuring a professional environment for your team and clients."
    },
    "deep": {
      "title": "Deep Cleaning",
      "description": "Thorough and detailed cleaning to completely renew your space, including hard-to-reach areas."
    }
  },
  "whyUs": {
    "badge": "Our Differentials",
    "title": "Why Choose LimpaPro?",
    "subtitle": "Committed to excellence in every detail",
    "trained": {
      "title": "Trained Professionals",
      "description": "Our team is highly qualified and undergoes continuous training."
    },
    "products": {
      "title": "Quality Products",
      "description": "We use only certified products, safe for your family and the environment."
    },
    "punctual": {
      "title": "Guaranteed Punctuality",
      "description": "We respect your time and meet agreed schedules with precision."
    },
    "satisfaction": {
      "title": "Satisfaction Guaranteed",
      "description": "Your satisfaction is our priority. Not happy? We redo it at no cost."
    }
  },
  "about": {
    "badge": "About Us",
    "title": "Committed to Excellence",
    "p1": "LimpaPro was born from a passion for clean and organized environments. With over 10 years of experience, we have become a benchmark for professional cleaning in the region.",
    "p2": "Our mission is to transform spaces, providing comfort and well-being to our clients through impeccable and personalized service.",
    "items": {
      "experience": "Over 10 years of experience",
      "clients": "Over 500 satisfied clients",
      "trained": "Trained and uniformed team",
      "products": "Certified eco-friendly products"
    }
  },
  "contact": {
    "badge": "Get in Touch",
    "title": "Contact Us",
    "subtitle": "Ready for a spotless environment? Talk to us and request your no-commitment quote.",
    "form": {
      "name": "Name",
      "namePlaceholder": "Your full name",
      "email": "Email",
      "emailPlaceholder": "you@email.com",
      "phone": "Phone",
      "phonePlaceholder": "(XX) XXXXX-XXXX",
      "service": "Service Type",
      "servicePlaceholder": "Select a service",
      "message": "Message",
      "messagePlaceholder": "Describe what you need...",
      "submit": "Send Message",
      "submitting": "Sending...",
      "services": {
        "residential": "Residential Cleaning",
        "commercial": "Commercial Cleaning",
        "deep": "Deep Cleaning"
      }
    },
    "info": {
      "title": "Our Information",
      "address": "Rua São Joaquim, 240 - Santana, Piracicaba - SP, CEP 13411-515",
      "location": "Our Location"
    },
    "toast": {
      "success": "Message sent successfully! We will get in touch soon.",
      "error": "An error occurred while sending the message. Please try again."
    }
  },
  "footer": {
    "tagline": "Professional cleaning with quality and trust.",
    "links": "Quick Links",
    "contact": "Contact",
    "rights": "© {{year}} LimpaPro. All rights reserved.",
    "social": {
      "whatsapp": "Chat on WhatsApp",
      "instagram": "Instagram",
      "facebook": "Facebook"
    }
  },
  "whatsapp": {
    "label": "Chat on WhatsApp",
    "message": "Hello! I would like to request a cleaning quote."
  },
  "theme": {
    "light": "Light mode",
    "dark": "Dark mode"
  },
  "lang": {
    "pt-BR": "Português",
    "en": "English",
    "fr": "Français"
  },
  "notFound": {
    "title": "Page not found",
    "subtitle": "The page you are looking for does not exist.",
    "back": "Back to Home"
  }
}
```

---

### 4.4 Preencher translation.json — FR

**Arquivo:** `public/locales/fr/translation.json`

- [ ] Criar e preencher com tradução em francês

```json
{
  "common": {
    "cta": "Obtenir un Devis Gratuit",
    "learnMore": "En Savoir Plus",
    "send": "Envoyer le Message",
    "sending": "Envoi en cours...",
    "loading": "Chargement..."
  },
  "nav": {
    "services": "Services",
    "whyUs": "Pourquoi Nous",
    "about": "À Propos",
    "contact": "Contact",
    "cta": "Obtenir un Devis"
  },
  "hero": {
    "badge": "Service de Nettoyage Professionnel",
    "title": "Nettoyage Professionnel pour Votre Maison et Entreprise",
    "subtitle": "Services de nettoyage résidentiel et commercial avec qualité garantie, professionnels formés et produits haut de gamme.",
    "cta": "Obtenir un Devis Gratuit",
    "secondary": "Découvrir Nos Services"
  },
  "services": {
    "badge": "Ce Que Nous Offrons",
    "title": "Nos Services",
    "subtitle": "Solutions de nettoyage complètes pour tout type d'environnement",
    "residential": {
      "title": "Nettoyage Résidentiel",
      "description": "Nous prenons soin de votre maison avec une attention aux détails, en utilisant des produits de qualité pour un environnement propre et sain."
    },
    "commercial": {
      "title": "Nettoyage Commercial",
      "description": "Nous gardons votre espace commercial impeccable, assurant un environnement professionnel pour votre équipe et vos clients."
    },
    "deep": {
      "title": "Nettoyage en Profondeur",
      "description": "Nettoyage approfondi et détaillé pour renouveler complètement votre espace, y compris les zones difficiles d'accès."
    }
  },
  "whyUs": {
    "badge": "Nos Différences",
    "title": "Pourquoi Choisir LimpaPro ?",
    "subtitle": "Engagés pour l'excellence dans chaque détail",
    "trained": {
      "title": "Professionnels Formés",
      "description": "Notre équipe est hautement qualifiée et bénéficie de formations continues."
    },
    "products": {
      "title": "Produits de Qualité",
      "description": "Nous utilisons uniquement des produits certifiés, sûrs pour votre famille et l'environnement."
    },
    "punctual": {
      "title": "Ponctualité Garantie",
      "description": "Nous respectons votre temps et tenons les horaires convenus avec précision."
    },
    "satisfaction": {
      "title": "Satisfaction Garantie",
      "description": "Votre satisfaction est notre priorité. Pas satisfait ? Nous recommençons sans frais."
    }
  },
  "about": {
    "badge": "À Propos de Nous",
    "title": "Engagés pour l'Excellence",
    "p1": "LimpaPro est né de la passion pour les environnements propres et organisés. Avec plus de 10 ans d'expérience, nous sommes devenus une référence en nettoyage professionnel dans la région.",
    "p2": "Notre mission est de transformer les espaces, en offrant confort et bien-être à nos clients grâce à un service impeccable et personnalisé.",
    "items": {
      "experience": "Plus de 10 ans d'expérience",
      "clients": "Plus de 500 clients satisfaits",
      "trained": "Équipe formée et en uniforme",
      "products": "Produits éco-certifiés"
    }
  },
  "contact": {
    "badge": "Contactez-Nous",
    "title": "Prendre Contact",
    "subtitle": "Prêt pour un environnement impeccable ? Parlez-nous et demandez votre devis sans engagement.",
    "form": {
      "name": "Nom",
      "namePlaceholder": "Votre nom complet",
      "email": "Email",
      "emailPlaceholder": "vous@email.com",
      "phone": "Téléphone",
      "phonePlaceholder": "(XX) XXXXX-XXXX",
      "service": "Type de Service",
      "servicePlaceholder": "Sélectionnez un service",
      "message": "Message",
      "messagePlaceholder": "Décrivez ce dont vous avez besoin...",
      "submit": "Envoyer le Message",
      "submitting": "Envoi en cours...",
      "services": {
        "residential": "Nettoyage Résidentiel",
        "commercial": "Nettoyage Commercial",
        "deep": "Nettoyage en Profondeur"
      }
    },
    "info": {
      "title": "Nos Informations",
      "address": "Rua São Joaquim, 240 - Santana, Piracicaba - SP, CEP 13411-515",
      "location": "Notre Localisation"
    },
    "toast": {
      "success": "Message envoyé avec succès ! Nous vous contacterons bientôt.",
      "error": "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
    }
  },
  "footer": {
    "tagline": "Nettoyage professionnel avec qualité et confiance.",
    "links": "Liens Rapides",
    "contact": "Contact",
    "rights": "© {{year}} LimpaPro. Tous droits réservés.",
    "social": {
      "whatsapp": "Discuter sur WhatsApp",
      "instagram": "Instagram",
      "facebook": "Facebook"
    }
  },
  "whatsapp": {
    "label": "Discuter sur WhatsApp",
    "message": "Bonjour ! Je souhaite demander un devis de nettoyage."
  },
  "theme": {
    "light": "Mode clair",
    "dark": "Mode sombre"
  },
  "lang": {
    "pt-BR": "Português",
    "en": "English",
    "fr": "Français"
  },
  "notFound": {
    "title": "Page non trouvée",
    "subtitle": "La page que vous recherchez n'existe pas.",
    "back": "Retour à l'Accueil"
  }
}
```

---

### 4.5 Aplicar t() nos componentes

Para cada componente abaixo, substituir textos hardcoded por `t('chave')`:

- [ ] `Header.tsx` — links de nav, botão CTA
- [ ] `Hero.tsx` — badge, título, subtítulo, botões
- [ ] `Services.tsx` — badge, título, subtítulo, cards
- [ ] `WhyUs.tsx` — badge, título, subtítulo, features
- [ ] `About.tsx` — badge, título, parágrafos, lista
- [ ] `Contact.tsx` — todos os labels, placeholders, toasts
- [ ] `Footer.tsx` — tagline, links, copyright
- [ ] `WhatsAppButton.tsx` — label, mensagem pré-preenchida
- [ ] `NotFound.tsx` — título, subtítulo, botão

---

## Critérios de Conclusão

- [ ] Trocar idioma para EN: todos os textos mudam imediatamente
- [ ] Trocar idioma para FR: todos os textos mudam imediatamente
- [ ] Nenhum texto hardcoded restante nos componentes (exceto dados estáticos como endereço físico e telefone)
- [ ] Formulário de contato valida e exibe erros no idioma selecionado
- [ ] Preferência de idioma persiste ao recarregar a página
- [ ] Fallback para PT-BR se tradução estiver faltando em alguma chave
