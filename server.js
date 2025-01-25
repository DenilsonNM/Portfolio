const http = require('http'); // Módulo nativo para crear servidores
const fs = require('fs'); // Módulo para leer archivos del sistema
const path = require('path'); // Módulo para manejar rutas de archivos

const PORT = 3000; // Puerto donde escuchará el servidor

// Crear el servidor
const server = http.createServer((req, res) => {
  // Definir el archivo que se debe servir según la URL solicitada
  let filePath = path.join(__dirname, 'docs', req.url === '/' ? 'index.html' : req.url);

  // Obtener la extensión del archivo solicitado
  const extname = path.extname(filePath);

  // Definir el tipo de contenido según la extensión del archivo
  let contentType = 'text/html';
  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
  }

  // Leer el archivo solicitado y enviarlo como respuesta
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Archivo no encontrado (404)
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Archivo no encontrado</h1>', 'utf-8');
      } else {
        // Otro error del servidor
        res.writeHead(500);
        res.end(`Error del servidor: ${err.code}`);
      }
    } else {
      // Archivo encontrado, enviar contenido
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
