/**
 * ARCHIVO DE EVENTOS - COMUNIDAD DEL CAOS
 * -----------------------------------------
 * Aquí puedes añadir tus propias cartas.
 * Copia un bloque entre llaves { ... }, pégalo al final y cambia los textos.
 * * ESTRUCTURA:
 * {
 * title: "Título", 
 * emoji: "🤡", 
 * desc: "Descripción del problema.",
 * rare: true, // (Opcional) Si pones true, saldrá menos veces pero será más extremo.
 * options: [
 * { txt: "Botón 1", sub: "Texto pequeño", cost: -100 (dinero), pop: 10 (popularidad), sanity: -5 (cordura), msg: "Resultado" },
 * ...
 * ]
 * }
 */

const EVENTS_DB = [
    // --- EVENTOS NORMALES ---
    {
        title: "Granja Cripto", emoji: "💻",
        desc: "El hijo del 5º mina cripto. La luz se ha disparado.",
        options: [
            { txt: "Cortar cables", sub: "A lo bruto.", cost: 0, pop: 5, sanity: 10, msg: "Niño llorando, luz pagada." },
            { txt: "Comisión", sub: "Soborno.", cost: 0, money: 400, pop: -15, sanity: -5, msg: "Dinero sucio en tu bolsillo." },
            { txt: "Invertir", sub: "Riesgo.", cost: -500, pop: -10, sanity: -15, msg: "¡Crash! Perdiste todo." }
        ]
    },
    {
        title: "Tigre en el 1ºA", emoji: "🐯",
        desc: "Doña Rogelia dice que es un gato grande. Ruge mucho.",
        options: [
            { txt: "Llamar Zoo", sub: "Seguridad.", cost: 0, pop: 10, sanity: 0, msg: "Era un peluche gigante animatrónico." },
            { txt: "Cobrar Extra", sub: "Tasa mascota.", cost: 0, money: 200, pop: -20, sanity: -5, msg: "Pagó con billetes mordidos." },
            { txt: "Acariciar", sub: "Valiente.", cost: 0, pop: 5, sanity: -20, msg: "Casi pierdes la mano." }
        ]
    },
    {
        title: "Espuma Party", emoji: "🧼",
        desc: "Un youtuber llenó el ascensor de jabón.",
        options: [
            { txt: "Limpieza", sub: "-300€", cost: -300, pop: 10, sanity: 5, msg: "Limpio como una patena." },
            { txt: "Salir en vídeo", sub: "Fama.", cost: 0, money: 100, pop: -25, sanity: -10, msg: "Viral por ridículo." },
            { txt: "Ignorar", sub: "Ahorro.", cost: 0, pop: -30, sanity: -5, msg: "Todos resbalan." }
        ]
    },
    {
        title: "Catapulta 5G", emoji: "📡",
        desc: "El del ático ataca la antena con melones.",
        options: [
            { txt: "Confiscar", sub: "Fuerza.", cost: 0, pop: 5, sanity: -10, msg: "Te dio un melonazo." },
            { txt: "Psiquiátrico", sub: "Ayuda.", cost: -100, pop: 0, sanity: 10, msg: "Se lo llevaron." },
            { txt: "Unirse", sub: "Locura.", cost: -10, pop: -25, sanity: -25, msg: "Perdiste la cabeza." }
        ]
    },
    {
        title: "Batería a las 3AM", emoji: "🥁",
        desc: "El nieto del 2ºB ha formado una banda de Death Metal.",
        options: [
            { txt: "Unirse", sub: "Rock & Roll.", cost: 0, pop: -10, sanity: 15, msg: "Liberaste estrés gritando." },
            { txt: "Cortar Luz", sub: "Silencio.", cost: 0, pop: 5, sanity: 5, msg: "Se hizo el silencio, pero el vecino te odia." },
            { txt: "Insonorizar", sub: "-600€", cost: -600, pop: 20, sanity: 10, msg: "Paz absoluta y cara." }
        ]
    },
    {
        title: "Plaga Cucarachas", emoji: "🪳",
        desc: "Han salido de las alcantarillas. Parecen organizadas.",
        options: [
            { txt: "Lanzallamas", sub: "Fuego.", cost: -50, pop: -10, sanity: 10, msg: "Efectivo, pero quemaste el felpudo." },
            { txt: "Fumigar", sub: "-200€", cost: -200, pop: 10, sanity: 5, msg: "Problema resuelto profesionalmente." },
            { txt: "Negociar", sub: "Diplomacia.", cost: 0, pop: -20, sanity: -15, msg: "Ahora ellas pagan cuota de comunidad." }
        ]
    },
    {
        title: "Gotera Fantasma", emoji: "💧",
        desc: "Humedad con forma de cara en el 3º. Dicen que es un milagro.",
        options: [
            { txt: "Cobrar Entrada", sub: "Turismo.", cost: 0, money: 500, pop: -15, sanity: -5, msg: "Peregrinación de curiosos en la escalera." },
            { txt: "Pintar", sub: "-100€", cost: -100, pop: 5, sanity: 0, msg: "Adiós al milagro." },
            { txt: "Llamar Cura", sub: "Exorcismo.", cost: -50, pop: 0, sanity: 10, msg: "Bendijo la tubería." }
        ]
    },
    {
        title: "Vecino Nudista", emoji: "🍑",
        desc: "El del bajo toma el sol en el patio. Tal y como vino al mundo.",
        options: [
            { txt: "Multar", sub: "Decoro.", cost: 0, money: 100, pop: 5, sanity: 0, msg: "Se ha puesto un calcetín. Algo es algo." },
            { txt: "Unirse", sub: "Libertad.", cost: 0, pop: -20, sanity: 20, msg: "Moreno integral conseguido." },
            { txt: "Subir Muro", sub: "-300€", cost: -300, pop: 10, sanity: 5, msg: "Ojos que no ven..." }
        ]
    },
    
    // --- EVENTOS RAROS ---
    {
        title: "Mimos Okupas", emoji: "🤡", rare: true,
        desc: "Han levantado un muro invisible en el portal.",
        options: [
            { txt: "Seguridad", sub: "-400€", cost: -400, pop: 10, sanity: -10, msg: "Huyeron en silencio." },
            { txt: "Duelo Mímica", sub: "Reto.", cost: 0, pop: 25, sanity: -20, msg: "¡Ganaste! Se fueron llorando." },
            { txt: "Admirar", sub: "Arte.", cost: 0, pop: -20, sanity: 5, msg: "Ahora cobran entrada." }
        ]
    },
    {
        title: "Ruinas Romanas", emoji: "🏺", rare: true,
        desc: "Obras paradas. Han hallado un mosaico en el garaje.",
        options: [
            { txt: "Hormigón", sub: "Ocultar.", cost: -200, pop: 10, sanity: -15, msg: "El secreto está sellado." },
            { txt: "Vender", sub: "Mercado negro.", cost: 0, money: 1200, pop: -10, sanity: -20, msg: "Maldición antigua activada." },
            { txt: "Museo", sub: "Legal.", cost: 0, money: 0, pop: 30, sanity: 10, msg: "Edificio histórico. Orgullo." }
        ]
    },
    {
        title: "Portal Dimensional", emoji: "🌀", rare: true,
        desc: "Un vórtice morado ha aparecido en contadores.",
        options: [
            { txt: "Peaje", sub: "Aduana.", cost: 0, money: 600, pop: -10, sanity: -20, msg: "Cobras en monedas alienígenas." },
            { txt: "Tirar Basura", sub: "Reciclaje.", cost: 0, pop: 15, sanity: -10, msg: "El portal devolvió la basura enfadado." },
            { txt: "Entrar", sub: "¿Fin?", cost: 0, money: 200, pop: 0, sanity: -50, msg: "Viste el infinito. Encontraste 200€ allí." }
        ]
    },
    {
        title: "Meteorito", emoji: "☄️", rare: true,
        desc: "Ha caído una roca espacial en la piscina comunitaria.",
        options: [
            { txt: "Vender en eBay", sub: "Espacio.", cost: 0, money: 1000, pop: 0, sanity: 0, msg: "Era solo caca de avión congelada. Fraude." },
            { txt: "Adorar", sub: "Secta.", cost: 0, pop: -30, sanity: -30, msg: "La comunidad ahora es una secta." },
            { txt: "Limpiar", sub: "-150€", cost: -150, pop: 10, sanity: 5, msg: "Piscina operativa de nuevo." }
        ]
    }
];