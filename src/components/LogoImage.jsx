export const LogoImage = ({ zona }) => {
  return (
    zona && zona === 39627
      ? <img src="/ganeyumbo.png" width={120} alt="logo gane yumbo" className='0xl:w-40' />
      : <img src="/ganejamundi.png" width={150} alt="logo gane jamundi" className='0xl:w-40' />
  )
}
