export function RenderCategoria ({ cat: categoria, ver: version, size }) {
  const imageMap = {
    DIAMANTE: `/diamante${version}.png`,
    ZAFIRO: '/zafiro.png',
    ORO: '/oro.png',
    PLATA: '/plata.png',
    BRONCE: '/bronce.png'
  }

  const RenderImagen = ({ cat }) => {
    const src = imageMap[cat]
    if (src) {
      return <img src={src} loading='lazy' width={size} alt='logo segun categoria' />
    }
  }

  return (
    <>
      <RenderImagen cat={categoria} />
    </>
  )
}
