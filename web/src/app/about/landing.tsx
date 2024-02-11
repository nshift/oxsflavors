import Link from 'next/link'
import { CSSProperties } from 'react'
import FlavorsSlider from './sauce.slider'
import pageStyles from './test.module.css'

const ctaLinksStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'center',
}

export default function Landing() {
  return (
    <div className="container">
      <div className={['landingBackground', pageStyles.backgroundColor].join(' ')}></div>
      <div className="landingContainer">
        <div className="landingLargeBlock">
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
          <div style={ctaLinksStyle}>
            <button className={['button action', pageStyles.backgroundColor].join(' ')}>Shop now</button>
            <Link href="/" className="link action">
              Get 10% off
            </Link>
          </div>
        </div>
        <div className={['landingSmallBlock', pageStyles.productsSlider].join(' ')}>
          <FlavorsSlider />
        </div>
      </div>
    </div>
  )
}
