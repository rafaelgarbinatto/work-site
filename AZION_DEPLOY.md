# 🚀 Deploy na Azion - Guia Completo

Este projeto está configurado para funcionar na Azion, uma plataforma de Edge Computing similar ao Cloudflare Workers, usando o **Azion CLI** para deploy automatizado.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta na Azion
- Azion CLI instalado e configurado

## 🔧 Instalação e Configuração

### 1. Instalar Azion CLI

```bash
# Instalação global
npm install -g azion

# Ou instalação local no projeto
npm install --save-dev azion
```

### 2. Login no Azion

```bash
azion login
```

Siga as instruções para autenticar com sua conta Azion.

### 3. Configurar Variáveis de Ambiente

Edite o arquivo `.azionrc` com suas credenciais:

```bash
# Configurações do Azion CLI
AZION_TOKEN=seu_token_aqui
AZION_ACCOUNT_ID=seu_account_id_aqui

# Configurações do projeto
PROJECT_NAME=workpoa-landing
ENVIRONMENT=production
```

## 🚀 Deploy Automatizado

### Deploy via NPM Scripts

```bash
# Deploy para produção
npm run deploy:azion:prod

# Deploy para desenvolvimento
npm run deploy:azion:dev

# Deploy para ambiente específico
npm run deploy:azion
```

### Deploy via Script Bash

```bash
# Deploy para produção (padrão)
./scripts/deploy-azion-cli.sh

# Deploy para desenvolvimento
./scripts/deploy-azion-cli.sh development

# Deploy para ambiente específico
./scripts/deploy-azion-cli.sh staging
```

### Deploy Manual via CLI

```bash
# Build do projeto
npm run build:azion

# Deploy via Azion CLI
azion deploy --env production
```

## 📁 Estrutura de Arquivos

```
landing-page/
├── azion/
│   ├── worker.js          # Worker principal (atualizado automaticamente)
│   ├── args.json          # Configurações do worker
│   └── azion.json         # Configuração da Azion (legado)
├── azion.json             # Configuração principal para Azion CLI
├── .azionrc               # Variáveis de ambiente do CLI
├── out/                   # Build estático (gerado)
├── scripts/
│   ├── postbuild-azion.js # Script de pós-build
│   └── deploy-azion-cli.sh # Script de deploy via CLI
└── azion.config.js        # Configurações do projeto (legado)
```

## ⚙️ Configurações Avançadas

### Configuração do Worker

O `worker.js` é atualizado automaticamente após cada build com:

- Mapeamento automático de todos os arquivos estáticos
- Fallback para SPA routing
- Headers de cache otimizados

### Configuração de Cache

Cache configurado para máxima performance:

```json
{
  "cache": {
    "browser_cache_settings": {
      "ttl": 31536000,
      "enable_active_invalidation": true
    }
  }
}
```

### Regras de Roteamento

Regras automáticas para:

1. **Arquivos Estáticos**: Cache agressivo para JS, CSS, imagens
2. **SPA Routing**: Fallback para index.html para rotas dinâmicas

## 🔍 Comandos Úteis do Azion CLI

### Verificar Status

```bash
# Status geral
azion status

# Status específico da aplicação
azion status --app workpoa-landing
```

### Logs

```bash
# Ver logs
azion logs

# Logs em tempo real
azion logs --follow

# Logs de erro
azion logs --level error
```

### Gerenciar Recursos

```bash
# Listar aplicações
azion apps

# Listar domínios
azion domains

# Listar funções
azion functions

# Listar buckets
azion buckets
```

### Configurações

```bash
# Ver configuração atual
azion config

# Configurar variáveis
azion config:set AZION_TOKEN=seu_token

# Listar variáveis configuradas
azion config:list
```

## 🚀 Fluxo de Deploy Completo

### 1. Build e Preparação

```bash
# Build completo para Azion
npm run build:azion
```

Este comando:
- ✅ Faz build do Next.js
- ✅ Exporta para pasta `out/`
- ✅ Atualiza o `worker.js` automaticamente
- ✅ Mapeia todos os arquivos estáticos

### 2. Deploy Automatizado

```bash
# Deploy para produção
npm run deploy:azion:prod
```

Este comando:
- ✅ Executa o build
- ✅ Faz deploy via Azion CLI
- ✅ Configura cache e regras
- ✅ Publica automaticamente

### 3. Verificação

```bash
# Verificar status
azion status

# Ver logs
azion logs --follow
```

## 🔍 Troubleshooting

### Problema: CLI não reconhecido

**Solução:**
```bash
# Reinstalar CLI
npm uninstall -g azion
npm install -g azion

# Ou usar versão local
npx azion --version
```

### Problema: Erro de autenticação

**Solução:**
```bash
# Fazer logout e login novamente
azion logout
azion login
```

### Problema: Build falha

**Solução:**
```bash
# Limpar e reinstalar
rm -rf node_modules out
npm install
npm run build:azion
```

### Problema: Deploy falha

**Solução:**
```bash
# Verificar logs
azion logs --level error

# Verificar status
azion status

# Tentar deploy novamente
azion deploy --env production
```

## 📚 Recursos Adicionais

- [Azion CLI Documentation](https://www.azion.com/en/documentation/products/azion-cli/)
- [Edge Functions Guide](https://www.azion.com/en/documentation/products/edge-functions/)
- [Next.js Edge Runtime](https://nextjs.org/docs/app/building-your-application/rendering/edge-runtime)

## 🆘 Suporte

### Verificar Logs

```bash
# Logs da aplicação
azion logs --app workpoa-landing

# Logs de erro
azion logs --level error --app workpoa-landing
```

### Status da Aplicação

```bash
# Status geral
azion status

# Status específico
azion status --app workpoa-landing
```

### Contato

- [Documentação Azion](https://www.azion.com/en/documentation/)
- [Suporte Azion](https://www.azion.com/en/support/)
- [Comunidade Azion](https://community.azion.com/)
