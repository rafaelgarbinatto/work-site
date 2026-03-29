# Configuração DNS e Redirect - Cloudflare

## Passo 1: Adicionar Custom Domains ao Cloudflare Pages

1. Acesse: https://dash.cloudflare.com
2. Vá em **Workers & Pages** → **workl-landing**
3. Clique na aba **Custom domains**
4. Clique em **Set up a custom domain**
5. Adicione os domínios:
   - `workpoa.br`
   - `www.work.poa.br`

## Passo 2: Configurar DNS

### Para o domínio work.poa.br:

1. No Dashboard da Cloudflare, selecione a zona **work.poa.br**
2. Vá em **DNS** → **Records**
3. Adicione/Verifique os seguintes registros:

#### Registro para www.work.poa.br:
- **Type**: `CNAME`
- **Name**: `www`
- **Target**: `work.poa.br`
- **Proxy status**: ✅ Proxied (ícone laranja)
- **TTL**: Auto

### Para o domínio workpoa.br (se for uma zona separada):

1. No Dashboard da Cloudflare, selecione a zona **workpoa.br**
2. Vá em **DNS** → **Records**
3. Adicione os seguintes registros:

#### Registro para workpoa.br (apex):
- **Type**: `CNAME`
- **Name**: `@`
- **Target**: `workl-landing.pages.dev`
- **Proxy status**: ✅ Proxied (ícone laranja)
- **TTL**: Auto

## Passo 3: Configurar Redirect Rule

1. No Dashboard da Cloudflare, selecione a zona **work.poa.br**
2. Vá em **Rules** → **Redirect Rules**
3. Clique em **Create rule**
4. Configure:

### Configuração da Regra:

**Rule name**: `Redirect www.work.poa.br to workpoa.br`

**When incoming requests match**:
- Field: `Hostname`
- Operator: `equals`
- Value: `www.work.poa.br`

**Then**:
- Type: `Dynamic`
- Expression: `concat("https://workpoa.br", http.request.uri.path)`
- Status code: `301` (Permanent Redirect)
- Preserve query string: ✅ Enabled

5. Clique em **Deploy**

## Alternativa: Usando Page Rules (se não tiver Redirect Rules)

1. Vá em **Rules** → **Page Rules**
2. Clique em **Create Page Rule**
3. Configure:
   - **URL**: `www.work.poa.br/*`
   - **Setting**: `Forwarding URL`
   - **Status Code**: `301 - Permanent Redirect`
   - **Destination URL**: `https://workpoa.br/$1`
4. Salve

## Verificação

Após configurar, teste com:

```bash
curl -I https://www.work.poa.br
```

Você deve ver:
```
HTTP/2 301
location: https://workpoa.br/
```

## Notas Importantes

- A propagação DNS pode levar até 24 horas, mas geralmente é instantânea com Cloudflare
- Certifique-se de que o Proxy está ativado (ícone laranja) para que os redirects funcionem
- O SSL/TLS deve estar configurado como "Full" ou "Full (strict)" em **SSL/TLS** → **Overview**
