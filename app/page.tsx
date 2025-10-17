

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Profile */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden bg-muted">
                <img src="/z6215793032195_fe07755bb356595bb66d3caf71c7b30e.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
                  Welcome to my space
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a lifestyle enthusiast passionate about creating intentional spaces, sharing meaningful stories,
                  and inspiring others to live their best lives.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What I Share</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Home tours and interior design inspiration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Personal stories and life lessons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Productivity tips and wellness insights</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-balance">featured posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Tour our Living Room & Lounge | Modern, Minimal, and Cozy",
                image: "/modern-living-room.png",
                slug: "living-room-tour",
              },
              {
                id: 2,
                title: "Full Kitchen Tour | Intentional Organization, Design Inspo, & Favorite Products",
                image: "/kitchen-interior-design.jpg",
                slug: "kitchen-tour",
              },
              {
                id: 3,
                title: "2025 Home Office Tour | Cozy, Productive, & Aesthetic Setup",
                image: "/home-office-workspace.png",
                slug: "home-office-tour",
              },
            ].map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-lg bg-muted h-64">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </section> */}

        {/* Newsletter Section */}
        <section className="bg-primary text-primary-foreground py-16 mt-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4 text-balance">Tham gia cùng tôi</h2>
            <p className="text-lg mb-8 opacity-90">
            Nhận cảm hứng hàng tuần, những bài học hay về code.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary"
                required
              />  
              <button
                type="submit"
                className="px-6 py-3 bg-foreground text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
