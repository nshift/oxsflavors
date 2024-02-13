import Link from 'next/link'
import { CSSProperties } from 'react'
import { values } from '../data'

const colorize = (color: { background: string; text: string }): CSSProperties => ({
  backgroundColor: color.background,
  color: color.text,
})

export default function Values() {
  return (
    <div className="container sections">
      <h2 className="title">It&apos;s all about the flavors of the world.</h2>
      <p>
        Quis elit cillum occaecat ipsum magna voluptate consequat reprehenderit. Irure eu Lorem anim qui consectetur
        elit mollit qui reprehenderit laboris anim adipisicing consequat. Minim Lorem occaecat dolor mollit culpa aute
        irure ut tempor ea laborum. Occaecat eu nostrud eu voluptate commodo mollit consequat incididunt adipisicing
        elit voluptate do ex eiusmod. Mollit excepteur labore mollit ad ea voluptate. Irure eiusmod nisi duis nostrud ex
        laborum irure do consectetur voluptate. Ad excepteur culpa ullamco aliqua et nisi velit laborum velit id ex elit
        reprehenderit ea.
      </p>
      <div>
        <div className="tile" style={{ gap: '3rem', backgroundColor: 'var(--color-yellow-caribbean)' }}>
          <h3 className="subtitle">We are crafting sauces in a traditional way.</h3>
          <video loop autoPlay playsInline muted className="squareVideo">
            <source src="https://d3evtkvyiaiw3n.cloudfront.net/intro2.mov" type="video/mp4" />
          </video>
          <p>
            <Link href="/" className="link action">
              More about our craft
            </Link>
          </p>
        </div>
        <div className="gallery">
          {values.map((value, valueKey) => (
            <div
              key={'value-' + valueKey}
              className="tile"
              style={{ ...colorize(value.colors.primary), minWidth: '50%' }}
            >
              <h3 className="subtitle">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
