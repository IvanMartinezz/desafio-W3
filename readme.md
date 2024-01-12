##Configuración

#### Construcción de Imágenes Docker

Para crear las imágenes del backend y la interfaz de usuario, ejecuta el siguiente comando:

    docker-compose build

Para iniciar los contenedores (base de datos, backend y ui) ejecuta el siguiente comando:

    docker-compose up

Para iniciar la base de datos, las tablas y sus migraciones ejecuta el siguiente comando:

    docker exec -it backend npx prisma migrate dev --name ini

Para iniciar la base de datos con sus datos (seeds) ejecuta el siguiente comando:

    docker exec -it backend npx prisma db seed

##Tests

#### Test backend

Para correr los tests del backend ejecuta el siguiente comando:

    docker exec -it backend npm run test

#### Test ui

Para probar los tests de la ui ejecuta el siguiente comando:

    docker exec -it ui npm run test

## Modo Desarrollo

#### Backend

Para ejecutar el backend en modo desarrollo, sigue estos pasos:

1. Ingresa a la carpeta `backend`:
   ```bash
   cd backend
   1. Instala todas las dependencias:
   npm install
   2. Inicia el proyecto en modo desarrollo
   npm run dev
   ```

#### Ui

Para ejecutar la ui en modo desarrollo, sigue estos pasos:

1. Ingresa a la carpeta `ui`:
   ```bash
   cd ui
   1. Instala todas las dependencias:
   npm install
   2. Inicia el proyecto en modo desarrollo
   npm run dev
   ```

> **¡Aviso Importante!**
>
> Para utilizar el modo desarrollo, es un requisito fundamental tener la base de datos ejecutándose en Docker. Si la base de datos no está en funcionamiento, el proceso podría fallar.
>
> Asegúrate de iniciar la base de datos antes de ejecutar la aplicación en modo desarrollo. Sigue las instrucciones proporcionadas en la sección de configuración del README para asegurar un entorno de desarrollo adecuado.
