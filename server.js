const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    // Serve static files from the dist/client directory
    const filePath = new URL(request.url).pathname;
    const staticFile = Bun.file(`./dist/client${filePath}`);
    
    if (await staticFile.exists()) {
      return new Response(staticFile);
    }

    // Handle SSR routes
    const { handler } = await import('./dist/server/entry.mjs');
    return handler(request);
  },
});

console.log(`Server running at http://localhost:${server.port}`); 