export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Redirect www.work.poa.br to work.poa.br
    if (url.hostname === 'www.work.poa.br') {
      return Response.redirect(`https://work.poa.br${url.pathname}${url.search}`, 301);
    }
    
    // Get the asset from the environment
    return env.ASSETS.fetch(request);
  },
};
