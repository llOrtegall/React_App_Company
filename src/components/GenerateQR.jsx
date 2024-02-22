import { QRCodeCanvas } from 'qrcode.react'

export function GenerateQR ({ usr }) {
  const ip = '172.20.1.216'
  const { codigo, nombres, usuario } = usr

  return (
    <>
      <QRCodeCanvas size={180} value={`${ip}&${nombres}&${usuario}&${codigo}`} />
    </>
  )
}
