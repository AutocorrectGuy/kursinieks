import { useEffect, useState } from 'react'

interface Props {
  filename: string
}

const ImageComponent: React.FC<Props> = ({ filename }) => {
  const [src, setSrc] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      const response = await import(`../../assets/img/profile/${filename}`)
      setSrc(response.default)
    })()
  }, [filename])

  return (
    <img
      src={src}
      alt={filename}
    />
  )
}

export default ImageComponent