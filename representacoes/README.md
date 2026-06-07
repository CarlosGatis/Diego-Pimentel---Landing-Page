# ðŸ“¦ Diego Pimentel â€” Embalagens Industriais

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsivo](https://img.shields.io/badge/Responsivo-Mobile%20First-2C7F92?style=for-the-badge)

**Landing page profissional para representacoes comercial de embalagens industriais.**

[ðŸŒ Ver site](#) &nbsp;Â·&nbsp; [ðŸ› Reportar bug](../../issues) &nbsp;Â·&nbsp; [âœ¨ Sugerir melhoria](../../issues)

</div>

---

## ðŸ“‹ Sobre o Projeto

Landing page desenvolvida para **Diego Pimentel**, representacoes comercial da **Cartonagem Batistense**, especialista em soluÃ§Ãµes de embalagens industriais em papel cartÃ£o e micro-ondulado desde 2012.

O objetivo da pÃ¡gina Ã© apresentar o perfil profissional, os serviÃ§os oferecidos, o portfÃ³lio de produtos e facilitar o contato com potenciais clientes industriais.

---

## âœ¨ Funcionalidades

- ðŸŽ¯ **Hero section** com badge de apresentaÃ§Ã£o e chamadas para aÃ§Ã£o
- ðŸ‘¤ **SeÃ§Ã£o Sobre** com foto e histÃ³rico profissional
- ðŸ”§ **Metodologia de trabalho** com cards descritivos
- ðŸ­ **ApresentaÃ§Ã£o da Cartonagem Batistense** com vÃ­deo incorporado
- ðŸ“¦ **PortfÃ³lio de produtos** com carrossel de imagens
- ðŸŽ¨ **OpÃ§Ãµes de mockup** com segundo carrossel
- âœ… **Vantagens do atendimento** com Ã­cones ilustrativos
- ðŸ“ž **SeÃ§Ã£o de contato** com links diretos para WhatsApp e E-mail
- ðŸ“ **LocalizaÃ§Ã£o** com endereÃ§os e mapa incorporado
- ðŸ“± **100% responsivo** para mobile, tablet e desktop

---

## ðŸš€ Recursos TÃ©cnicos

| Recurso | DescriÃ§Ã£o |
|---|---|
| **Fonte Inter** | Tipografia moderna via Google Fonts |
| **Scroll Reveal** | AnimaÃ§Ãµes de entrada ao rolar a pÃ¡gina |
| **Carrossel com Swipe** | Suporte a toque em dispositivos mÃ³veis |
| **Scroll Spy** | Menu ativo conforme a seÃ§Ã£o visÃ­vel |
| **Modal de imagem** | Zoom ao clicar nas fotos do portfÃ³lio |
| **Header dinÃ¢mico** | Sombra progressiva ao rolar |
| **Envio de lead** | IntegraÃ§Ã£o com FormSubmit (sem backend) |
| **Dot pattern** | Textura sutil no hero |
| **Eyebrow labels** | Labels de seÃ§Ã£o com design profissional |
| **Accent underlines** | TraÃ§o teal decorativo nos tÃ­tulos |

---

## ðŸ—‚ï¸ Estrutura de Arquivos

```
ðŸ“ representacoes/               â† raiz do repositÃ³rio
â”œâ”€â”€ ðŸ“„ index.html               # Estrutura principal da pÃ¡gina
â”œâ”€â”€ ðŸ“„ README.md
â”œâ”€â”€ ðŸ“ css/
â”‚   â””â”€â”€ ðŸŽ¨ style.css            # Estilos completos + responsivo
â”œâ”€â”€ ðŸ“ js/
â”‚   â”œâ”€â”€ âš™ï¸  script.js           # Modal, scroll reveal, header shadow
â”‚   â”œâ”€â”€ ðŸŽ  carousel.js          # Carrossel com suporte a swipe
â”‚   â”œâ”€â”€ ðŸ” scrollspy.js         # Destaque do menu ativo
â”‚   â”œâ”€â”€ ðŸ“‹ lead.js              # Envio de formulÃ¡rio via FormSubmit
â”‚   â””â”€â”€ ðŸ“Œ menu.js              # Fecha menu ao clicar em link
â””â”€â”€ ðŸ“ img/
    â”œâ”€â”€ ðŸ–¼ï¸  Logo.png
    â”œâ”€â”€ ðŸ–¼ï¸  sobre.jpg / sobre2.png
    â”œâ”€â”€ ðŸ“ galeria/              # Fotos do portfÃ³lio (1â€“34)
    â”œâ”€â”€ ðŸ“ markup/               # Imagens de mockup (1â€“17)
    â””â”€â”€ ðŸ“ icons/                # Ãcones das seÃ§Ãµes
```

---

## ðŸŽ¨ Identidade Visual

| Elemento | Valor |
|---|---|
| Cor principal | `#314C72` â€” Azul marinho |
| Cor de destaque | `#2C7F92` â€” Teal |
| Cor escura | `#4B4B4D` â€” Cinza chumbo |
| Fundo claro | `#f0f4f8` â€” Cinza azulado suave |
| Fonte | [Inter](https://fonts.google.com/specimen/Inter) â€” pesos 300 a 900 |

---

## ðŸ–¥ï¸ Como Usar Localmente

NÃ£o hÃ¡ dependÃªncias ou processo de build. Basta clonar e abrir:

```bash
# Clone o repositÃ³rio
git clone https://github.com/seu-usuario/representacoes.git

# Abra no navegador
cd representacoes
start index.html    # Windows
open index.html     # macOS
```

> Para ativar o envio de formulÃ¡rio, configure seu e-mail em `js/lead.js` na variÃ¡vel `EMAIL_TO`.

---

## ðŸŒ Deploy â€” GitHub Pages

O projeto estÃ¡ organizado para ser publicado via **GitHub Pages** e acessado pela URL:

```
https://seu-usuario.github.io/representacoes/
```

**Passo a passo:**

1. Crie um repositÃ³rio no GitHub com o nome exato **`representacoes`**
2. FaÃ§a o push da pasta `representacoes/` como raiz do repositÃ³rio:

```bash
cd representacoes
git init
git add .
git commit -m "feat: landing page Diego Pimentel"
git branch -M main
git remote add origin https://github.com/seu-usuario/representacoes.git
git push -u origin main
```

3. No GitHub, vÃ¡ em **Settings â†’ Pages**
4. Em *Source*, selecione **Deploy from a branch â†’ main â†’ / (root)**
5. Aguarde alguns minutos â€” o site estarÃ¡ disponÃ­vel em:

```
https://seu-usuario.github.io/representacoes/
```

---

## ðŸ“± Responsividade

| Breakpoint | Dispositivo alvo |
|---|---|
| `> 1024px` | Desktop |
| `â‰¤ 1024px` | Tablet largo |
| `â‰¤ 768px` | Tablet / Mobile |
| `â‰¤ 480px` | Mobile pequeno (iPhone SE, etc.) |

---

## ðŸ§© SeÃ§Ãµes da PÃ¡gina

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Header fixo â€” navegaÃ§Ã£o    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Hero â€” chamada principal   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Sobre â€” perfil profissionalâ”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Na PrÃ¡tica â€” metodologia   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Empresa â€” Cartonagem       â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Produtos â€” portfÃ³lio       â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Mockup â€” variaÃ§Ãµes visuais â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Vantagens â€” diferenciais   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Contato â€” WA + E-mail      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  LocalizaÃ§Ã£o â€” mapa         â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Footer                     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## ðŸ‘¨â€ðŸ’» Desenvolvido por

<div align="center">

**Carlos Gatis**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)

---

*Feito com ðŸ’™ para Diego Pimentel Â· Embalagens Industriais*

</div>

