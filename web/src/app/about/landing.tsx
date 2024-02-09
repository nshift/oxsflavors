import Link from 'next/link'
import FlavorsSlider from './sauce.slider'
import pageStyles from './test.module.css'

export default function Landing() {
  return (
    <div className="container">
      <div className={['topBackground', pageStyles.backgroundColor].join(' ')}></div>
      <div className={['productHighlights topBlock', pageStyles.topBlock].join(' ')}>
        <div className="description">
          <h1 className="hugeTitle">
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
  )
}
