

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const blogPostsData: Record<string, any> = {
  "gioi-thieu-java": {
    title: "Giới thiệu Java – Ngôn ngữ lập trình hướng đối tượng phổ biến",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
      <h2>Java là gì và có điểm mạnh ra sao?</h2>
      <p>Java là một ngôn ngữ lập trình bậc cao, được thiết kế để an toàn, ổn định và dễ di chuyển giữa các nền tảng. Điểm nổi bật nhất của Java là mô hình "Write Once, Run Anywhere" — tức chương trình Java biên dịch thành bytecode và chạy trên JVM (Java Virtual Machine), nhờ đó cùng một mã nguồn có thể chạy trên Windows, macOS hay Linux mà không cần sửa đổi lớn.</p>
      <h3>Vì sao nên học Java?</h3>
      <p>Java phù hợp cho người mới học lập trình vì cú pháp rõ ràng, tư duy OOP (hướng đối tượng) được áp dụng xuyên suốt và cộng đồng lớn. Ngoài ra, Java được dùng rộng rãi ở ứng dụng doanh nghiệp, backend, hệ thống ngân hàng và đặc biệt là phát triển ứng dụng Android truyền thống.</p>
      <h3>Ứng dụng thực tế</h3>
      <p>Bạn sẽ gặp Java trong các hệ thống xử lý giao dịch lớn, các dịch vụ web, ứng dụng server-side, và cả trong các công cụ học máy khi cần tính ổn định. Học Java giúp bạn nắm vững nguyên lý lập trình, quản lý bộ nhớ cơ bản và cách thiết kế phần mềm theo mô-đun.</p>
      <h3>Tóm gọn</h3>
      <p>Nếu mục tiêu của bạn là làm backend, hệ thống doanh nghiệp hoặc phát triển Android, Java là lựa chọn rất tốt. Bắt đầu từ những khái niệm cơ bản sẽ giúp bạn tiến lên nhanh hơn ở các chủ đề nâng cao sau này.</p>
    `
  },

  "oop-trong-java": {
    title: "OOP trong Java là gì? Tại sao lập trình viên phải hiểu rõ?",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
      <h2>Những khái niệm cơ bản của OOP</h2>
      <p>Lập trình hướng đối tượng (OOP) là cách tổ chức chương trình bằng các đối tượng — mỗi đối tượng kết hợp dữ liệu và hành vi. Trong Java, OOP là triết lý nền tảng: tất cả đều là lớp (class) và đối tượng (object). Bốn tính chất quan trọng gồm: đóng gói (encapsulation), kế thừa (inheritance), đa hình (polymorphism), và trừu tượng (abstraction).</p>
      <h3>Đóng gói và lợi ích</h3>
      <p>Đóng gói giúp nhóm dữ liệu và phương thức xử lý dữ liệu vào cùng một lái, hạn chế truy cập trực tiếp từ bên ngoài và tăng tính an toàn. Điều này giúp giảm rủi ro khi sửa đổi phần bên trong mà không ảnh hưởng tới phần khác.</p>
      <h3>Kế thừa và đa hình</h3>
      <p>Kế thừa cho phép tái sử dụng mã bằng cách cho lớp con dùng thuộc tính và phương thức của lớp cha. Đa hình giúp cùng một phương thức được gọi khác nhau tùy loại đối tượng, giúp viết mã linh hoạt và mở rộng dễ dàng.</p>
      <h3>Tại sao phải hiểu OOP?</h3>
      <p>Hiểu OOP là chìa khóa để thiết kế hệ thống dễ bảo trì, dễ mở rộng. Khi bạn đọc hoặc viết mã Java cho dự án lớn, kiến thức OOP giúp bạn phân tách nhiệm vụ thành các mô-đun rõ ràng và giảm lỗi khi thay đổi yêu cầu.</p>
    `
  },

  "jdk-jre-jvm": {
    title: "Sự khác nhau giữa JDK, JRE và JVM",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
      <h2>Khái niệm cơ bản</h2>
      <p>Khi làm việc với Java, bạn sẽ gặp ba thuật ngữ thường xuyên: JVM, JRE và JDK. JVM (Java Virtual Machine) là môi trường ảo chịu trách nhiệm chạy bytecode. JRE (Java Runtime Environment) bao gồm JVM và các thư viện cần thiết để chạy ứng dụng Java. JDK (Java Development Kit) là bộ công cụ dành cho lập trình viên, bao gồm JRE, trình biên dịch và các công cụ phát triển.</p>
      <h3>Khi nào dùng JDK, khi nào dùng JRE?</h3>
      <p>Nếu bạn chỉ cần chạy ứng dụng Java đã có sẵn trên máy, cài JRE là đủ. Nhưng nếu bạn lập trình, biên dịch hoặc đóng gói ứng dụng, bạn phải cài JDK vì nó chứa công cụ như javac (trình biên dịch) và jar (đóng gói ứng dụng).</p>
      <h3>Tại sao cần hiểu sự khác nhau này?</h3>
      <p>Hiểu rõ JDK/JRE/JVM giúp bạn cấu hình môi trường phát triển đúng cách, giải quyết lỗi cài đặt và biết cần cài thứ gì trên server hoặc máy phát triển. Đây là kiến thức cơ bản nhưng rất thực tế cho người bắt đầu học Java.</p>
      <h3>Kết luận</h3>
      <p>Nhớ: JDK để phát triển, JRE để chạy, JVM để thực thi. Nắm được điều này giúp tránh nhầm lẫn khi thiết lập dự án Java.</p>
    `
  },

  "java-collections-framework": {
    title: "Java Collections là gì? Hiểu đúng để dùng hiệu quả",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
      <h2>Giới thiệu Java Collections</h2>
      <p>Collections là bộ thư viện trong Java để lưu trữ và thao tác tập hợp dữ liệu: danh sách, tập hợp và ánh xạ. Thay vì tự quản lý mảng thủ công, Collections cung cấp cấu trúc sẵn có như List, Set và Map, giúp code rõ ràng và an toàn hơn.</p>
      <h3>List, Set và Map khác nhau thế nào?</h3>
      <p>List lưu trữ phần tử theo thứ tự và cho phép trùng lặp (ví dụ ArrayList). Set lưu trữ phần tử không trùng lặp (ví dụ HashSet). Map lưu trữ theo cặp key-value, thuận tiện khi tra cứu theo khóa (ví dụ HashMap).</p>
      <h3>Khi nào dùng từng loại?</h3>
      <p>Nếu cần duy trì thứ tự và truy cập theo chỉ số, dùng List. Nếu cần loại bỏ trùng lặp, dùng Set. Nếu cần ánh xạ khóa tới giá trị, dùng Map. Lựa chọn đúng giúp chương trình chạy hiệu quả và mã dễ hiểu hơn.</p>
      <h3>Lời khuyên thực tế</h3>
      <p>Nắm vững Collections là bước quan trọng trước khi học cấu trúc dữ liệu nâng cao hoặc các framework như Spring. Hãy thực hành với các tác vụ phổ biến: thêm, xóa, tìm kiếm và duyệt qua tập hợp để thấy ưu/nhược điểm của từng loại.</p>
    `
  },

  "exception-trong-java": {
    title: "Exception trong Java – Xử lý lỗi đúng cách",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
      <h2>Exception là gì?</h2>
      <p>Exception (ngoại lệ) là sự kiện xảy ra trong quá trình chạy chương trình khiến luồng thực thi bị gián đoạn, ví dụ lỗi chia cho 0, không tìm thấy file, hoặc lỗi kết nối mạng. Java cung cấp cơ chế để bắt và xử lý ngoại lệ nhằm giữ cho chương trình hoạt động an toàn hơn.</p>
      <h3>Checked vs Unchecked Exception</h3>
      <p>Java phân biệt exception có kiểm tra (checked) và không kiểm tra (unchecked). Checked exception yêu cầu xử lý hoặc khai báo throws, phù hợp cho lỗi do I/O hay mạng. Unchecked exception (ví dụ NullPointerException) phát sinh do lỗi logic và không bắt buộc khai báo.</p>
      <h3>Nguyên tắc xử lý lỗi</h3>
      <p>Sử dụng try-catch để bắt lỗi tại nơi có thể xử lý hợp lý; dùng finally để giải phóng tài nguyên. Tránh bắt quá chung chung (catch Exception) nếu bạn không xử lý được từng loại, vì điều đó che khuất lỗi thực sự.</p>
      <h3>Kết luận</h3>
      <p>Xử lý ngoại lệ đúng cách làm tăng độ ổn định và khả năng gỡ lỗi cho ứng dụng. Học cách phân loại exception và biết khi nào nên ném tiếp (rethrow) hay xử lý ngay là kỹ năng quan trọng của lập trình viên Java.</p>
    `
  },

  "javascript-la-gi": {
    title: "JavaScript là gì? Tại sao ngôn ngữ này thống trị Frontend?",
    date: "17/10/2025",
    category: "JavaScript",
    author: "Phuc Nguyen",
    image: "/Javascript-là-gì-3.jpg",
    content: `
      <h2>Khái niệm cơ bản về JavaScript</h2>
      <p>JavaScript là ngôn ngữ kịch bản chủ yếu chạy trên trình duyệt, dùng để làm cho trang web tương tác: thay đổi nội dung, phản hồi sự kiện người dùng, và kết nối với server qua API. Ngôn ngữ này đã phát triển mạnh và giờ đây còn chạy trên server (Node.js) và nhiều nền tảng khác.</p>
      <h3>Tại sao JavaScript quan trọng?</h3>
      <p>Vì trình duyệt chỉ hiểu HTML, CSS và JavaScript để làm web động, nên bất kỳ ai muốn làm frontend đều phải biết JS. Ngoài ra, hệ sinh thái khổng lồ (framework như React, Vue, Angular) giúp phát triển giao diện nhanh và dễ bảo trì.</p>
      <h3>Ứng dụng ngoài trình duyệt</h3>
      <p>Nhờ Node.js, JavaScript có thể chạy trên server, làm scripting, xây dựng công cụ phát triển, hoặc phát triển ứng dụng di động với các framework đa nền tảng. Điều này khiến JS trở thành ngôn ngữ linh hoạt cho nhiều mục đích.</p>
      <h3>Kết luận</h3>
      <p>Nếu bạn hướng đến web, bắt đầu với JavaScript là bước thiết yếu. Sau khi nắm vững nền tảng, bạn có thể chọn sâu vào frontend hoặc mở rộng sang backend với Node.js.</p>
    `
  },

  "dom-trong-javascript": {
    title: "DOM trong JavaScript – Hiểu bản chất để thao tác web",
    date: "17/10/2025",
    category: "JavaScript",
    author: "Phuc Nguyen",
    image: "/Javascript-là-gì-3.jpg",
    content: `
      <h2>DOM là gì và vì sao nó quan trọng?</h2>
      <p>DOM (Document Object Model) là mô hình đối tượng biểu diễn cấu trúc HTML của trang web. Mỗi phần tử HTML được coi là một nút (node) trong cây DOM, và JavaScript có thể truy cập, thay đổi hoặc xóa các nút này để làm thay đổi giao diện người dùng động.</p>
      <h3>Ví dụ về ứng dụng DOM</h3>
      <p>Bạn có thể dùng DOM để cập nhật nội dung khi người dùng nhập, thêm hoặc xóa phần tử, thay đổi kiểu dáng, hoặc điều khiển hiển thị popup. Hiểu cấu trúc DOM giúp bạn xử lý sự kiện và tối ưu thao tác DOM (giảm reflow/repaint) để trang chạy mượt hơn.</p>
      <h3>Lưu ý khi thao tác DOM</h3>
      <p>Tránh thao tác DOM quá nhiều lần liên tiếp; thay vào đó, gom các thay đổi hoặc dùng fragment để chèn nhiều phần tử cùng lúc. Ngoài ra, cân nhắc sử dụng framework (React, Vue) nếu ứng dụng phức tạp để quản lý trạng thái và cập nhật DOM hiệu quả hơn.</p>
      <h3>Kết luận</h3>
      <p>DOM là nền tảng của mọi tương tác frontend. Nắm vững cách truy cập, thay đổi và tối ưu DOM là kỹ năng cơ bản cần có cho lập trình viên web.</p>
    `
  },

  "event-trong-javascript": {
    title: "Event trong JavaScript – Cách tương tác với hành vi người dùng",
    date: "17/10/2025",
    category: "JavaScript",
    author: "Phuc Nguyen",
    image: "/Javascript-là-gì-3.jpg",
    content: `
      <h2>Sự kiện (Event) là gì?</h2>
      <p>Sự kiện là hành động xảy ra trên trang web như click, nhập liệu, di chuyển chuột hoặc gửi form. JavaScript lắng nghe các sự kiện này và thực hiện hàm xử lý (handler) tương ứng, giúp ứng dụng phản hồi và tương tác với người dùng.</p>
      <h3>Cách lắng nghe sự kiện</h3>
      <p>Thông thường ta dùng phương thức để đăng ký hàm xử lý lên phần tử cần quan tâm. Việc đặt event listener đúng chỗ và dọn dẹp khi không cần thiết giúp tránh rò rỉ bộ nhớ và lỗi không mong muốn.</p>
      <h3>Quản lý sự kiện phức tạp</h3>
      <p>Khi ứng dụng lớn, quản lý nhiều listener có thể phức tạp. Kỹ thuật delegation (ủy quyền sự kiện) hữu ích — gắn listener lên phần tử cha để xử lý các event từ phần tử con, giảm số lượng listener cần thiết.</p>
      <h3>Kết luận</h3>
      <p>Hiểu cơ chế event và cách quản lý listener là nền tảng để xây dựng giao diện tương tác, mượt mà và dễ bảo trì. Đây là kỹ năng thiết yếu cho mọi lập trình viên frontend.</p>
    `
  },

  "promise-async-await": {
    title: "Callback, Promise và Async/Await – Tư duy xử lý bất đồng bộ",
    date: "17/10/2025",
    category: "JavaScript",
    author: "Phuc Nguyen",
    image: "/Javascript-là-gì-3.jpg",
    content: `
      <h2>Tại sao cần xử lý bất đồng bộ?</h2>
      <p>Nhiều tác vụ trong web như gọi API, đọc file hoặc chờ phản hồi người dùng là bất đồng bộ — không thể chặn toàn bộ chương trình. JavaScript cung cấp nhiều cách để xử lý: callback truyền thống, Promise, và cú pháp async/await.</p>
      <h3>Callback và vấn đề</h3>
      <p>Callback là cách đầu tiên để xử lý bất đồng bộ nhưng dễ dẫn đến "callback hell" khi có nhiều bước liên tiếp, khiến mã khó đọc và khó bảo trì.</p>
      <h3>Promise và async/await</h3>
      <p>Promise cải thiện luồng bằng cách đại diện cho một giá trị có thể có trong tương lai, cho phép chuỗi xử lý rõ ràng hơn. Async/await là cú pháp cao hơn, giúp viết mã bất đồng bộ trông như đồng bộ, dễ đọc và dễ bắt lỗi.</p>
      <h3>Kết luận</h3>
      <p>Hiểu từng cách tiếp cận và biết khi nào dùng Promise hay async/await sẽ giúp bạn viết code rõ ràng, dễ debug và phù hợp với ứng dụng thực tế.</p>
    `
  }
};

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = blogPostsData[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </Link>
        </div>

        {/* Featured Image */}
        <div className="w-full h-96 bg-muted overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">{post.category}</span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4 text-balance">{post.title}</h1>
            <p className="text-lg text-muted-foreground">By {post.author}</p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <div
              className="space-y-6 text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<h2>/g, '<h2 class="text-3xl font-serif font-bold text-foreground mt-8 mb-4">')
                  .replace(/<h3>/g, '<h3 class="text-2xl font-serif font-bold text-foreground mt-6 mb-3">')
                  .replace(/<p>/g, '<p class="mb-4">'),
              }}
            />
          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0">
                <img
                  src="/author-profile.png"
                  alt={post.author}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{post.author}</h3>
                <p className="text-muted-foreground">
                  A lifestyle enthusiast sharing stories, insights, and inspiration for intentional living.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">More Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(blogPostsData)
                .filter(([relatedSlug]) => relatedSlug !== slug)
                .slice(0, 2)
                .map(([slug, relatedPost]) => (
                  <Link key={slug} href={`/blog/${slug}`}>
                    <article className="group cursor-pointer">
                      <div className="mb-4 overflow-hidden rounded-lg bg-muted h-48">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
