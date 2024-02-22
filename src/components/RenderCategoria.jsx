export function RenderCategoria ({ cat: categoria, ver: version }) {
  const imageMap = {
    DIAMANTE: `../../public/diamante${version}.png`,
    ZAFIRO: '../../public/zafiro.png',
    ORO: '../../public/oro.png',
    PLATA: '../../public/plata.png',
    BRONCE: '../../public/bronce.png'
  }

  const RenderImagen = ({ cat }) => {
    const src = imageMap[cat]
    if (src) {
      return <img src={src} loading='lazy' alt='logo segun categoria' />
    }
  }

  return (
    <>
      <RenderImagen cat={categoria} />
      <img src="../../public/logos.png" alt="logos juegos" width={500} loading='lazy' className='' />
    </>
  )
}
