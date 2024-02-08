import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header container">
      <ul className="left">
        <li>
          <Link href="/">Shop</Link>
        </li>
        <li>
          <Link href="/">Where to find</Link>
        </li>
        <li>
          <Link href="/">Our story</Link>
        </li>
        <li>
          <Link href="/">Recipes</Link>
        </li>
      </ul>
      <div className="middle">
        <Link href="/about">
          <Image src="/logo2.png" alt="OxsFlavors Logo" width={100} height={24} priority />
        </Link>
      </div>
      <ul className="right">
        <li>
          <button className="button">
            Cart{' '}
            <span className="badge">
              <div className="content">
                <span>6</span>
              </div>
            </span>
          </button>
        </li>
      </ul>
    </header>
  )
}
