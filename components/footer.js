import Link from 'next/link'
import Container from './container'

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/skills',
    label: 'Skills',
  },
]

const externalLinks = [
  {
    href: 'https://github.com/jacob-ebey',
    label: 'GitHub',
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-28 grid grid-cols-1 md:grid-cols-2">
          <div className="mb-4">
            <div className="text-2xl mb-4 text-gray-100">Navigation</div>
            <ul>
              {links.map(({ href, label }) => (
                <li key={href} className="my-2">
                  <Link href={href}>
                    <a className="hover:underline">{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-2xl mb-4 text-gray-100">Links</div>
            <ul>
              {externalLinks.map(({ href, label }) => (
                <li key={href} className="my-2">
                  <a
                    href={href}
                    rel="noopener noreferrer" target="_blank"
                    className="hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}