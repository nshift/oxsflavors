import Link from 'next/link'
import { values } from '../data'
import pageStyles from './test.module.css'

const valueSections: any[][] = chunk(values, 2)

function chunk(array: any, size: number) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, (index + 1) * size),
  )
}

export default function Values() {
  return (
    <div className="container" style={{ paddingTop: '5rem', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
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
        <div className="gallery">
          <div className={['item', pageStyles.otherBackground].join(' ')}>
            <div className={pageStyles.storyVideo} style={{ gap: '3rem', alignItems: 'center' }}>
              <h3 className="subtitle">We are crafting sauces in a traditional way.</h3>
              <video loop autoPlay playsInline muted>
                <source src="https://d3evtkvyiaiw3n.cloudfront.net/intro2.mov" type="video/mp4" />
              </video>
              <p>
                <Link href="/" className="link">
                  More about our craft
                </Link>
              </p>
            </div>
          </div>
        </div>
        {valueSections.map((values, key) => (
          <div className="gallery" key={'gallery-' + key}>
            {values.map((value, valueKey) => (
              <div
                key={'value-' + valueKey}
                className="tile"
                style={{ color: value.colors.primary.text, backgroundColor: value.colors.primary.background }}
              >
                <h3 className="subtitle">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
