

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
                <img src="/avt.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance" style={{ fontFamily: '"Times New Roman", serif' }}>
                  Nguyễn Hồng Phúc
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed" style={{ textAlign: 'justify' }}>
                  Là một sinh viên năm 4 chuyên ngành Công Nghệ Phần Mềm của trường Đại học Công Nghệ TP.Hồ Chí Minh Hutech. Tôi đam mê phát triển web và luôn nỗ lực học hỏi, rèn luyện không ngừng để trở thành một Full Stack Developer thực thụ. Tôi yêu thích việc tìm tòi, ứng dụng những công nghệ mới nhất vào thực tế, đồng thời tập trung xây dựng các ứng dụng web toàn diện — từ giao diện thân thiện, mượt mà đến hệ thống backend vững chắc — nhằm mang lại trải nghiệm người dùng tốt nhất.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Kỹ năng chuyên môn:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Html/css</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Java & JavaScript</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>ReactJs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Kỹ năng mềm:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Làm việc nhóm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Giao tiếp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Giải quyết các vấn đề logic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Kỹ năng quản lý thời gian</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Đọc bài viết
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-balance" style={{ fontFamily: '"Times New Roman", serif' }}>Bài viết nổi bật</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Giới thiệu Java – Ngôn ngữ lập trình hướng đối tượng phổ biến",
                image: "/cb88-java-logo-001.jpg",
                slug: "gioi-thieu-java",
              },
              {
                id: 2,
                title: "JavaScript là gì? Tại sao ngôn ngữ này thống trị Frontend?",
                image: "/Javascript-là-gì-3.jpg",
                slug: "javascript-la-gi",
              },
              {
                id: 3,
                title: "Event trong JavaScript – Cách tương tác với hành vi người dùng",
                image: "/Javascript-là-gì-3.jpg",
                slug: "promise-async-await",
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
        </section>

        {/* Newsletter Section */}
        {/* <section className="bg-primary text-primary-foreground py-16 mt-20">
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
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
