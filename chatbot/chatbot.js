// Chatbot comunitario sencillo basado en reglas
// Fuente de conocimiento: resumida desde Introduccion.md

const knowledge = [
  {
    tags: ["urku", "yaya", "abuelo de la montaña", "cazador", "aro"],
    q: "¿Quién es el Urku Yaya?",
    a: `El "Urku Yaya" es el Abuelo de la Montaña: un cazador solitario y mítico.
Se cuenta que descendía al pueblo cuando el maíz doraba y ofrecía un aro a la doncella elegida.
Es custodio de los colores sagrados, del amor que trasciende y de los misterios del monte.`
  },
  {
    tags: ["aro", "misterioso", "doncella", "diamante", "oro"],
    q: "¿Qué es el aro misterioso?",
    a: `Cada año, el Urku Yaya ofrecía un aro a la doncella más bella.
Unos decían que era de oro, otros de diamante, y para algunos era una promesa del alma.
Su significado es un pacto y un destino que nadie conoce del todo.`
  },
  {
    tags: ["abuelo", "testimonio", "bendición", "arrayanes", "retamas"],
    q: "¿Qué contó el abuelo sobre el Urku Yaya?",
    a: `El abuelo dijo haberlo visto llorar: de sus lágrimas nacieron arrayanes y retamas.
También contó que su bendición unió a los abuelos del narrador.`
  },
  {
    tags: ["padre rumi", "piedra", "centro ceremonial", "símbolos"],
    q: "¿Quién es el Padre Rumi?",
    a: `El Padre Rumi representa la memoria ancestral de la piedra, el silencio del que todo nace.
Las rocas guardan símbolos y ecos de antiguos rituales y ceremonias.`
  },
  {
    tags: ["señor de jerusalén", "parroquia", "patacorral", "apareció", "vertiente"],
    q: "¿Quién es el Señor de Jerusalén y qué pasó en Patacorral?",
    a: `La devoción al Señor de Jerusalén brota en Patacorral. La parroquia "Jerusalén" tomó su nombre del pueblo.
Una memoria cuenta que la imagen fue hallada junto a una vertiente y volvió allí por sí misma, señalando su hogar.`
  },
  {
    tags: [
      "señor de jerusalén", "origen", "devoción", "milagro", "lluvia",
      "piedra", "juan", "manuel", "san pedro", "león", "cruz", "colores"
    ],
    q: "¿Cómo nació la devoción al Señor de Jerusalén?",
    a: `En tiempos de sequía, Juan encontró una piedra con forma de cabeza y corazón, con colores vivos.
Manuel la reconoció como el Señor de Jerusalén; el pueblo oró pidiendo que la fe fuese la "llave", como San Pedro abre el cielo.
Entonces llovió con fuerza. León interpretó la cruz pintada como una escalera entre tierra y cielo, y los colores: verde (campos), azul (fe) y rojo (ancestros).
Desde entonces, la piedra se volvió centro espiritual: allí el cielo y la tierra se abrazan, y la comunidad arraigó su devoción.`
  },
  {
    tags: ["patacorral", "significado", "pata", "corral", "quichua"],
    q: "¿Qué significa Patacorral?",
    a: `Patacorral combina quichua y castellano: "pata" (al pie) y "corral".
Es el caserío acurrucado al pie de la loma, raíz de mucha devoción comunitaria.`
  },
  {
    tags: ["proyecto", "propósito", "memoria", "blog", "viaje"],
    q: "¿Cuál es el propósito de este proyecto?",
    a: `No es solo un blog: es el umbral de un viaje y una reinterpretación de las leyendas.
Busca dialogar con la ancestralidad y honrar la memoria de los mayores.`
  }
  ,
  {
    tags: [
      "casa de los abuelos", "biblián", "bahareque", "madera", "zancos",
      "abuelo manuel", "raíces", "ancla", "colinas"
    ],
    q: "¿Qué es la Casa de los Abuelos?",
    a: `Es una casa antigua en las colinas de Biblián, levantada sobre zancos de madera.
Hecha de bahareque y madera, construida por el abuelo Manuel. Para Mateo no es solo una estructura: es el ancla y la raíz de su familia.`
  },
  {
    tags: [
      "mateo", "restaurar", "techo", "paredes", "tablas", "fogón", "mote",
      "raíces", "memoria"
    ],
    q: "¿Por qué Mateo quiere salvar la Casa de los Abuelos?",
    a: `Porque allí habitan su memoria y sus raíces: el fogón, la lluvia en las tejas, las risas de infancia.
Decide arreglar techo, reforzar paredes y cambiar tablas, como hizo el abuelo: no es una ruina, es una raíz que no debe olvidarse.`
  },
  {
    tags: [
      "ayuda", "comandos", "como", "usar", "bot", "chatbot", "guía", "instrucciones"
    ],
    q: "¿Cómo usar este chatbot?",
    a: `¡Hola! Puedes preguntarme sobre las leyendas y tradiciones de Jerusalén/Patacorral.

🔍 **Formas de preguntar:**
• Haz clic en los botones de sugerencias
• Escribe preguntas como "¿Quién es...?" o "¿Qué significa...?"
• Usa "Muestra el símbolo" para ver el símbolo cultural

⌨️ **Atajos de teclado:**
• Ctrl+K: Enfocar entrada
• Ctrl+L: Limpiar chat
• Flechas: Navegar sugerencias
• Esc: Limpiar entrada

📚 **Temas disponibles:**
• Urku Yaya (Abuelo de la Montaña)
• Padre Rumi (memoria ancestral)
• Señor de Jerusalén (devoción comunitaria)
• Casa de los Abuelos (historia de Mateo)
• Propósito del proyecto`
  }
];

