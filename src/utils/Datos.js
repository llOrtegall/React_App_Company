export async function UnificarDatos (data) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data?.ASTRO,
    aspiracionDia: data?.PROMEDIO_DIARIO_ASTRO,
    porcentaje: data?.PORAST
  }

  const CHANCE = {
    id: 2,
    producto: 'Chance',
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

  // const PROMO1 = {
  //   id: 16,
  //   producto: 'Promo 1',
  //   ventaActual: data?.PROMO1,
  //   aspiracionDia: data?.META_PROMO1
  // }

  const PROMO2 = {
    id: 17,
    producto: 'Raspe y Listo',
    ventaActual: data?.PROMO2,
    aspiracionDia: data?.META_PROMO2,
    porcentaje: data?.PORASPE
  }

  const DATA_UNIFICADA = {
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
    // PROMO1,
    PROMO2
  }

  return DATA_UNIFICADA
}
