export async function UnificarDatosYumbo (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.ASTRO,
    aspiracionDia: data?.PROMEDIO_DIARIO_ASTRO,
    porcentaje: data?.PORAST
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 & 3 Cifras',
    ventaActual: data?.CHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHANCE,
    porcentaje: data?.PORCH
  }

  const PAGAMAS = {
    id: 3,
    producto: 'Pagamas',
    ventaActual: data?.PAGAMAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_PAGAMAS,
    porcentaje: data?.PORPGM

  }

  const PAGATODO = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.PAGATODO,
    aspiracionDia: data?.PROMEDIO_DIARIO_PAGATODO,
    porcentaje: data?.PORPGT
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.GANE5,
    aspiracionDia: data?.PROMEDIO_DIARIO_GANE5,
    porcentaje: data?.PORGN5
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.PATA_MILLONARIA,
    aspiracionDia: data?.PROMEDIO_DIARIO_PATAMI,
    porcentaje: data?.PORPTM
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.DOBLECHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: data?.PORDBCH
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.CHANCE_MILLONARIO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHMILL,
    porcentaje: data?.PORCHM
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.LOTERIA_FISICA,
    aspiracionDia: data?.PROMEDIO_DIARIO_LF,
    porcentaje: data?.PORLTF
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.LOTERIA_VIRTUAL,
    aspiracionDia: data?.PROMEDIO_DIARIO_LV,
    porcentaje: data?.PORLTV
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.BETPLAY,
    aspiracionDia: data?.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: data?.PORBTP
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.GIROS,
    aspiracionDia: data?.PROMEDIO_DIARIO_GIROS,
    porcentaje: data?.PORSGR
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.SOAT,
    aspiracionDia: data?.PROMEDIO_DIARIO_SOAT,
    porcentaje: data?.PORSOAT
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.RECAUDOS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: data?.PORECAU
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.RECARGAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: data?.PORECAR
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.PROMO2,
    aspiracionDia: data?.META_PROMO2,
    porcentaje: data?.PORASPE
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0; let porcentajeAzarCal = 0
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

  porcentajeAzarCal = (ventaActualAzarCal / aspiracionDiaAzarCal) * 100

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Juegos De Azar',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: porcentajeAzarCal
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
    porcentaje: data?.PORAST
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance 4 Y 3 Cif',
    ventaActual: data?.CHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHANCE,
    porcentaje: data?.PORDBCH
  }

  const CHOLADITO = {
    id: 3,
    producto: 'Choladito',
    ventaActual: data?.CHOLADITO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHOLADITO,
    porcentaje: data?.PORCH
  }

  const PAGATODO_JAMUNDI = {
    id: 4,
    producto: 'Paga Todo',
    ventaActual: data?.PAGATODO_JAMUNDI,
    aspiracionDia: data?.PROMEDIO_DIARIO_PGTJAMUNDI,
    porcentaje: data?.PORPGT
  }

  const GANE5 = {
    id: 5,
    producto: 'Gane 5',
    ventaActual: data?.GANE5,
    aspiracionDia: data?.PROMEDIO_DIARIO_GANE5,
    porcentaje: data?.PORGN5
  }

  const PATA_MILLONARIA = {
    id: 6,
    producto: 'Pata Millonaria',
    ventaActual: data?.PATA_MILLONARIA,
    aspiracionDia: data?.PROMEDIO_DIARIO_PATAMI,
    porcentaje: data?.PORPTM
  }

  const DOBLECHANCE = {
    id: 7,
    producto: 'Doble chance',
    ventaActual: data?.DOBLECHANCE,
    aspiracionDia: data?.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: data?.PORDBCH
  }

  const CHANCE_MILLONARIO = {
    id: 8,
    producto: 'Chance Millonario',
    ventaActual: data?.CHANCE_MILLONARIO,
    aspiracionDia: data?.PROMEDIO_DIARIO_CHMILL,
    porcentaje: data?.PORCHM
  }

  const LOTERIA_FISICA = {
    id: 9,
    producto: 'Loteria Fisica',
    ventaActual: data?.LOTERIA_FISICA,
    aspiracionDia: data?.PROMEDIO_DIARIO_LF,
    porcentaje: data?.PORLTF
  }

  const LOTERIA_VIRTUAL = {
    id: 10,
    producto: 'Loteria Virtual',
    ventaActual: data?.LOTERIA_VIRTUAL,
    aspiracionDia: data?.PROMEDIO_DIARIO_LV,
    porcentaje: data?.PORLTV
  }

  const BETPLAY = {
    id: 11,
    producto: 'BetPlay',
    ventaActual: data?.BETPLAY,
    aspiracionDia: data?.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: data?.PORBTP
  }

  const GIROS = {
    id: 12,
    producto: 'Giros',
    ventaActual: data?.GIROS,
    aspiracionDia: data?.PROMEDIO_DIARIO_GIROS,
    porcentaje: data?.PORSGR
  }

  const SOAT = {
    id: 13,
    producto: 'Baloto',
    ventaActual: data?.SOAT,
    aspiracionDia: data?.PROMEDIO_DIARIO_SOAT,
    porcentaje: data?.PORSOAT
  }

  const RECAUDOS = {
    id: 14,
    producto: 'Recaudos',
    ventaActual: data?.RECAUDOS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: data?.PORECAU
  }

  const RECARGAS = {
    id: 15,
    producto: 'Recargas',
    ventaActual: data?.RECARGAS,
    aspiracionDia: data?.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: data?.PORECAR
  }

  const PROMO2 = {
    id: 16,
    producto: 'Raspe y Listo',
    ventaActual: data?.PROMO2,
    aspiracionDia: data?.META_PROMO2,
    porcentaje: data?.PORASPE
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0; let porcentajeAzarCal = 0
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

  porcentajeAzarCal = (ventaActualAzarCal / aspiracionDiaAzarCal) * 100

  const JUEGOS_AZAR = {
    id: 17,
    producto: 'Juegos de Azar',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: porcentajeAzarCal
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
