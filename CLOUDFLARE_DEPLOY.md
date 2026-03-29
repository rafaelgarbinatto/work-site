# Deploy na Cloudflare Pages

Este guia explica como fazer deploy do projeto na Cloudflare Pages.

## Pré-requisitos

1. Conta na Cloudflare
2. Node.js 20+ instalado
3. Wrangler CLI (será instalado via npx)

## Configuração Inicial

### 1. Instalar Dependências

```bash
cd landing-page
npm install
```

### 2. Login na Cloudflare

```bash
npx wrangler login
```

Isso abrirá seu navegador para autenticar com sua conta Cloudflare.

## Deploy

### Opção 1: Deploy via CLI (Recomendado)

```bash
# Build e deploy em um comando
npm run pages:deploy

# Ou manualmente:
npm run build
npx wrangler pages deploy out --project-name=workl-landing
```

### Opção 2: Deploy Automático via Git

1. Faça push do código para GitHub/GitLab
2. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Vá em "Workers & Pages" > "Create application" > "Pages" > "Connect to Git"
4. Selecione seu repositório
5. Configure o build:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: `20`

## Variáveis de Ambiente

Se você tiver variáveis de ambiente, adicione-as no Cloudflare Dashboard:

1. Vá em "Workers & Pages" > Seu projeto
2. Clique em "Settings" > "Environment variables"
3. Adicione suas variáveis

## Comandos Disponíveis

- `npm run dev` - Desenvolvimento local com Next.js
- `npm run build` - Build de produção (gera pasta `out/`)
- `npm run pages:deploy` - Build e deploy para Cloudflare Pages

## Notas Importantes

- O projeto usa `output: 'export'` para gerar um site estático
- Imagens estão com `unoptimized: true` para compatibilidade
- O build gera arquivos na pasta `out/`
- A Cloudflare Pages serve sites estáticos nativamente
- Não é necessário usar adaptadores especiais

## Troubleshooting

### Erro de build

Se encontrar erros durante o build, verifique:
- Node.js versão 20 ou superior: `node -v`
- Todas as dependências instaladas: `npm install`
- Limpe o cache: `rm -rf .next out node_modules && npm install`

### Erro de deploy

- Verifique se está autenticado: `npx wrangler whoami`
- Confirme o nome do projeto no `wrangler.toml`
- Verifique se a pasta `out/` foi gerada: `ls -la out/`

### Página em branco após deploy

- Verifique se todas as rotas estão usando componentes client/server corretamente
- Confirme que não há APIs server-side (não suportadas em export estático)
- Verifique o console do navegador para erros

## Links Úteis

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
