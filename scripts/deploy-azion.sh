#!/bin/bash

# Script de Deploy para Azion
# Uso: ./scripts/deploy-azion.sh

set -e

echo "🚀 Iniciando deploy para Azion..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
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

# Listar arquivos principais
log "Arquivos principais gerados:"
ls -la out/ | head -10

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
log "🎉 Deploy preparado com sucesso!"
echo ""
log "Próximos passos:"
echo "1. Faça upload da pasta 'out/' para o bucket da Azion"
echo "2. Configure a Edge Function com o arquivo 'azion/worker.js'"
echo "3. Configure o domínio e regras de roteamento"
echo "4. Teste o site"
echo ""
log "Arquivos importantes:"
echo "  📁 out/                    - Build estático"
echo "  📄 azion/worker.js         - Worker atualizado"
echo "  📄 azion/args.json         - Configurações do worker"
echo "  📄 azion/azion.json        - Configuração da Azion"
echo ""
log "Para testar localmente:"
echo "  npm run start"