const suggestions = [
  "¿Quién es el Urku Yaya?",
  "¿Qué es el aro misterioso?",
  "¿Quién es el Padre Rumi?",
  "¿Quién es el Señor de Jerusalén y qué pasó en Patacorral?",
  "¿Cómo nació la devoción al Señor de Jerusalén?",
  "¿Qué significa Patacorral?",
  "¿Cuál es el propósito de este proyecto?",
  "¿Qué es la Casa de los Abuelos?",
  "¿Por qué Mateo quiere salvar la Casa de los Abuelos?",
  "Muestra el símbolo (cruz y colores)",
  "¿Cómo usar este chatbot?"
];

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}+/gu, '')
    .replace(/[^a-z0-9\sáéíóúüñ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function sanitizeInput(input) {
  // Remove any potentially dangerous characters
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .trim();
}

function findAnswer(input) {
  // Sanitize input before processing
  const sanitizedInput = sanitizeInput(input);
  const qn = normalize(sanitizedInput);
  
  // Match by tag presence and simple keyword score
  let best = { score: 0, item: null };
  for (const item of knowledge) {
    const score = item.tags.reduce((s, t) => (qn.includes(normalize(t)) ? s + 1 : s), 0);
    if (score > best.score) best = { score, item };
  }
  if (best.item && best.score > 0) return best.item.a;

  // Fallback: try fuzzy contains by Q text
  for (const item of knowledge) {
    if (qn.includes(normalize(item.q))) return item.a;
  }

  return `🤔 No tengo una respuesta exacta para esa pregunta todavía.

📚 **Puedo ayudarte con:**
• Urku Yaya (Abuelo de la Montaña)
• Padre Rumi (memoria ancestral de la piedra)
• Señor de Jerusalén (devoción comunitaria)
• Patacorral (significado del nombre)
• Casa de los Abuelos (historia de Mateo)
• Propósito del proyecto

💡 **Sugerencias:**
• Usa las preguntas de arriba
• Pregunta "¿Cómo usar este chatbot?" para más ayuda
• Intenta reformular tu pregunta con palabras clave como "Urku Yaya", "Señor de Jerusalén", etc.`;
}

function el(id) { return document.getElementById(id); }

// Sanitize HTML content to prevent XSS attacks
function sanitizeHtml(html) {
  const tempDiv = document.createElement('div');
  tempDiv.textContent = html;
  return tempDiv.innerHTML;
}

// Safe function to create image element for symbol display
function createSymbolImage() {
  const figure = document.createElement('figure');
  figure.style.margin = '0';
  
  const img = document.createElement('img');
  img.src = './assets/simbolo-cruz-escalera.svg';
  img.alt = 'Símbolo: cruz-escalera y colores';
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
  img.style.borderRadius = '8px';
  img.style.border = '1px solid #e5e7eb';
  
  // Add error handling for image loading
  img.addEventListener('error', () => {
    figure.innerHTML = `
      <div style="padding: 20px; text-align: center; background: #f3f4f6; border-radius: 8px; border: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #6b7280;">⚠️ No se pudo cargar la imagen del símbolo</p>
        <p style="margin: 8px 0 0 0; font-size: 0.9em; color: #9ca3af;">Cruz-escalera: unión cielo-tierra</p>
      </div>
    `;
  });
  
  // Add loading state
  img.addEventListener('load', () => {
    img.style.opacity = '1';
  });
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.3s ease';
  
  const figcaption = document.createElement('figcaption');
  figcaption.style.color = '#6b7280';
  figcaption.style.fontSize = '.9rem';
  figcaption.style.marginTop = '6px';
  figcaption.textContent = 'Cruz-escalera (unión cielo-tierra). Verde: campos; Azul: fe; Rojo: ancestros.';
  
  figure.appendChild(img);
  figure.appendChild(figcaption);
  return figure;
}

function addMessage(role, text, isSymbol = false) {
  const wrap = document.createElement('div');
  wrap.className = `msg ${role}`;
  if (role === 'bot') {
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    wrap.appendChild(avatar);
  } else {
    const spacer = document.createElement('div');
    spacer.style.width = '28px';
    spacer.style.height = '28px';
    spacer.style.flex = '0 0 auto';
    wrap.appendChild(spacer);
  }
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  
  if (isSymbol) {
    // Safely append the symbol image
    bubble.appendChild(createSymbolImage());
  } else {
    // Always use textContent to prevent XSS
    bubble.textContent = text;
  }
  
  wrap.appendChild(bubble);
  el('messages').appendChild(wrap);
  el('messages').scrollTop = el('messages').scrollHeight;
  
  // Return the wrapper element for potential removal (loading states)
  return wrap;
}

function renderSuggestions() {
  const bar = el('suggestions');
  bar.innerHTML = '';
  for (let i = 0; i < suggestions.length; i++) {
    const s = suggestions[i];
    const btn = document.createElement('button');
    btn.textContent = s;
    btn.type = 'button';
    btn.setAttribute('aria-label', `Seleccionar pregunta: ${s}`);
    btn.addEventListener('click', () => {
      el('prompt').value = s;
      send();
    });
    // Add keyboard navigation support
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' && i < suggestions.length - 1) {
        bar.children[i + 1].focus();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' && i > 0) {
        bar.children[i - 1].focus();
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        el('prompt').focus();
        e.preventDefault();
      }
    });
    bar.appendChild(btn);
  }
}

