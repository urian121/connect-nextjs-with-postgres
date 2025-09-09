# Conexión Next.js con PostgreSQL

Este proyecto demuestra cómo conectar una aplicación Next.js con una base de datos PostgreSQL utilizando el paquete `pg`.

## Características

- Conexión a base de datos PostgreSQL
- Ejemplo de consulta a la tabla `tbl_usuarios`
- API endpoints para probar la conexión y consultar usuarios
- Configuración segura con variables de entorno (.env.local)

## Requisitos

- Node.js 14.0.0 o superior
- PostgreSQL instalado y en ejecución
- Variables de entorno configuradas en `.env.local`

## Configuración

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar las variables de entorno en `.env.local`:
   ```
   POSTGRES_URL=postgresql://usuario:contraseña@localhost:5432/nombre_bd
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

- `/api/test-connection`: Verifica la conexión a la base de datos
- `/api/usuarios`: Obtiene la lista de usuarios
