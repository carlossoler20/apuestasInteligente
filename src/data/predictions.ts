// ============================================================
// Datos de apuestas deportivas (registro de partidos)
// ------------------------------------------------------------
// Este archivo es la "fuente de datos" que alimentan los
// administradores desde /admin. Las cards del inicio y el
// historial de /results leen de aquí.
// ============================================================

export type Confianza = 'ALTA' | 'MEDIA' | 'BAJA';
export type ResultadoApuesta = 'ganada' | 'perdida' | 'pendiente';
export type NivelCard = 'destacado' | 'secundario' | 'terciario';

export interface Administrador {
  nombre: string;
  apodo: string; // p. ej. "@analista1" — se muestra como autor en las cards
}

/** Lista de administradores registrados. Añade tantos como necesites. */
export const administradores: Administrador[] = [
  { nombre: 'Carlos Méndez', apodo: '@carlosm' },
  { nombre: 'Laura Gómez', apodo: '@laurag' },
  { nombre: 'Andrés Ríos', apodo: '@andresr' },
];

export interface Apuesta {
  id: number;
  /** Apodo del administrador que registró la apuesta */
  admin: string;
  /** Nombre del equipo local */
  equipoLocal: string;
  /** Ruta del logo del equipo local (debe existir en public/assets/logosEquipos) */
  logoLocal: string;
  equipoVisitante: string;
  logoVisitante: string;
  liga: string;
  fecha: string; // ISO: AAAA-MM-DD
  hora: string; // "HH:MM"
  pronostico: string; // p. ej. "Más de 2.5 goles"
  tipoApuesta: string; // p. ej. "Over/Under"
  cuota: number;
  confianza: Confianza;
  nivel: NivelCard; // cómo se muestra en el inicio
  resultado: ResultadoApuesta;
  unidades: number; // stake en unidades (p. ej. 1, 2, 0.5)
  comentario: string;
}

/** Registro completo de apuestas. Edita/añade entradas desde /admin. */
export const apuestas: Apuesta[] = [
  // ---- Destacada (card principal del inicio) ----
  {
    id: 1,
    admin: '@carlosm',
    equipoLocal: 'Real Madrid',
    logoLocal: '/assets/logosEquipos/RM.png',
    equipoVisitante: 'Real Betis',
    logoVisitante: '/assets/logosEquipos/RB.png',
    liga: 'LaLiga',
    fecha: '2026-10-10',
    hora: '16:00',
    pronostico: 'Más de 2.5 goles',
    tipoApuesta: 'Over/Under',
    cuota: 1.85,
    confianza: 'ALTA',
    nivel: 'destacado',
    resultado: 'pendiente',
    unidades: 2,
    comentario:
      'Ambos equipos llegan con toda su ofensiva, se espera un partido con muchos goles.',
  },

  // ---- Secundarias ----
  {
    id: 2,
    admin: '@laurag',
    equipoLocal: 'Inter',
    logoLocal: '/assets/logosEquipos/inter.png',
    equipoVisitante: 'Napoli',
    logoVisitante: '/assets/logosEquipos/napoli.png',
    liga: 'Serie A',
    fecha: '2026-10-10',
    hora: '20:45',
    pronostico: 'Inter gana',
    tipoApuesta: 'Resultado (1X2)',
    cuota: 1.95,
    confianza: 'MEDIA',
    nivel: 'secundario',
    resultado: 'pendiente',
    unidades: 1,
    comentario: 'El Inter está invicto en casa esta temporada.',
  },
  {
    id: 3,
    admin: '@andresr',
    equipoLocal: 'Arsenal',
    logoLocal: '/assets/logosEquipos/arsenal.png',
    equipoVisitante: 'Chelsea',
    logoVisitante: '/assets/logosEquipos/chelsea.png',
    liga: 'Premier League',
    fecha: '2026-10-11',
    hora: '17:00',
    pronostico: 'Más de 1.5 goles',
    tipoApuesta: 'Over/Under',
    cuota: 1.4,
    confianza: 'ALTA',
    nivel: 'terciario',
    resultado: 'pendiente',
    unidades: 1.5,
    comentario: 'Los derbis londinenses casi siempre tienen goles.',
  },

  // ---- Historial cerrado (se ve en /results) ----
  {
    id: 4,
    admin: '@carlosm',
    equipoLocal: 'Real Madrid',
    logoLocal: '/assets/logosEquipos/RM.png',
    equipoVisitante: 'Barcelona',
    logoVisitante: '/assets/logosEquipos/RB.png',
    liga: 'LaLiga',
    fecha: '2026-09-20',
    hora: '18:15',
    pronostico: 'Ambos marcan: Sí',
    tipoApuesta: 'Ambos marcan',
    cuota: 1.72,
    confianza: 'ALTA',
    nivel: 'terciario',
    resultado: 'ganada',
    unidades: 2,
    comentario: 'Clásico con delanteros en racha.',
  },
  {
    id: 5,
    admin: '@laurag',
    equipoLocal: 'Inter',
    logoLocal: '/assets/logosEquipos/inter.png',
    equipoVisitante: 'Juventus',
    logoVisitante: '/assets/logosEquipos/napoli.png',
    liga: 'Serie A',
    fecha: '2026-09-15',
    hora: '20:45',
    pronostico: 'Menos de 2.5 goles',
    tipoApuesta: 'Over/Under',
    cuota: 1.65,
    confianza: 'MEDIA',
    nivel: 'terciario',
    resultado: 'perdida',
    unidades: 1,
    comentario: 'Derbi italiano cerrado… hasta el minuto 88.',
  },
  {
    id: 6,
    admin: '@andresr',
    equipoLocal: 'Arsenal',
    logoLocal: '/assets/logosEquipos/arsenal.png',
    equipoVisitante: 'Liverpool',
    logoVisitante: '/assets/logosEquipos/chelsea.png',
    liga: 'Premier League',
    fecha: '2026-09-08',
    hora: '17:30',
    pronostico: 'Arsenal no pierde',
    tipoApuesta: 'Doble oportunidad',
    cuota: 1.48,
    confianza: 'ALTA',
    nivel: 'secundario',
    resultado: 'ganada',
    unidades: 2,
    comentario: 'Los Gunners sólidos en casa.',
  },
  {
    id: 7,
    admin: '@carlosm',
    equipoLocal: 'Napoli',
    logoLocal: '/assets/logosEquipos/napoli.png',
    equipoVisitante: 'Milan',
    logoVisitante: '/assets/logosEquipos/inter.png',
    liga: 'Serie A',
    fecha: '2026-08-30',
    hora: '20:45',
    pronostico: 'Más de 2.5 goles',
    tipoApuesta: 'Over/Under',
    cuota: 1.9,
    confianza: 'MEDIA',
    nivel: 'terciario',
    resultado: 'ganada',
    unidades: 1,
    comentario: 'Partido abierto entre dos equipos ofensivos.',
  },
  {
    id: 8,
    admin: '@laurag',
    equipoLocal: 'Chelsea',
    logoLocal: '/assets/logosEquipos/chelsea.png',
    equipoVisitante: 'Tottenham',
    logoVisitante: '/assets/logosEquipos/arsenal.png',
    liga: 'Premier League',
    fecha: '2026-08-25',
    hora: '12:30',
    pronostico: 'Empate al descanso',
    tipoApuesta: 'Resultado medio tiempo',
    cuota: 2.1,
    confianza: 'BAJA',
    nivel: 'terciario',
    resultado: 'perdida',
    unidades: 0.5,
    comentario: 'Apuesta de valor con stake reducido.',
  },
];

