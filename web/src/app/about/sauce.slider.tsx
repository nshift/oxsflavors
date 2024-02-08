import Image from 'next/image'
import pageStyles from './test.module.css'

export default function FlavorsSlider() {
  const sauces = [
    { src: '/yellow_sauce2.png', alt: 'Yellow Sauce' },
    { src: '/blue_sauce.png', alt: 'Blue Sauce' },
  ]

  return (
    <>
      {sauces.map((sauce, index) => (
        <Image
          key={index}
          src={sauce.src}
          alt={sauce.alt}
          className={[pageStyles.image, index == 0 ? pageStyles.frontImage : pageStyles.blurredImage].join(' ')}
          width={1000}
          height={2042}
          priority
        />
      ))}
    </>
  )
}
