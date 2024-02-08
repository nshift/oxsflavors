import Image from 'next/image'
import Link from 'next/link'
import Header from '../header'
import FlavorsSlider from './sauce.slider'
import pageStyles from './test.module.css'

export default function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className={['topBackground', pageStyles.backgroundColor].join(' ')}></div>
        <div className={['productHighlights topBlock', pageStyles.topBlock].join(' ')}>
          <div className="description">
            <h1 className="title">
              Try
              <br />
              <span className={pageStyles.carribeanSauce}>Carribean 🌶️</span>
              <span className={pageStyles.chimchuriSauce}>Argentinian</span>
              <br />
              flavors
            </h1>
            <p>
              We help businesses to create a place where people can safely access to residential and commercial spaces,
              book a meeting room, invite guests and more by using their phone.
            </p>
            <div className={pageStyles.ctaLinks}>
              <button className={['button action', pageStyles.backgroundColor].join(' ')}>Shop now</button>
              <Link href="/" className="link">
                Get 10% off
              </Link>
            </div>
          </div>
          <div className={['product', pageStyles.productsSlider].join(' ')}>
            <FlavorsSlider />
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className={['item', pageStyles.argentinaBackground].join(' ')}>
          <Image
            src="/blue_sauce.png"
            alt="Yellow Sauce"
            className={pageStyles.image}
            width={609}
            height={1950}
            priority
          />
          <div>
            <p className="country">🇦🇷 Argentina</p>
          </div>
          <h2 className="galleryTitle">Chimichurri sauce</h2>
          <div className={pageStyles.ctaLinks}>
            <button className={['button action', pageStyles.argentinaButtonBackground].join(' ')}>Buy now</button>
            <button className={['link', pageStyles.argentinaLink].join(' ')}>More info</button>
          </div>
        </div>
        <div className={['item', pageStyles.carribeanBackground].join(' ')}>
          <Image
            src="/yellow_sauce2.png"
            alt="Yellow Sauce"
            className={pageStyles.image}
            width={565}
            height={1680}
            priority
          />
          <div>
            <p className="country">🇬🇵 Guadeloupe</p>
          </div>
          <h2 className="galleryTitle">Carribean spicy sauce</h2>
          <div className={pageStyles.ctaLinks}>
            <button className={['button action', pageStyles.carribeanButtonBackground].join(' ')}>Buy now</button>
            <button className={['link', pageStyles.carribeanLink].join(' ')}>More info</button>
          </div>
        </div>
        <div className={['item', pageStyles.otherBackground].join(' ')}>
          <Image
            src="/creole_sauce2.png"
            alt="Yellow Sauce"
            className={pageStyles.image}
            width={564}
            height={1669}
            priority
          />
          <div>
            <p className="country">🇬🇵 Guadeloupe</p>
          </div>
          <h2 className="galleryTitle">Creole sauce</h2>

          <div className={pageStyles.ctaLinks}>
            <button className={['button action', pageStyles.otherButtonBackground].join(' ')}>Buy now</button>
            <button className={['link', pageStyles.otherLink].join(' ')}>More info</button>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  )
}
