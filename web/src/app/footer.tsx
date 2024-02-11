import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerRow container">
        <ul className="footerLinks">
          <li>© 2024 OxsFlavors</li>
          <li>
            <Link className="link" href="https://maps.app.goo.gl/deTHk2Euinkho3Pq6">
              GLOWFISH 92/4, Floor 2, Sathorn Thani 2 Building,
              <br />
              North Sathorn Road, Silom, Bang Rak,
              <br />
              Bangkok 10500
            </Link>
          </li>
        </ul>
        <div className="footerRow">
          <div className="footerLinks">
            <h4 className="smallTitle">Help</h4>
            <ul className="list">
              <li>
                <Link className="link" href="mailto:afrokiz.bkk@gmail.com">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="link" href="/help#transfer">
                  How to transfer my ticket?
                </Link>
              </li>
              <li>
                <Link className="link" href="/help#confirmation">
                  I haven&apos;t received my confirmation booking
                </Link>
              </li>
              <li>
                <Link className="link" href="/help#payment">
                  My payment has issues
                </Link>
              </li>
              <li>
                <Link className="link" href="/help#hotel">
                  What hotel is recommended?
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerLinks">
            <h4 className="smallTitle">Social</h4>
            <ul className="list">
              <li>
                <Link className="link" href="https://www.facebook.com/afrokizbkk" target="_blank">
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="link" href="https://www.instagram.com/afrokizbkk/" target="_blank">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
