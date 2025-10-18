
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Giới thiệu Java – Ngôn ngữ lập trình hướng đối tượng phổ biến" ,
    excerpt: "Tổng quan về lịch sử, đặc điểm và lý do Java được sử dụng rộng rãi trong phát triển phần mềm.",
    date: "17/10/2025",
    category: "Java",
    slug: "gioi-thieu-java",
    image: "/cb88-java-logo-001.jpg"
  },
  {
    id: 2,
    title: "OOP trong Java là gì? Tại sao lập trình viên phải hiểu rõ?",
    excerpt: "Giải thích khái niệm lập trình hướng đối tượng và vai trò của OOP trong Java.",
    date: "17/10/2025",
    category: "Java",
    slug: "oop-trong-java",
    image: "cb88-java-logo-001.jpg"
  },
  {
    id: 3,
    title: "Sự khác nhau giữa JDK, JRE và JVM",
    excerpt: "Phân biệt JDK, JRE, JVM và vai trò của từng thành phần trong Java.",
    date: "17/10/2025",
    category: "Java",
    slug: "jdk-jre-jvm",
    image: "cb88-java-logo-001.jpg"
  },
  {
    id: 4,
    title: "Java Collections là gì? Hiểu đúng để dùng hiệu quả",
    excerpt: "Giới thiệu Java Collections Framework và ứng dụng trong quản lý dữ liệu.",
    date: "17/10/2025",
    category: "Java",
    slug: "java-collections",
    image: "cb88-java-logo-001.jpg"
  },
  {
    id: 5,
    title: "Exception trong Java – Xử lý lỗi đúng cách",
    excerpt: "Khái niệm exception và cách xử lý lỗi tránh làm gián đoạn chương trình.",
    date: "17/10/2025",
    category: "Java",
    slug: "exception-trong-java",
    image: "cb88-java-logo-001.jpg"
  },
  {
    id: 6,
    title: "JavaScript là gì? Tại sao ngôn ngữ này thống trị Frontend?",
    excerpt: "Giới thiệu JavaScript và vai trò quan trọng của nó trong lập trình web.",
    date: "17/10/2025",
    category: "JavaScript",
    slug: "javascript-la-gi",
    image: "Javascript-là-gì-3.jpg"
  },
  {
    id: 7,
    title: "DOM trong JavaScript – Hiểu bản chất để thao tác web",
    excerpt: "Trình bày DOM và cách JavaScript dùng DOM để thay đổi nội dung trang web.",
    date: "17/10/2025",
    category: "JavaScript",
    slug: "dom-trong-javascript",
    image: "Javascript-là-gì-3.jpg"
  },
  {
    id: 8,
    title: "Event trong JavaScript – Cách tương tác với hành vi người dùng",
    excerpt: "Giải thích event trong JavaScript và cơ chế xử lý sự kiện trên trình duyệt.",
    date: "17/10/2025",
    category: "JavaScript",
    slug: "event-trong-javascript",
    image: "Javascript-là-gì-3.jpg"
  },
  {
    id: 9,
    title: "Callback, Promise và Async/Await – Tư duy xử lý bất đồng bộ",
    excerpt: "Tổng quan ba cách xử lý bất đồng bộ phổ biến trong JavaScript.",
    date: "17/10/2025",
    category: "JavaScript",
    slug: "bat-dong-bo-trong-javascript",
    image: "Javascript-là-gì-3.jpg"
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Blog Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-balance">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lập trình Java & JavaScript.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="mb-4 overflow-hidden rounded-lg bg-muted h-48">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{post.excerpt}</p>

                    <div className="mt-4 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Read More →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
