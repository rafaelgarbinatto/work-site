# 🚀 Deploy Rápido na Cloudflare Pages

## Passo a Passo

### 1. Login na Cloudflare
```bash
npx wrangler login
```

### 2. Deploy
```bash
npm run pages:deploy
```

Ou manualmente:
```bash
npx wrangler pages deploy out --project-name=workl-landing
```

### 3. Acessar o site
Após o deploy, você receberá uma URL como:
- `https://workl-landing.pages.dev`

## Deploy via Git (Automático)

1. Faça push para GitHub/GitLab
2. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Workers & Pages > Create > Connect to Git
4. Selecione o repositório
5. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: `20`

## Domínio Customizado

No Cloudflare Dashboard:
1. Vá em seu projeto
2. Custom domains > Set up a custom domain
3. Adicione seu domínio (ex: work.poa.br)
4. Siga as instruções de DNS

## ✅ Projeto Pronto!

O build está funcionando perfeitamente. Todos os arquivos estáticos foram gerados na pasta `out/`.
