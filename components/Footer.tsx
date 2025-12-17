import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-card border-t border-white/40 mt-20">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold gradient-text">Polypo</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI Size & Fit Intelligence for Fashion & Beauty
            </p>
            <p className="text-xs text-gray-500">© {currentYear} Polypo</p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900">Follow Us</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