function send() {
  const input = el('prompt');
  const text = input.value.trim();
  
  // Input validation: limit length and check for potentially dangerous content
  if (!text) return;
  if (text.length > 1000) {
    addMessage('bot', 'Por favor, escribe una pregunta más corta (máximo 1000 caracteres).');
    return;
  }
  
  // Disable send button temporarily to prevent spam
  const sendBtn = el('send');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Enviando...';
  
  addMessage('user', text);
  input.value = '';

  // Add loading indicator
  const loadingMsg = addMessage('bot', '⏳ Pensando...');

  // Simular respuesta
  setTimeout(() => {
    // Remove loading message
    if (loadingMsg && loadingMsg.parentNode) {
      loadingMsg.parentNode.removeChild(loadingMsg);
    }
    
    // Re-enable send button
    sendBtn.disabled = false;
    sendBtn.textContent = 'Enviar';
    
    // Comando para mostrar imagen simbólica
    if (/^muestra el simbolo|muestra el símbolo|ver simbolo|ver símbolo/i.test(text)) {
      addMessage('bot', '', true); // true indicates symbol display
    } else {
      const ans = findAnswer(text);
      addMessage('bot', ans);
    }
    
    // Focus back to input for convenience
    input.focus();
  }, 300);
}

function init() {
  renderSuggestions();
  addMessage('bot', '¡Hola! Soy el bot comunitario. Puedo hablar de Urku Yaya, Padre Rumi, el Señor de Jerusalén, Patacorral y la Casa de los Abuelos.');
  
  // Add event listeners
  el('send').addEventListener('click', send);
  el('clear').addEventListener('click', clearChat);
  
  el('prompt').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      send();
    } else if (e.key === 'ArrowUp') {
      // Focus on last suggestion button
      const suggestions = el('suggestions').children;
      if (suggestions.length > 0) {
        suggestions[suggestions.length - 1].focus();
        e.preventDefault();
      }
    } else if (e.key === 'Escape') {
      // Clear input
      el('prompt').value = '';
      e.preventDefault();
    }
  });
  
  // Add global keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      el('prompt').focus();
    }
    // Ctrl/Cmd + L to clear chat
    else if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
      e.preventDefault();
      clearChat();
    }
  });
  
  // Focus input initially
  el('prompt').focus();
}

// Add function to clear chat
function clearChat() {
  const messages = el('messages');
  messages.innerHTML = '';
  addMessage('bot', '¡Hola! Soy el bot comunitario. Puedo hablar de Urku Yaya, Padre Rumi, el Señor de Jerusalén, Patacorral y la Casa de los Abuelos.');
}

document.addEventListener('DOMContentLoaded', init);
