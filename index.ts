const server = Bun.serve({
    port: process.env.PORT ?? 3000,
    async fetch(req) {
        const url = new URL(req.url);

        // Ruta principal
        if (url.pathname === "/") {
            return new Response("¡Bienvenido a mi API en Bun! 🚀\nPrueba ir a /api/usuarios");
        }

        // Ruta de ejemplo que devuelve JSON
        if (url.pathname === "/api/usuarios") {
            const users = [
                { id: 1, nombre: "Ariel", rol: "Admin" },
                { id: 2, nombre: "Visitante", rol: "Invitado" },
                { id: 3, nombre: "Bun", rol: "Servidor" }
            ];
            return Response.json(users);
        }

        // Manejo de error 404
        return new Response("Ruta no encontrada", { status: 404 });
    },
});

console.log(`El servidor está corriendo en http://localhost:${server.port}`);

