# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo en la carpeta de la aplicación
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json package-lock.json /app/
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . /app/  

# Exponer el puerto en el que se ejecutará la aplicación (si es necesario)
# EXPOSE 3330


CMD ["node", "index.js"]
