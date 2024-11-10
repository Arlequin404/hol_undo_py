# Usa una imagen base de Node.js
FROM node:16

# Crea un directorio de trabajo
WORKDIR /app

# Copia el archivo de la aplicación
COPY app.js .

# Ejecuta el script
CMD ["node", "app.js"]