// ============================================================
// Helpers
// ============================================================

const CONFIANZA_ORDEN: Record<Confianza, number> = { ALTA: 3, MEDIA: 2, BAJA: 1 };

/** Apuestas activas (pendientes) ordenadas por nivel y confianza. */
export function getApuestasActivas(): Apuesta[] {
  const ordenNivel: Record<NivelCard, number> = {
    destacado: 0,
    secundario: 1,
    terciario: 2,
  };
  return apuestas
    .filter((a) => a.resultado === 'pendiente')
    .sort(
      (a, b) =>
        ordenNivel[a.nivel] - ordenNivel[b.nivel] ||
        CONFIANZA_ORDEN[b.confianza] - CONFIANZA_ORDEN[a.confianza],
    );
}

/** Historial completo ordenado por fecha (más reciente primero). */
export function getHistorial(): Apuesta[] {
  return [...apuestas].sort((a, b) => (b.fecha + b.hora).localeCompare(a.fecha + a.hora));
}

/** Estadísticas de rendimiento general calculadas del historial cerrado. */
export function getRendimientoGeneral() {
  const cerradas = apuestas.filter((a) => a.resultado !== 'pendiente');
  const ganadas = cerradas.filter((a) => a.resultado === 'ganada');
  const perdidas = cerradas.filter((a) => a.resultado === 'perdida');

  const apostado = cerradas.reduce((acc, a) => acc + a.unidades, 0);
  const ganado = ganadas.reduce((acc, a) => acc + a.unidades * (a.cuota - 1), 0);
  const perdido = perdidas.reduce((acc, a) => acc + a.unidades, 0);
  const beneficio = ganado - perdido;

  const winRate = cerradas.length ? (ganadas.length / cerradas.length) * 100 : 0;
  const roi = apostado ? (beneficio / apostado) * 100 : 0;

  return {
    totalPronosticos: apuestas.length,
    cerradas: cerradas.length,
    ganadas: ganadas.length,
    perdidas: perdidas.length,
    pendientes: apuestas.length - cerradas.length,
    winRate,
    roi,
    beneficio,
  };
}

/** Formatea "2026-10-10" -> "10 Oct 2026" */
export function formatearFecha(iso: string): string {
  const meses = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
  ];
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${meses[m - 1]} ${y}`;
}
