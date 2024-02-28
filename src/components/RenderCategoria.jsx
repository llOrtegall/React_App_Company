export function RenderCategoria ({ cat: categoria, ver: version, size }) {
  const imageMap = {
    DIAMANTE: `./public/diamante${version}.png`,
    ZAFIRO: './public/zafiro.png',
    ORO: './public/oro.png',
    PLATA: './public/plata.png',
    BRONCE: './public/bronce.png'
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
