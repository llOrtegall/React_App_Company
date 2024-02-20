import axios from 'axios'
import { QRCodeCanvas } from 'qrcode.react'
import { useEffect } from 'react'

export function GenerateQR () {
  useEffect(() => {
    axios.get('/register-ip')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  })
  return (
    <>
      <QRCodeCanvas value="https://github.com" />
    </>
  )
}
