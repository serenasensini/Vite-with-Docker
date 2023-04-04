# Vite-with-Docker

Esempio di applicazione Vite.js con Docker.

# Deploy

Clona il repository e poi esegui i seguenti comandi per avviare la build dell'immagine ed eseguire il container:

```
docker build -t vite-app .
docker run -d vite-app -p 5173:5173
```
