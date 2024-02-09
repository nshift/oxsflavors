import Image from 'next/image'
import Link from 'next/link'
import { sauces } from '../data'
import pageStyles from './test.module.css'

export default function Gallery() {
  return (
    <div className="gallery">
      {sauces.map((sauce, index) => (
        <div
          key={index}
          className={['item', pageStyles.featuredGalleryItem].join(' ')}
          style={{ backgroundColor: sauce.colors.secondary.background, color: sauce.colors.secondary.text }}
        >
          <div>
            <p className="country">{sauce.country}</p>
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
          <div className={pageStyles.ctaLinks}>
            <button
              className="button action"
              style={{ color: sauce.colors.primary.text, backgroundColor: sauce.colors.primary.background }}
            >
              Buy now
            </button>
            {/* <button className="link" style={{ color: sauce.colors.secondary.text }}>
                More info
              </button> */}
          </div>
          {sauce.recommendedRecipe && (
            <div className={pageStyles.recommendation}>
              <div className={[pageStyles.storyVideo, pageStyles.recipeVideo].join(' ')}>
                {/* <div className={pageStyles.videoRecommendation}>
                  <span className={['bestMatch', pageStyles.bestMatch].join(' ')}>Recommended with</span>
                </div> */}
                <video playsInline preload="none" poster={sauce.recommendedRecipe.video.poster} controls>
                  <source src={sauce.recommendedRecipe.video.src} type="video/mp4" />
                </video>
              </div>
              <h3 className="gallerySubTitle">{sauce.recommendedRecipe.name}</h3>
              <p style={{ width: '100%' }}>{sauce.recommendedRecipe.description}</p>
              <p style={{ width: '100%' }}>
                <Link href="/" className="link">
                  More recipes
                </Link>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
