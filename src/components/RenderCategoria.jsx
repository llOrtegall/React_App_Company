export function RenderCategoria ({ cat: categoria, ver: version }) {
  const imageMap = {
    DIAMANTE: `../../public/diamante${version}.png`,
    BRONCE: '../../public/bronce.png',
    ZAFIRO: '../../public/zafiro.png',
    PLATA: '../../public/plata.png',
    ORO: '../../public/oro.png'
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
