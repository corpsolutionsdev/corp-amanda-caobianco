# 📷 Amanda Caobianco - Fotografia

Landing page moderna e elegante para serviços de fotografia profissional em Curitiba e região.

## 🎯 Sobre o Projeto

Site institucional desenvolvido para Amanda Caobianco Fotografia, especializada em ensaios de família e marca pessoal. O projeto apresenta uma interface moderna, responsiva e otimizada para conversão.

## ✨ Características

### Design
- Interface moderna e elegante
- Paleta de cores personalizada (#314528 e dourado)
- Fonte customizada Black Jack para títulos
- Layout totalmente responsivo
- Animações suaves e interativas

### Funcionalidades
- 📱 **Navegação Responsiva**: Menu hamburguer para mobile com drawer deslizante
- 🎨 **Hero Section**: Apresentação impactante com CTAs
- 🖼️ **Carrossel de Pacotes**: Navegação manual com scroll suave
- 🖼️ **Galeria de Portfólio**: 32 fotos com lightbox integrado
- 💬 **Integração WhatsApp**: Botão flutuante + links diretos com mensagens pré-definidas
- ⬆️ **Scroll to Top**: Botão para voltar ao topo
- 📧 **Links para Redes Sociais**: Instagram integrado

### Seções
1. **Home**: Hero com apresentação e CTAs
2. **Sobre Mim**: História e propósito
3. **Pacotes**: 4 opções de ensaios (Mini, Essencial, Completo, Premium)
4. **Informações**: Detalhes importantes sobre serviços
5. **Portfólio**: Galeria de trabalhos
6. **Contato**: WhatsApp e Instagram

## 🚀 Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Animações, Variáveis CSS
- **JavaScript**: Vanilla JS (sem frameworks)
- **Font Awesome**: Ícones
- **Google Fonts**: Cormorant Garamond e Montserrat

## 📦 Estrutura do Projeto

```
corp-amanda-caobianco/
├── index.html                 # Página principal
├── manifest.json             # PWA manifest
├── robots.txt                # SEO - Controle de crawlers
├── sitemap.xml               # SEO - Mapa do site
├── README.md                 # Documentação
├── LICENSE                   # Licença
└── src/
    ├── css/
    │   └── style.css         # Estilos principais
    ├── js/
    │   └── main.js           # Scripts JavaScript
    ├── fonts/
    │   └── blackjacj.ttf     # Fonte customizada
    └── img/
        ├── logo.png          # Logo
        ├── background.png    # Background hero
        ├── aboutme.webp      # Foto sobre mim
        └── portifolio/       # 32 fotos do portfólio
            └── portifolio*.webp
```

## 🎨 Paleta de Cores

- **Primary**: #314528 (Verde escuro elegante)
- **Secondary**: #ffffff (Branco)
- **Accent**: #d4af37 (Dourado)
- **Text Dark**: #2c2c2c
- **Text Light**: #666666
- **Background Light**: #f8f8f8

## 📱 Responsividade

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🔗 Links Importantes

- **WhatsApp**: +55 47 98461-7179
- **Instagram**: [@amandacft_](https://www.instagram.com/amandacft_/)

### Parcerias
- **Maquiagem**: [@carolmelo.beauty](https://www.instagram.com/carolmelo.beauty/)
- **Studio**: [@studiosoraiamiranda](https://www.instagram.com/studiosoraiamiranda/)

## ⚙️ Instalação e Uso

1. Clone o repositório:
```bash
git clone https://github.com/corpsolutionsdev/corp-amanda-caobianco.git
```

2. Abra o arquivo `index.html` no navegador

Ou utilize um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

3. Acesse: `http://localhost:8000`

## 🔧 Configuração

### Atualizar Informações de Contato

No arquivo `index.html`, procure e atualize:
- Links do WhatsApp (busque por `wa.me/5547984617179`)
- Link do Instagram (busque por `instagram.com/amandacft_`)

### Adicionar/Remover Fotos do Portfólio

1. Adicione imagens em `src/img/portifolio/`
2. Nomeie como: `portifolio1.webp`, `portifolio2.webp`, etc.
3. Atualize o número total em `src/js/main.js`:
```javascript
const totalImages = 32; // Altere este número
```

### Customizar Cores

No arquivo `src/css/style.css`, altere as variáveis CSS:
```css
:root {
    --primary-color: #314528;
    --secondary-color: #ffffff;
    --accent-gold: #d4af37;
    /* ... */
}
```

## 📊 SEO

- ✅ Meta tags configuradas
- ✅ Robots.txt otimizado
- ✅ Sitemap.xml incluído
- ✅ Manifest.json para PWA
- ✅ Favicon configurado
- ✅ Estrutura semântica HTML5
- ✅ Alt tags em imagens
- ✅ Performance otimizada

## 🌟 Features Técnicas

### Performance
- Lazy loading de imagens
- CSS e JS minificados prontos para produção
- Animações otimizadas com CSS
- Scroll suave nativo

### Acessibilidade
- Estrutura semântica
- Alt text em imagens
- Navegação por teclado
- Contraste adequado

### Browser Support
- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Mobile browsers

## 📄 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.

## 👨‍💻 Desenvolvido por

**Corp IT Solutions**
- Website: [corpitsolutions.tec.br](https://corpitsolutions.tec.br)

**Powered by VWTech Dev**
- Website: [vwtechdev.com.br](https://vwtechdev.com.br/)

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos websites acima.

---

**© 2025 Amanda Caobianco - Fotografia**  
**Desenvolvido por Corp IT Solutions | Powered by VWTech Dev**

