# Chatbot Comunitario (estático)

Un chatbot básico (HTML + JS) para guiar a visitantes sobre la comunidad de Jerusalén / Patacorral, basado en contenido de `Introduccion.md`.

## Estructura

- `index.html`: interfaz del chat (UI) lista para abrir en el navegador.
- `chatbot.js`: lógica simple basada en reglas y palabras clave.

## Cómo probar

- Opción rápida: abre `index.html` en tu navegador (doble clic o abrir con Live Server).
- Si usas un servidor estático, coloca la carpeta `chatbot/` y visita `http://localhost:PORT/chatbot/`.

## Personalización rápida

1. Edita el archivo `chatbot.js`:
   - Agrega o ajusta entradas en el arreglo `knowledge` (tags, `q`, `a`).
   - Cambia las preguntas sugeridas en `suggestions`.
2. Ajusta estilos en `index.html` dentro de la etiqueta `<style>` si deseas otros colores o tipografías.

## Integración en tu futura página

- Copia el contenido de `chatbot/` dentro de tu proyecto web.
- O incrústalo en una página existente con un `<iframe src="/chatbot/index.html"></iframe>`.
- Para frameworks (React/Vue/Svelte), puedes empezar incrustando el HTML tal cual y migrar la lógica a componentes más adelante.

## Notas

- Este bot no usa servicios externos ni IA: funciona offline con reglas simples.
- El conocimiento es un resumen no exhaustivo de `Introduccion.md`. Actualízalo conforme tu contenido crezca.
