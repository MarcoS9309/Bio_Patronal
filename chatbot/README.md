# Chatbot Comunitario (estático)

Un chatbot básico (HTML + JS) para guiar a visitantes sobre la comunidad de Jerusalén / Patacorral, basado en contenido de `Relato.md` y `El_relato_de_Mateo.md`.

## ✨ Características

- **🎯 Interfaz intuitiva** con sugerencias de preguntas predefinidas
- **⌨️ Navegación por teclado** completa para accesibilidad
- **📱 Diseño responsive** que se adapta a dispositivos móviles
- **🛡️ Seguridad** con sanitización de entrada y prevención XSS
- **🔄 Interactividad fluida** con transiciones y estados de carga
- **🗑️ Gestión de chat** con función de limpiar conversación

## 🎮 Controles y Atajos

### Atajos de Teclado
- **Ctrl+K**: Enfocar campo de entrada
- **Ctrl+L**: Limpiar chat completo
- **Enter**: Enviar mensaje
- **Escape**: Limpiar campo de entrada
- **↑/↓**: Navegar entre sugerencias y entrada
- **←/→**: Navegar entre botones de sugerencias

### Botones de Interfaz
- **🗑️ Limpiar**: Reinicia la conversación
- **Enviar**: Envía el mensaje escrito
- **Sugerencias**: Botones con preguntas predefinidas

## Estructura

- `index.html`: interfaz del chat (UI) lista para abrir en el navegador.
- `chatbot.js`: lógica simple basada en reglas y palabras clave.
- `assets/simbolo-cruz-escalera.svg`: símbolo visual de la comunidad.

## Cómo probar

- Opción rápida: abre `index.html` en tu navegador (doble clic o abrir con Live Server).
- Si usas un servidor estático, coloca la carpeta `chatbot/` y visita `http://localhost:PORT/chatbot/`.

## Personalización rápida

1. **Edita el archivo `chatbot.js`:**
   - Agrega o ajusta entradas en el arreglo `knowledge` (tags, `q`, `a`)
   - Cambia las preguntas sugeridas en `suggestions`
   - Personaliza las respuestas de fallback en la función `findAnswer`

2. **Ajusta estilos en `index.html`:**
   - Modifica las variables CSS en `:root` para cambiar colores
   - Ajusta el diseño responsive en las media queries
   - Personaliza las transiciones y efectos visuales

3. **Configuración de accesibilidad:**
   - Los atajos de teclado se pueden modificar en la función `init()`
   - Las etiquetas ARIA están configuradas para lectores de pantalla
   - El contraste de colores cumple con estándares de accesibilidad

## 🔧 Funciones Técnicas

### Seguridad
- Sanitización automática de entrada HTML
- Prevención de ataques XSS
- Validación de longitud de mensajes (máx. 1000 caracteres)
- Content Security Policy configurada

### Rendimiento
- Carga lazy de imágenes con fallback
- Transiciones CSS optimizadas
- Gestión eficiente del DOM
- Estados de carga para mejor experiencia

### Accesibilidad
- Navegación completa por teclado
- Etiquetas ARIA descriptivas
- Contraste de colores WCAG-compliant
- Soporte para lectores de pantalla

## Integración en tu futura página

- Copia el contenido de `chatbot/` dentro de tu proyecto web.
- O incrústalo en una página existente con un `<iframe src="/chatbot/index.html"></iframe>`.
- Para frameworks (React/Vue/Svelte), puedes empezar incrustando el HTML tal cual y migrar la lógica a componentes más adelante.

## Notas

- **Funcionamiento offline**: Este bot no usa servicios externos ni IA: funciona completamente offline con reglas simples
- **Base de conocimiento**: El conocimiento es un resumen de `Relato.md` y `El_relato_de_Mateo.md`. Actualízalo conforme tu contenido crezca
- **Cobertura de contenido**: Incluye preguntas sobre las cuatro historias principales: Urku Yaya, Padre Rumi, Señor de Jerusalén y Casa de los Abuelos
- **Mantenimiento**: Para actualizar respuestas, edita el arreglo `knowledge` en `chatbot.js`
- **Escalabilidad**: Fácilmente extensible para agregar más preguntas y respuestas
- **Compatibilidad**: Funciona en navegadores modernos con soporte para ES6+
