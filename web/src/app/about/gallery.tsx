import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'
import { sauces } from '../data'
import pageStyles from './test.module.css'

const videoStyle: CSSProperties = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  marginTop: '10%',
}

const recommendationContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}

const colorize = (color: { background: string; text: string }): CSSProperties => ({
  backgroundColor: color.background,
  color: color.text,
})

export default function Gallery() {
  return (
    <div className="gallery">
      {sauces.map((sauce, index) => (
        <div key={index} className="item" style={{ ...colorize(sauce.colors.secondary), paddingBottom: '5rem' }}>
          <div>
            <p className="label largeLabel">{sauce.country}</p>
          </div>
          <Image
            src={sauce.image.src}
            alt={sauce.name}
            className={pageStyles.image}
            width={sauce.image.size.width}
            height={sauce.image.size.height}
            priority
          />
          <h2 className="galleryTitle">{sauce.name}</h2>
          <button className="button action" style={{ ...colorize(sauce.colors.primary) }}>
            Buy now
          </button>
          <div style={recommendationContainerStyle}>
            <div style={videoStyle}>
              <div className="label smallLabel" style={{ top: '-25px' }}>
                Great with
              </div>
              <video
                className="squareVideo"
                playsInline
                preload="none"
                poster={sauce.recommendedRecipe.video.poster}
                controls
              >
                <source src={sauce.recommendedRecipe.video.src} type="video/mp4" />
              </video>
            </div>
            <h3 className="gallerySubTitle" style={{ textAlign: 'center' }}>
              {sauce.recommendedRecipe.name}
            </h3>
            <p>{sauce.recommendedRecipe.description}</p>
            <p>
              <Link href="/" className="link action">
                More recipes
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
