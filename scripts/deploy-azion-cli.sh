#!/bin/bash

# Script de Deploy para Azion usando CLI
# Uso: ./scripts/deploy-azion-cli.sh [environment]

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para log colorido
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    error "Execute este script do diretório raiz do projeto"
    exit 1
fi

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    error "Node.js não está instalado"
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    error "npm não está instalado"
    exit 1
fi

# Verificar se o Azion CLI está instalado
if ! command -v azion &> /dev/null; then
    error "Azion CLI não está instalado. Execute: npm install -g azion"
    exit 1
fi

# Verificar se está logado no Azion
if ! azion auth:status &> /dev/null; then
    error "Você não está logado no Azion. Execute: azion login"
    exit 1
fi

# Ambiente padrão
ENVIRONMENT=${1:-production}

log "🚀 Iniciando deploy para Azion (${ENVIRONMENT})..."

# Verificar variáveis de ambiente
if [ -f ".azionrc" ]; then
    source .azionrc
    log "Configurações carregadas do .azionrc"
else
    warn "Arquivo .azionrc não encontrado. Usando configurações padrão."
fi

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    log "Instalando dependências..."
    npm install
fi

# Limpar builds anteriores
if [ -d "out" ]; then
    log "Limpando build anterior..."
    rm -rf out
fi

# Build para Azion
log "Fazendo build para Azion..."
npm run build:azion

# Verificar se o build foi bem-sucedido
if [ ! -d "out" ]; then
    error "Build falhou - pasta 'out' não foi criada"
    exit 1
fi

# Verificar se o worker foi atualizado
if [ ! -f "azion/worker.js" ]; then
    error "Worker não foi criado/atualizado"
    exit 1
fi

# Contar arquivos gerados
FILE_COUNT=$(find out -type f | wc -l)
log "Build concluído com sucesso! $FILE_COUNT arquivos gerados"

# Verificar tamanho do build
BUILD_SIZE=$(du -sh out | cut -f1)
log "Tamanho do build: $BUILD_SIZE"

# Verificar se há arquivos críticos
CRITICAL_FILES=("index.html" "favicon.ico" "_next/static/")
for file in "${CRITICAL_FILES[@]}"; do
    if [ -e "out/$file" ]; then
        log "✅ $file encontrado"
    else
        warn "⚠️  $file não encontrado"
    fi
done

echo ""
log "🚀 Iniciando deploy via Azion CLI..."

# Deploy via Azion CLI
if [ "$ENVIRONMENT" = "development" ]; then
    log "Deployando para ambiente de desenvolvimento..."
    azion deploy --env development
elif [ "$ENVIRONMENT" = "production" ]; then
    log "Deployando para ambiente de produção..."
    azion deploy --env production
else
    log "Deployando para ambiente: $ENVIRONMENT"
    azion deploy --env "$ENVIRONMENT"
fi

# Verificar status do deploy
log "Verificando status do deploy..."
azion status

echo ""
log "🎉 Deploy concluído com sucesso!"
echo ""
log "Próximos passos:"
echo "1. Verifique o status na dashboard da Azion"
echo "2. Teste o site no domínio configurado"
echo "3. Verifique os logs se necessário"
echo ""
log "Comandos úteis:"
echo "  azion status                    - Ver status do deploy"
echo "  azion logs                      - Ver logs da aplicação"
echo "  azion domains                   - Listar domínios"
echo "  azion functions                 - Listar funções"
echo ""
log "Para ver logs em tempo real:"
echo "  azion logs --follow"
