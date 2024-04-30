import { calcularPorcentaje, calcularPorcentajeSinLimite } from './progress.js'

export async function UnificarDatosYumbo (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.ASTRO,
    aspiracionDia: data?.PROMEDIO_DIARIO_ASTRO,
    porcentaje: calcularPorcentaje(data?.ASTRO, data?.PROMEDIO_DIARIO_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data?.ASTRO, data?.PROMEDIO_DIARIO_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 & 3 Cifras',
    ventaActual: data?.CHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHANCE,
    porcentaje: calcularPorcentaje(data?.CHANCE, data?.PROMEDIO_DIARIO_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.CHANCE, data?.PROMEDIO_DIARIO_CHANCE)
  }

  const PAGAMAS = {
    id: 3,
    producto: 'Pagamas',
    ventaActual: data?.PAGAMAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_PAGAMAS,
    porcentaje: calcularPorcentaje(data?.PAGAMAS, data?.PROMEDIO_DIARIO_PAGAMAS),
    porcentaje2: calcularPorcentajeSinLimite(data?.PAGAMAS, data?.PROMEDIO_DIARIO_PAGAMAS)
  }

  const PAGATODO = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.PAGATODO,
    aspiracionDia: data?.PROMEDIO_DIARIO_PAGATODO,
    porcentaje: calcularPorcentaje(data?.PAGATODO, data?.PROMEDIO_DIARIO_PAGATODO),
    porcentaje2: calcularPorcentajeSinLimite(data?.PAGATODO, data?.PROMEDIO_DIARIO_PAGATODO)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.GANE5,
    aspiracionDia: data?.PROMEDIO_DIARIO_GANE5,
    porcentaje: calcularPorcentaje(data?.GANE5, data?.PROMEDIO_DIARIO_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data?.GANE5, data?.PROMEDIO_DIARIO_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.PATA_MILLONARIA,
    aspiracionDia: data?.PROMEDIO_DIARIO_PATAMI,
    porcentaje: calcularPorcentaje(data?.PATA_MILLONARIA, data?.PROMEDIO_DIARIO_PATAMI),
    porcentaje2: calcularPorcentajeSinLimite(data?.PATA_MILLONARIA, data?.PROMEDIO_DIARIO_PATAMI)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.DOBLECHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data?.DOBLECHANCE, data?.PROMEDIO_DIARIO_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.DOBLECHANCE, data?.PROMEDIO_DIARIO_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.CHANCE_MILLONARIO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHMILL,
    porcentaje: calcularPorcentaje(data?.CHANCE_MILLONARIO, data?.PROMEDIO_DIARIO_CHMILL),
    porcentaje2: calcularPorcentajeSinLimite(data?.CHANCE_MILLONARIO, data?.PROMEDIO_DIARIO_CHMILL)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.LOTERIA_FISICA,
    aspiracionDia: data?.PROMEDIO_DIARIO_LF,
    porcentaje: calcularPorcentaje(data?.LOTERIA_FISICA, data?.PROMEDIO_DIARIO_LF),
    porcentaje2: calcularPorcentajeSinLimite(data?.LOTERIA_FISICA, data?.PROMEDIO_DIARIO_LF)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.LOTERIA_VIRTUAL,
    aspiracionDia: data?.PROMEDIO_DIARIO_LV,
    porcentaje: calcularPorcentaje(data?.LOTERIA_VIRTUAL, data?.PROMEDIO_DIARIO_LV),
    porcentaje2: calcularPorcentajeSinLimite(data?.LOTERIA_VIRTUAL, data?.PROMEDIO_DIARIO_LV)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.BETPLAY,
    aspiracionDia: data?.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: calcularPorcentaje(data?.BETPLAY, data?.PROMEDIO_DIARIO_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data?.BETPLAY, data?.PROMEDIO_DIARIO_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.GIROS,
    aspiracionDia: data?.PROMEDIO_DIARIO_GIROS,
    porcentaje: calcularPorcentaje(data?.GIROS, data?.PROMEDIO_DIARIO_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data?.GIROS, data?.PROMEDIO_DIARIO_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.SOAT,
    aspiracionDia: data?.PROMEDIO_DIARIO_SOAT,
    porcentaje: calcularPorcentaje(data?.SOAT, data?.PROMEDIO_DIARIO_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data?.SOAT, data?.PROMEDIO_DIARIO_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.RECAUDOS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: calcularPorcentaje(data?.RECAUDOS, data?.PROMEDIO_DIARIO_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data?.RECAUDOS, data?.PROMEDIO_DIARIO_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.RECARGAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: calcularPorcentaje(data?.RECARGAS, data?.PROMEDIO_DIARIO_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data?.RECARGAS, data?.PROMEDIO_DIARIO_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.PROMO2,
    aspiracionDia: data?.META_PROMO2,
    porcentaje: calcularPorcentaje(data?.PROMO2, data?.META_PROMO2),
    porcentaje2: calcularPorcentajeSinLimite(data?.PROMO2, data?.META_PROMO2)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0
  ventaActualAzarCal =
    data?.CHANCE +
    data?.PAGAMAS +
    data?.PAGATODO +
    data?.GANE5 +
    data?.PATA_MILLONARIA +
    data?.DOBLECHANCE +
    data?.CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data?.PROMEDIO_DIARIO_CHANCE +
    data?.PROMEDIO_DIARIO_PAGAMAS +
    data?.PROMEDIO_DIARIO_PAGATODO +
    data?.PROMEDIO_DIARIO_GANE5 +
    data?.PROMEDIO_DIARIO_PATAMI +
    data?.PROMEDIO_DIARIO_DOBLECHANCE +
    data?.PROMEDIO_DIARIO_CHMILL

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  const DATA_UNIFICADA = [
    ASTRO,
    CHANCE,
    PAGAMAS,
    PAGATODO,
    GANE5,
    PATA_MILLONARIA,
    DOBLECHANCE,
    CHANCE_MILLONARIO,
    LOTERIA_FISICA,
    LOTERIA_VIRTUAL,
    BETPLAY,
    GIROS,
    SOAT,
    RECAUDOS,
    RECARGAS,
    PROMO2,
    JUEGOS_AZAR
  ]

  return DATA_UNIFICADA
}

export async function UnificarDatosJamundi (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.ASTRO,
    aspiracionDia: data?.PROMEDIO_DIARIO_ASTRO,
    porcentaje: calcularPorcentaje(data?.ASTRO, data?.PROMEDIO_DIARIO_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data?.ASTRO, data?.PROMEDIO_DIARIO_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data?.CHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHANCE,
    porcentaje: calcularPorcentaje(data?.CHANCE, data?.PROMEDIO_DIARIO_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.CHANCE, data?.PROMEDIO_DIARIO_CHANCE)
  }

  const CHOLADITO = {
    id: 3,
    producto: 'Choladito',
    ventaActual: data?.CHOLADITO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHOLADITO,
    porcentaje: calcularPorcentaje(data?.CHOLADITO, data?.PROMEDIO_DIARIO_CHOLADITO),
    porcentaje2: calcularPorcentajeSinLimite(data?.CHOLADITO, data?.PROMEDIO_DIARIO_CHOLADITO)
  }

  const PAGATODO_JAMUNDI = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.PAGATODO_JAMUNDI,
    aspiracionDia: data?.PROMEDIO_DIARIO_PGTJAMUNDI,
    porcentaje: calcularPorcentaje(data?.PAGATODO_JAMUNDI, data?.PROMEDIO_DIARIO_PGTJAMUNDI),
    porcentaje2: calcularPorcentajeSinLimite(data?.PAGATODO_JAMUNDI, data?.PROMEDIO_DIARIO_PGTJAMUNDI)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.GANE5,
    aspiracionDia: data?.PROMEDIO_DIARIO_GANE5,
    porcentaje: calcularPorcentaje(data?.GANE5, data?.PROMEDIO_DIARIO_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data?.GANE5, data?.PROMEDIO_DIARIO_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.PATA_MILLONARIA,
    aspiracionDia: data?.PROMEDIO_DIARIO_PATAMI,
    porcentaje: calcularPorcentaje(data?.PATA_MILLONARIA, data?.PROMEDIO_DIARIO_PATAMI),
    porcentaje2: calcularPorcentajeSinLimite(data?.PATA_MILLONARIA, data?.PROMEDIO_DIARIO_PATAMI)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.DOBLECHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data?.DOBLECHANCE, data?.PROMEDIO_DIARIO_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.DOBLECHANCE, data?.PROMEDIO_DIARIO_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.CHANCE_MILLONARIO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHMILL,
    porcentaje: calcularPorcentaje(data?.CHANCE_MILLONARIO, data?.PROMEDIO_DIARIO_CHMILL),
    porcentaje2: calcularPorcentajeSinLimite(data?.CHANCE_MILLONARIO, data?.PROMEDIO_DIARIO_CHMILL)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.LOTERIA_FISICA,
    aspiracionDia: data?.PROMEDIO_DIARIO_LF,
    porcentaje: calcularPorcentaje(data?.LOTERIA_FISICA, data?.PROMEDIO_DIARIO_LF),
    porcentaje2: calcularPorcentajeSinLimite(data?.LOTERIA_FISICA, data?.PROMEDIO_DIARIO_LF)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.LOTERIA_VIRTUAL,
    aspiracionDia: data?.PROMEDIO_DIARIO_LV,
    porcentaje: calcularPorcentaje(data?.LOTERIA_VIRTUAL, data?.PROMEDIO_DIARIO_LV),
    porcentaje2: calcularPorcentajeSinLimite(data?.LOTERIA_VIRTUAL, data?.PROMEDIO_DIARIO_LV)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.BETPLAY,
    aspiracionDia: data?.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: calcularPorcentaje(data?.BETPLAY, data?.PROMEDIO_DIARIO_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data?.BETPLAY, data?.PROMEDIO_DIARIO_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.GIROS,
    aspiracionDia: data?.PROMEDIO_DIARIO_GIROS,
    porcentaje: calcularPorcentaje(data?.GIROS, data?.PROMEDIO_DIARIO_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data?.GIROS, data?.PROMEDIO_DIARIO_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.SOAT,
    aspiracionDia: data?.PROMEDIO_DIARIO_SOAT,
    porcentaje: calcularPorcentaje(data?.SOAT, data?.PROMEDIO_DIARIO_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data?.SOAT, data?.PROMEDIO_DIARIO_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.RECAUDOS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: calcularPorcentaje(data?.RECAUDOS, data?.PROMEDIO_DIARIO_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data?.RECAUDOS, data?.PROMEDIO_DIARIO_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.RECARGAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: calcularPorcentaje(data?.RECARGAS, data?.PROMEDIO_DIARIO_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data?.RECARGAS, data?.PROMEDIO_DIARIO_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.PROMO2,
    aspiracionDia: data?.META_PROMO2,
    porcentaje: calcularPorcentaje(data?.PROMO2, data?.META_PROMO2),
    porcentaje2: calcularPorcentajeSinLimite(data?.PROMO2, data?.META_PROMO2)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0
  ventaActualAzarCal =
    data?.CHANCE +
    data?.CHOLADITO +
    data?.PAGATODO_JAMUNDI +
    data?.GANE5 +
    data?.PATA_MILLONARIA +
    data?.DOBLECHANCE +
    data?.CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data?.PROMEDIO_DIARIO_CHANCE +
    data?.PROMEDIO_DIARIO_CHOLADITO +
    data?.PROMEDIO_DIARIO_PGTJAMUNDI +
    data?.PROMEDIO_DIARIO_GANE5 +
    data?.PROMEDIO_DIARIO_PATAMI +
    data?.PROMEDIO_DIARIO_DOBLECHANCE +
    data?.PROMEDIO_DIARIO_CHMILL

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  const DATA_UNIFICADA = [
    ASTRO,
    CHANCE,
    CHOLADITO,
    PAGATODO_JAMUNDI,
    GANE5,
    PATA_MILLONARIA,
    DOBLECHANCE,
    CHANCE_MILLONARIO,
    LOTERIA_FISICA,
    LOTERIA_VIRTUAL,
    BETPLAY,
    GIROS,
    SOAT,
    RECAUDOS,
    RECARGAS,
    PROMO2,
    JUEGOS_AZAR
  ]

  return DATA_UNIFICADA
}

export async function UnificarDatosMesAntYumbo (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.EJE_ASTRO,
    aspiracionDia: data?.VTM_ASTRO,
    porcentaje: calcularPorcentaje(data?.EJE_ASTRO, data?.VTM_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_ASTRO, data?.VTM_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data?.EJE_CHANCE,
    aspiracionDia: data?.VTM_CHANCE,
    porcentaje: calcularPorcentaje(data?.EJE_CHANCE, data?.VTM_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_CHANCE, data?.VTM_CHANCE)
  }

  const PAGAMAS = {
    id: 3,
    producto: 'Pagamas',
    ventaActual: data?.EJE_PAGAMAS,
    aspiracionDia: data?.VTM_PAGAMAS,
    porcentaje: calcularPorcentaje(data?.EJE_PAGAMAS, data?.VTM_PAGAMAS),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_PAGAMAS, data?.VTM_PAGAMAS)
  }

  const PAGATODO = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.EJE_PAGATODO,
    aspiracionDia: data?.VTM_PAGATODO,
    porcentaje: calcularPorcentaje(data?.EJE_PAGATODO, data?.VTM_PAGATODO),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_PAGATODO, data?.VTM_PAGATODO)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.EJE_GANE5,
    aspiracionDia: data?.VTM_GANE5,
    porcentaje: calcularPorcentaje(data?.EJE_GANE5, data?.VTM_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_GANE5, data?.VTM_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.EJE_PATA_MILLONARIA,
    aspiracionDia: data?.VTM_PATA_MILLONARIA,
    porcentaje: calcularPorcentaje(data?.EJE_PATA_MILLONARIA, data?.VTM_PATA_MILLONARIA),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_PATA_MILLONARIA, data?.VTM_PATA_MILLONARIA)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.EJE_DOBLECHANCE,
    aspiracionDia: data?.VTM_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data?.EJE_DOBLECHANCE, data?.VTM_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_DOBLECHANCE, data?.VTM_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.EJE_CHANCE_MILLONARIO,
    aspiracionDia: data?.VTM_CHANCE_MILLONARIO,
    porcentaje: calcularPorcentaje(data?.EJE_CHANCE_MILLONARIO, data?.VTM_CHANCE_MILLONARIO),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_CHANCE_MILLONARIO, data?.VTM_CHANCE_MILLONARIO)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.EJE_LOTERIA_FISICA,
    aspiracionDia: data?.VTM_LOTERIA_FISICA,
    porcentaje: calcularPorcentaje(data?.EJE_LOTERIA_FISICA, data?.VTM_LOTERIA_FISICA),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_LOTERIA_FISICA, data?.VTM_LOTERIA_FISICA)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.EJE_LOTERIA_VIRTUAL,
    aspiracionDia: data?.VTM_LOTERIA_VIRTUAL,
    porcentaje: calcularPorcentaje(data?.EJE_LOTERIA_VIRTUAL, data?.VTM_LOTERIA_VIRTUAL),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_LOTERIA_VIRTUAL, data?.VTM_LOTERIA_VIRTUAL)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.EJE_BETPLAY,
    aspiracionDia: data?.VTM_BETPLAY,
    porcentaje: calcularPorcentaje(data?.EJE_BETPLAY, data?.VTM_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_BETPLAY, data?.VTM_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.EJE_GIROS,
    aspiracionDia: data?.VTM_GIROS,
    porcentaje: calcularPorcentaje(data?.EJE_GIROS, data?.VTM_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_GIROS, data?.VTM_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.EJE_SOAT,
    aspiracionDia: data?.VTM_SOAT,
    porcentaje: calcularPorcentaje(data?.EJE_SOAT, data?.VTM_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_SOAT, data?.VTM_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.EJE_RECAUDOS,
    aspiracionDia: data?.VTM_RECAUDOS,
    porcentaje: calcularPorcentaje(data?.EJE_RECAUDOS, data?.VTM_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_RECAUDOS, data?.VTM_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.EJE_RECARGAS,
    aspiracionDia: data?.VTM_RECARGAS,
    porcentaje: calcularPorcentaje(data?.EJE_RECARGAS, data?.VTM_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_RECARGAS, data?.VTM_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.EJE_RASPE,
    aspiracionDia: data?.VTM_RASPE,
    porcentaje: calcularPorcentaje(data?.EJE_RASPE, data?.VTM_RASPE),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_RASPE, data?.VTM_RASPE)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0
  ventaActualAzarCal =
    data?.EJE_CHANCE +
    data?.EJE_PAGAMAS +
    data?.EJE_PAGATODO +
    data?.EJE_GANE5 +
    data?.EJE_PATA_MILLONARIA +
    data?.EJE_DOBLECHANCE +
    data?.EJE_CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data?.VTM_CHANCE +
    data?.VTM_PAGAMAS +
    data?.VTM_PAGATODO +
    data?.VTM_GANE5 +
    data?.VTM_PATA_MILLONARIA +
    data?.VTM_DOBLECHANCE +
    data?.VTM_CHANCE_MILLONARIO

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  const DATA_UNIFICADA = [
    ASTRO,
    CHANCE,
    PAGAMAS,
    PAGATODO,
    GANE5,
    PATA_MILLONARIA,
    DOBLECHANCE,
    CHANCE_MILLONARIO,
    LOTERIA_FISICA,
    LOTERIA_VIRTUAL,
    BETPLAY,
    GIROS,
    SOAT,
    RECAUDOS,
    RECARGAS,
    PROMO2,
    JUEGOS_AZAR
  ]

  return DATA_UNIFICADA
}

export async function UnificarDatosMesAntJamundi (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.EJE_ASTRO,
    aspiracionDia: data?.VTM_ASTRO,
    porcentaje: calcularPorcentaje(data?.EJE_ASTRO, data?.VTM_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_ASTRO, data?.VTM_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data?.EJE_CHANCE,
    aspiracionDia: data?.VTM_CHANCE,
    porcentaje: calcularPorcentaje(data?.EJE_CHANCE, data?.VTM_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_CHANCE, data?.VTM_CHANCE)
  }

  const CHOLADITO = {
    id: 3,
    producto: 'Choladito',
    ventaActual: data?.EJE_CHOLADITO,
    aspiracionDia: data?.VTM_CHOLADITO,
    porcentaje: calcularPorcentaje(data?.EJE_CHOLADITO, data?.VTM_CHOLADITO),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_CHOLADITO, data?.VTM_CHOLADITO)
  }

  const PAGATODO_JAMUNDI = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.EJE_PAGATODO_JAMUNDI,
    aspiracionDia: data?.VTM_PAGATODO_JAMUNDI,
    porcentaje: calcularPorcentaje(data?.EJE_PAGATODO_JAMUNDI, data?.VTM_PAGATODO_JAMUNDI),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_PAGATODO_JAMUNDI, data?.VTM_PAGATODO_JAMUNDI)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.EJE_GANE5,
    aspiracionDia: data?.VTM_GANE5,
    porcentaje: calcularPorcentaje(data?.EJE_GANE5, data?.VTM_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_GANE5, data?.VTM_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.EJE_PATA_MILLONARIA,
    aspiracionDia: data?.VTM_PATA_MILLONARIA,
    porcentaje: calcularPorcentaje(data?.EJE_PATA_MILLONARIA, data?.VTM_PATA_MILLONARIA),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_PATA_MILLONARIA, data?.VTM_PATA_MILLONARIA)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.EJE_DOBLECHANCE,
    aspiracionDia: data?.VTM_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data?.EJE_DOBLECHANCE, data?.VTM_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_DOBLECHANCE, data?.VTM_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.EJE_CHANCE_MILLONARIO,
    aspiracionDia: data?.VTM_CHANCE_MILLONARIO,
    porcentaje: calcularPorcentaje(data?.EJE_CHANCE_MILLONARIO, data?.VTM_CHANCE_MILLONARIO),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_CHANCE_MILLONARIO, data?.VTM_CHANCE_MILLONARIO)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.EJE_LOTERIA_FISICA,
    aspiracionDia: data?.VTM_LOTERIA_FISICA,
    porcentaje: calcularPorcentaje(data?.EJE_LOTERIA_FISICA, data?.VTM_LOTERIA_FISICA),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_LOTERIA_FISICA, data?.VTM_LOTERIA_FISICA)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.EJE_LOTERIA_VIRTUAL,
    aspiracionDia: data?.VTM_LOTERIA_VIRTUAL,
    porcentaje: calcularPorcentaje(data?.EJE_LOTERIA_VIRTUAL, data?.VTM_LOTERIA_VIRTUAL),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_LOTERIA_VIRTUAL, data?.VTM_LOTERIA_VIRTUAL)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.EJE_BETPLAY,
    aspiracionDia: data?.VTM_BETPLAY,
    porcentaje: calcularPorcentaje(data?.EJE_BETPLAY, data?.VTM_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_BETPLAY, data?.VTM_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.EJE_GIROS,
    aspiracionDia: data?.VTM_GIROS,
    porcentaje: calcularPorcentaje(data?.EJE_GIROS, data?.VTM_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_GIROS, data?.VTM_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.EJE_SOAT,
    aspiracionDia: data?.VTM_SOAT,
    porcentaje: calcularPorcentaje(data?.EJE_SOAT, data?.VTM_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_SOAT, data?.VTM_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.EJE_RECAUDOS,
    aspiracionDia: data?.VTM_RECAUDOS,
    porcentaje: calcularPorcentaje(data?.EJE_RECAUDOS, data?.VTM_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_RECAUDOS, data?.VTM_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.EJE_RECARGAS,
    aspiracionDia: data?.VTM_RECARGAS,
    porcentaje: calcularPorcentaje(data?.EJE_RECARGAS, data?.VTM_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_RECARGAS, data?.VTM_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.EJE_RASPE,
    aspiracionDia: data?.VTM_RASPE,
    porcentaje: calcularPorcentaje(data?.EJE_RASPE, data?.VTM_RASPE),
    porcentaje2: calcularPorcentajeSinLimite(data?.EJE_RASPE, data?.VTM_RASPE)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0

  ventaActualAzarCal =
    data?.EJE_CHANCE +
    data?.EJE_CHOLADITO +
    data?.EJE_PAGATODO_JAMUNDI +
    data?.EJE_GANE5 +
    data?.EJE_PATA_MILLONARIA +
    data?.EJE_DOBLECHANCE +
    data?.EJE_CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data?.VTM_CHANCE +
    data?.VTM_CHOLADITO +
    data?.VTM_PAGATODO_JAMUNDI +
    data?.VTM_GANE5 +
    data?.VTM_PATA_MILLONARIA +
    data?.VTM_DOBLECHANCE +
    data?.VTM_CHANCE_MILLONARIO

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  const DATA_UNIFICADA = [
    ASTRO,
    CHANCE,
    CHOLADITO,
    PAGATODO_JAMUNDI,
    GANE5,
    PATA_MILLONARIA,
    DOBLECHANCE,
    CHANCE_MILLONARIO,
    LOTERIA_FISICA,
    LOTERIA_VIRTUAL,
    BETPLAY,
    GIROS,
    SOAT,
    RECAUDOS,
    RECARGAS,
    PROMO2,
    JUEGOS_AZAR
  ]

  return DATA_UNIFICADA
}
