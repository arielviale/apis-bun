const server = Bun.serve({
    port: process.env.PORT ?? 3000,
    async fetch(req) {
        return new Response("Api de Bun está funcionando correctamente!");
    },
});

console.log(`El servidor está corriendo en http://localhost:${server.port}`);

