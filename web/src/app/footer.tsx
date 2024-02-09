export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer container">
        <ul className="footerLinks">
          <li>© 2024 OxsFlavors</li>
          <li>
            <a href="https://maps.app.goo.gl/deTHk2Euinkho3Pq6">
              GLOWFISH 92/4, Floor 2, Sathorn Thani 2 Building,
              <br />
              North Sathorn Road, Silom, Bang Rak,
              <br />
              Bangkok 10500
            </a>
          </li>
        </ul>
        <div className="footerRow">
          <div className="footerLinks">
            <h4 className="smallTitle">Help</h4>
            <ul className="list">
              <li>
                <a href="mailto:afrokiz.bkk@gmail.com">Contact Us</a>
              </li>
              <li>
                <a href="/help#transfer">How to transfer my ticket?</a>
              </li>
              <li>
                <a href="/help#confirmation">I haven&apos;t received my confirmation booking</a>
              </li>
              <li>
                <a href="/help#payment">My payment has issues</a>
              </li>
              <li>
                <a href="/help#hotel">What hotel is recommended?</a>
              </li>
            </ul>
          </div>
          <div className="footerLinks">
            <h4 className="smallTitle">Social</h4>
            <ul className="list">
              <li>
                <a href="https://www.facebook.com/afrokizbkk" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/afrokizbkk/" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
