// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

console.log('🚀 Preparando build para Azion Edge...');

// Caminhos
const outDir = path.join(process.cwd(), 'out');
const azionDir = path.join(process.cwd(), 'azion');
const workerFile = path.join(azionDir, 'worker.js');

// Verificar se a pasta out existe
if (!fs.existsSync(outDir)) {
  console.error('❌ Pasta out não encontrada. Execute "npm run build" primeiro.');
  process.exit(1);
}

// Atualizar o worker.js com os arquivos reais
async function updateWorker() {
  try {
    // Ler o worker.js atual
    let workerContent = fs.readFileSync(workerFile, 'utf8');
    
    // Listar todos os arquivos na pasta out
    const files = getAllFiles(outDir);
    
    // Criar um mapeamento de arquivos com conteúdo
    const fileContents = {};
    files.forEach(file => {
      const relativePath = path.relative(outDir, file);
      const urlPath = '/' + relativePath.replace(/\\/g, '/');
      
      // Ler conteúdo do arquivo
      const stats = fs.statSync(file);
      if (stats.size < 500000) { // Apenas arquivos menores que 500KB
        const content = fs.readFileSync(file);
        fileContents[urlPath] = {
          data: content.toString('base64'),
          encoding: 'base64'
        };
      }
    });
    
    // Gerar nova função getFile com arquivos embutidos
    const newGetFileFunction = `
// Função para buscar arquivos - gerada automaticamente no build
async function getFile(pathname) {
  // Arquivos embutidos no worker
  const files = ${JSON.stringify(fileContents, null, 2)};
  
  if (files[pathname]) {
    const file = files[pathname];
    const buffer = Buffer.from(file.data, file.encoding);
    return {
      body: buffer,
    };
  }
  
  // Se não encontrar, retornar null
  return null;
}`;

    // Substituir a função getFile no worker
    workerContent = workerContent.replace(
      /\/\/ Função para buscar arquivos[\s\S]*?^}/m,
      newGetFileFunction
    );
    
    // Escrever o worker atualizado
    fs.writeFileSync(workerFile, workerContent);
    
    console.log('✅ Worker.js atualizado com sucesso!');
    console.log(`📁 ${files.length} arquivos processados`);
    console.log(`💾 ${Object.keys(fileContents).length} arquivos embutidos no worker`);
    
  } catch (error) {
    console.error('❌ Erro ao atualizar worker:', error);
    process.exit(1);
  }
}

// Função para listar todos os arquivos recursivamente
function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Executar
updateWorker();
