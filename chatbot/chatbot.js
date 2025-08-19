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
  "Muestra el símbolo (cruz y colores)"
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

function findAnswer(input) {
  const qn = normalize(input);
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

  return `No tengo una respuesta exacta todavía. Puedo hablar de Urku Yaya, el Padre Rumi, el Señor de Jerusalén, Patacorral y el propósito del proyecto.
Prueba con una de las sugerencias arriba.`;
}

function el(id) { return document.getElementById(id); }

function addMessage(role, text, isHtml = false) {
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
  if (isHtml) {
    bubble.innerHTML = text;
  } else {
    bubble.textContent = text;
  }
  wrap.appendChild(bubble);
  el('messages').appendChild(wrap);
  el('messages').scrollTop = el('messages').scrollHeight;
}

function renderSuggestions() {
  const bar = el('suggestions');
  bar.innerHTML = '';
  for (const s of suggestions) {
    const btn = document.createElement('button');
    btn.textContent = s;
    btn.addEventListener('click', () => {
      el('prompt').value = s;
      send();
    });
    bar.appendChild(btn);
  }
}

function send() {
  const input = el('prompt');
  const text = input.value.trim();
  if (!text) return;
  addMessage('user', text);
  input.value = '';

  // Simular respuesta
  setTimeout(() => {
    // Comando para mostrar imagen simbólica
    if (/^muestra el simbolo|muestra el símbolo|ver simbolo|ver símbolo/i.test(text)) {
      const imgHtml = `
        <figure style="margin:0;">
          <img src="./assets/simbolo-cruz-escalera.svg" alt="Símbolo: cruz-escalera y colores" style="max-width:100%;height:auto;border-radius:8px;border:1px solid #e5e7eb;" />
          <figcaption style="color:#6b7280;font-size:.9rem;margin-top:6px;">
            Cruz-escalera (unión cielo-tierra). Verde: campos; Azul: fe; Rojo: ancestros.
          </figcaption>
        </figure>`;
      addMessage('bot', imgHtml, true);
    } else {
      const ans = findAnswer(text);
      addMessage('bot', ans);
    }
  }, 300);
}

function init() {
  renderSuggestions();
  addMessage('bot', '¡Hola! Soy el bot comunitario. Puedo hablar de Urku Yaya, Padre Rumi, el Señor de Jerusalén, Patacorral y la Casa de los Abuelos.');
  el('send').addEventListener('click', send);
  el('prompt').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') send();
  });
}

document.addEventListener('DOMContentLoaded', init);
