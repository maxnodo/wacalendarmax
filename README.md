# Calendario WhatsApp — OtroNodo

App web para visualizar y gestionar mensajes programados de WhatsApp en tiempo real.

## Stack
- **Frontend**: HTML + CSS + JS vanilla → desplegado en Netlify
- **Backend**: Supabase (Postgres + Edge Functions)
- **WhatsApp**: Evolution API via Edge Functions de Supabase

## Funcionalidades
- Calendario mensual con mensajes y tareas dinámicas
- Click en día → detalle de mensajes (enviados/pendientes/tareas)
- Formulario "+ Nuevo" con autocompletado de agenda de WhatsApp
- Modo manual si no encuentra el contacto
- Datos en tiempo real, se refresca cada 60 segundos
- Responsive (desktop y móvil)

## Colores
- Verde → mensaje enviado
- Amarillo → mensaje pendiente
- Púrpura → tarea dinámica

## Deploy
Conectar este repo a Netlify. Cada push a `main` hace deploy automático.

## Configuración
Las credenciales de Supabase están en `index.html`:
- `SB_URL` → URL del proyecto Supabase
- `SB_KEY` → anon key pública

## Supabase
- Proyecto: `azmurvcoiqbktxmevsga`
- Vista: `v_calendario` (mensajes + tareas unificados por día en zona Madrid)
- Edge Function: `search-contacts` (proxy para buscar contactos en Evolution API)
