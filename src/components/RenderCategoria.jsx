export function RenderCategoria ({ catergoria, version }) {
  const imageMap = {
    DIAMANTE: `/diamante${version}.png`,
    ORO: '/oro.png',
    PLATA: '/plata.png',
    ZAFIRO: '/zafiro.png',
    BRONCE: '../../public/bronce.png'
  }

  const RenderImagen = ({ cat }) => {
    const src = imageMap[cat]
    if (src) {
      return <img src={src} alt={cat.toLowerCase()} />
    }
  }

  return (
    <>
      <RenderImagen cat={catergoria} />
      <img src="/logos.png" alt="logos juegos" width={500} loading='lazy' className='' />
    </>
  )
}
