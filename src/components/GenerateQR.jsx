import { QRCodeCanvas } from 'qrcode.react'

export function GenerateQR ({ usr }) {
  console.log(usr)
  const ip = '172.20.1.216'
  const { codigo, nombres, username } = usr

  return (
    <>
      <QRCodeCanvas size={180} value={`${ip}&${nombres}&${username}&${codigo}`} />
    </>
  )
}
