export function Footer() {
  return (
    <footer className="bg-[#8B6E4F] border-t border-[#7A5D3E] mt-20 text-white"> {/* 👈 Màu nâu đất */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">DuckThunder</h3>
            <p className="text-sm text-gray-300">
              Chia sẻ kinh nghiệm học lập trình.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#7A5D3E] pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Lifestyle Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}