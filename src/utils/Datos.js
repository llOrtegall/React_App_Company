import { calcularPorcentaje } from './progress.js'

export async function UnificarDatosYumbo (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.ASTRO,
    aspiracionDia: data?.PROMEDIO_DIARIO_ASTRO,
    porcentaje: calcularPorcentaje(data?.ASTRO, data?.PROMEDIO_DIARIO_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 & 3 Cifras',
    ventaActual: data?.CHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHANCE,
    porcentaje: calcularPorcentaje(data?.CHANCE, data?.PROMEDIO_DIARIO_CHANCE)
  }

  const PAGAMAS = {
    id: 3,
    producto: 'Pagamas',
    ventaActual: data?.PAGAMAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_PAGAMAS,
    porcentaje: calcularPorcentaje(data?.PAGAMAS, data?.PROMEDIO_DIARIO_PAGAMAS)
  }

  const PAGATODO = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.PAGATODO,
    aspiracionDia: data?.PROMEDIO_DIARIO_PAGATODO,
    porcentaje: calcularPorcentaje(data?.PAGATODO, data?.PROMEDIO_DIARIO_PAGATODO)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.GANE5,
    aspiracionDia: data?.PROMEDIO_DIARIO_GANE5,
    porcentaje: calcularPorcentaje(data?.GANE5, data?.PROMEDIO_DIARIO_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.PATA_MILLONARIA,
    aspiracionDia: data?.PROMEDIO_DIARIO_PATAMI,
    porcentaje: calcularPorcentaje(data?.PATA_MILLONARIA, data?.PROMEDIO_DIARIO_PATAMI)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.DOBLECHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data?.DOBLECHANCE, data?.PROMEDIO_DIARIO_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.CHANCE_MILLONARIO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHMILL,
    porcentaje: calcularPorcentaje(data?.CHANCE_MILLONARIO, data?.PROMEDIO_DIARIO_CHMILL)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.LOTERIA_FISICA,
    aspiracionDia: data?.PROMEDIO_DIARIO_LF,
    porcentaje: calcularPorcentaje(data?.LOTERIA_FISICA, data?.PROMEDIO_DIARIO_LF)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.LOTERIA_VIRTUAL,
    aspiracionDia: data?.PROMEDIO_DIARIO_LV,
    porcentaje: calcularPorcentaje(data?.LOTERIA_VIRTUAL, data?.PROMEDIO_DIARIO_LV)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.BETPLAY,
    aspiracionDia: data?.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: calcularPorcentaje(data?.BETPLAY, data?.PROMEDIO_DIARIO_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.GIROS,
    aspiracionDia: data?.PROMEDIO_DIARIO_GIROS,
    porcentaje: calcularPorcentaje(data?.GIROS, data?.PROMEDIO_DIARIO_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.SOAT,
    aspiracionDia: data?.PROMEDIO_DIARIO_SOAT,
    porcentaje: calcularPorcentaje(data?.SOAT, data?.PROMEDIO_DIARIO_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.RECAUDOS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: calcularPorcentaje(data?.RECAUDOS, data?.PROMEDIO_DIARIO_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.RECARGAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: calcularPorcentaje(data?.RECARGAS, data?.PROMEDIO_DIARIO_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.PROMO2,
    aspiracionDia: data?.META_PROMO2,
    porcentaje: calcularPorcentaje(data?.PROMO2, data?.META_PROMO2)
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
    producto: 'Juegos De Azar',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal)
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
    porcentaje: calcularPorcentaje(data?.ASTRO, data?.PROMEDIO_DIARIO_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data?.CHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHANCE,
    porcentaje: calcularPorcentaje(data?.CHANCE, data?.PROMEDIO_DIARIO_CHANCE)
  }

  const CHOLADITO = {
    id: 3,
    producto: 'Choladito',
    ventaActual: data?.CHOLADITO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHOLADITO,
    porcentaje: calcularPorcentaje(data?.CHOLADITO, data?.PROMEDIO_DIARIO_CHOLADITO)
  }

  const PAGATODO_JAMUNDI = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.PAGATODO_JAMUNDI,
    aspiracionDia: data?.PROMEDIO_DIARIO_PGTJAMUNDI,
    porcentaje: calcularPorcentaje(data?.PAGATODO_JAMUNDI, data?.PROMEDIO_DIARIO_PGTJAMUNDI)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.GANE5,
    aspiracionDia: data?.PROMEDIO_DIARIO_GANE5,
    porcentaje: calcularPorcentaje(data?.GANE5, data?.PROMEDIO_DIARIO_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.PATA_MILLONARIA,
    aspiracionDia: data?.PROMEDIO_DIARIO_PATAMI,
    porcentaje: calcularPorcentaje(data?.PATA_MILLONARIA, data?.PROMEDIO_DIARIO_PATAMI)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.DOBLECHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data?.DOBLECHANCE, data?.PROMEDIO_DIARIO_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.CHANCE_MILLONARIO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHMILL,
    porcentaje: calcularPorcentaje(data?.CHANCE_MILLONARIO, data?.PROMEDIO_DIARIO_CHMILL)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.LOTERIA_FISICA,
    aspiracionDia: data?.PROMEDIO_DIARIO_LF,
    porcentaje: calcularPorcentaje(data?.LOTERIA_FISICA, data?.PROMEDIO_DIARIO_LF)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.LOTERIA_VIRTUAL,
    aspiracionDia: data?.PROMEDIO_DIARIO_LV,
    porcentaje: calcularPorcentaje(data?.LOTERIA_VIRTUAL, data?.PROMEDIO_DIARIO_LV)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.BETPLAY,
    aspiracionDia: data?.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: calcularPorcentaje(data?.BETPLAY, data?.PROMEDIO_DIARIO_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.GIROS,
    aspiracionDia: data?.PROMEDIO_DIARIO_GIROS,
    porcentaje: calcularPorcentaje(data?.GIROS, data?.PROMEDIO_DIARIO_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.SOAT,
    aspiracionDia: data?.PROMEDIO_DIARIO_SOAT,
    porcentaje: calcularPorcentaje(data?.SOAT, data?.PROMEDIO_DIARIO_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.RECAUDOS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: calcularPorcentaje(data?.RECAUDOS, data?.PROMEDIO_DIARIO_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.RECARGAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: calcularPorcentaje(data?.RECARGAS, data?.PROMEDIO_DIARIO_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.PROMO2,
    aspiracionDia: data?.META_PROMO2,
    porcentaje: calcularPorcentaje(data?.PROMO2, data?.META_PROMO2)
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
    producto: 'Juegos de Azar',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal)
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

export async function UnificarDatosMesAntJamundi (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.VTM_ASTRO,
    aspiracionDia: data?.EJE_ASTRO,
    porcentaje: calcularPorcentaje(data?.VTM_ASTRO, data?.EJE_ASTRO)
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data?.VTM_CHANCE,
    aspiracionDia: data?.EJE_CHANCE,
    porcentaje: calcularPorcentaje(data?.VTM_CHANCE, data?.EJE_CHANCE)
  }

  const CHOLADITO = {
    id: 3,
    producto: 'Choladito',
    ventaActual: data?.VTM_CHOLADITO,
    aspiracionDia: data?.EJE_CHOLADITO,
    porcentaje: calcularPorcentaje(data?.VTM_CHOLADITO, data?.EJE_CHOLADITO)
  }

  const PAGATODO_JAMUNDI = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.VTM_PAGATODO_JAMUNDI,
    aspiracionDia: data?.EJE_PAGATODO_JAMUNDI,
    porcentaje: calcularPorcentaje(data?.VTM_PAGATODO_JAMUNDI, data?.EJE_PAGATODO_JAMUNDI)
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.VTM_GANE5,
    aspiracionDia: data?.EJE_GANE5,
    porcentaje: calcularPorcentaje(data?.VTM_GANE5, data?.EJE_GANE5)
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.VTM_PATA_MILLONARIA,
    aspiracionDia: data?.EJE_PATA_MILLONARIA,
    porcentaje: calcularPorcentaje(data?.VTM_PATA_MILLONARIA, data?.EJE_PATA_MILLONARIA)
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.VTM_DOBLECHANCE,
    aspiracionDia: data?.EJE_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data?.VTM_DOBLECHANCE, data?.EJE_DOBLECHANCE)
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.VTM_CHANCE_MILLONARIO,
    aspiracionDia: data?.EJE_CHANCE_MILLONARIO,
    porcentaje: calcularPorcentaje(data?.VTM_CHANCE_MILLONARIO, data?.EJE_CHANCE_MILLONARIO)
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.VTM_LOTERIA_FISICA,
    aspiracionDia: data?.EJE_LOTERIA_FISICA,
    porcentaje: calcularPorcentaje(data?.VTM_LOTERIA_FISICA, data?.EJE_LOTERIA_FISICA)
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.VTM_LOTERIA_VIRTUAL,
    aspiracionDia: data?.EJE_LOTERIA_VIRTUAL,
    porcentaje: calcularPorcentaje(data?.VTM_LOTERIA_VIRTUAL, data?.EJE_LOTERIA_VIRTUAL)
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.VTM_BETPLAY,
    aspiracionDia: data?.EJE_BETPLAY,
    porcentaje: calcularPorcentaje(data?.VTM_BETPLAY, data?.EJE_BETPLAY)
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.VTM_GIROS,
    aspiracionDia: data?.EJE_GIROS,
    porcentaje: calcularPorcentaje(data?.VTM_GIROS, data?.EJE_GIROS)
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.VTM_SOAT,
    aspiracionDia: data?.EJE_SOAT,
    porcentaje: calcularPorcentaje(data?.VTM_SOAT, data?.EJE_SOAT)
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.VTM_RECAUDOS,
    aspiracionDia: data?.EJE_RECAUDOS,
    porcentaje: calcularPorcentaje(data?.VTM_RECAUDOS, data?.EJE_RECAUDOS)
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.VTM_RECARGAS,
    aspiracionDia: data?.EJE_RECARGAS,
    porcentaje: calcularPorcentaje(data?.VTM_RECARGAS, data?.EJE_RECARGAS)
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.VTM_RASPE,
    aspiracionDia: data?.EJE_RASPE,
    porcentaje: calcularPorcentaje(data?.VTM_RASPE, data?.EJE_RASPE)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0
  ventaActualAzarCal =
    data?.VTM_CHANCE +
    data?.VTM_CHOLADITO +
    data?.VTM_PAGATODO_JAMUNDI +
    data?.VTM_GANE5 +
    data?.VTM_PATA_MILLONARIA +
    data?.VTM_DOBLECHANCE +
    data?.VTM_CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data?.EJE_CHANCE +
    data?.EJE_CHOLADITO +
    data?.EJE_PAGATODO_JAMUNDI +
    data?.EJE_GANE5 +
    data?.EJE_PATA_MILLONARIA +
    data?.EJE_DOBLECHANCE +
    data?.EJE_CHANCE_MILLONARIO

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Juegos de Azar',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal)
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
