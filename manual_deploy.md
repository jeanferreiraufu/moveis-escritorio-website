# Manual de Deploy e Configuração

## 1. Pré-requisitos

### 1.1. Ferramentas Necessárias
- Node.js (versão 18 ou superior)
- npm ou pnpm
- Conta Google (para Firebase)
- Git (para controle de versão)

### 1.2. Configuração do Firebase
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative o Firebase Hosting
4. Instale o Firebase CLI: `npm install -g firebase-tools`
5. Faça login: `firebase login`

## 2. Deploy do Website

### 2.1. Preparação do Projeto
```bash
# Clone ou copie o projeto
cd moveis-escritorio-website

# Instale dependências
pnpm install

# Gere build de produção
pnpm run build
```

### 2.2. Configuração do Firebase
```bash
# Inicialize o Firebase no projeto
firebase init hosting

# Selecione o projeto criado
# Configure public directory como 'dist'
# Configure como single-page app: Yes
# Não sobrescreva index.html
```

### 2.3. Deploy
```bash
# Deploy para produção
firebase deploy --only hosting

# Para preview antes do deploy
firebase hosting:channel:deploy preview
```

## 3. Configuração de Domínio Customizado

### 3.1. Adicionar Domínio
1. No Firebase Console, vá para Hosting
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: moveisoffice.com.br)
4. Siga as instruções para verificação

### 3.2. Configuração DNS
Adicione os registros DNS fornecidos pelo Firebase:
- Tipo A: aponte para os IPs fornecidos
- Ou CNAME: aponte para o domínio Firebase fornecido

## 4. Integrações Futuras

### 4.1. Firebase Auth (Login Real)
```javascript
// Configuração no Firebase Console
// Authentication > Sign-in method
// Ative Google e Microsoft

// No código, substitua as funções simuladas:
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    setIsLoggedIn(true);
  } catch (error) {
    console.error('Erro no login:', error);
  }
};
```

### 4.2. Google Cloud Functions (Formulário)
```javascript
// functions/index.js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  // Configurar transporter de email
  // Enviar email com dados do formulário
  // Retornar resposta
});
```

### 4.3. Google Analytics
```html
<!-- Adicione no index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 5. Manutenção e Atualizações

### 5.1. Atualizações de Conteúdo
- Edite os arquivos em `src/`
- Execute `pnpm run build`
- Execute `firebase deploy --only hosting`

### 5.2. Backup
- Mantenha código no Git
- Faça backup regular do Firebase Console
- Documente todas as configurações

### 5.3. Monitoramento
- Configure alertas no Firebase Console
- Monitore métricas no Google Analytics
- Verifique logs de erro regularmente

## 6. Solução de Problemas

### 6.1. Problemas Comuns
**Build falha:** Verifique dependências e versões do Node.js
**Deploy falha:** Verifique permissões do Firebase e configuração
**Domínio não funciona:** Verifique configuração DNS e propagação

### 6.2. Contatos de Suporte
- Firebase Support: [Documentação oficial](https://firebase.google.com/docs)
- Comunidade: Stack Overflow com tag 'firebase'

## 7. Checklist de Deploy

- [ ] Projeto criado no Firebase Console
- [ ] Firebase CLI instalado e configurado
- [ ] Build de produção gerado
- [ ] Firebase Hosting configurado
- [ ] Deploy realizado com sucesso
- [ ] Domínio customizado configurado (se aplicável)
- [ ] SSL certificado ativo
- [ ] Google Analytics configurado (se aplicável)
- [ ] Testes finais realizados
- [ ] Backup do projeto criado

