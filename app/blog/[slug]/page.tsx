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
  <p>Java là một ngôn ngữ lập trình bậc cao, hướng đối tượng, được phát hành lần đầu bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995. Java được thiết kế với triết lý “<strong>Write Once, Run Anywhere</strong>” (WORA), nhờ vào việc biên dịch mã nguồn thành <em>bytecode</em>, sau đó chạy trên <strong>Java Virtual Machine</strong> (JVM) — một máy ảo có sẵn trên nhiều hệ điều hành.</p>

  <h3>Vì sao nên học Java?</h3>
  <p>Java có cú pháp rõ ràng, gần gũi với C/C++ nhưng đơn giản hơn, rất phù hợp cho người mới bắt đầu. Ngoài ra:</p>
  <ul>
    <li>Được dùng rộng rãi trong doanh nghiệp (Spring Boot, Hibernate…)</li>
    <li>Là nền tảng chính cho phát triển Android (trước khi Kotlin phổ biến)</li>
    <li>Có hệ sinh thái thư viện khổng lồ và cộng đồng hỗ trợ mạnh</li>
    <li>Hỗ trợ đa luồng (multithreading), quản lý bộ nhớ tự động (garbage collection)</li>
  </ul>

  <h3>Ví dụ "Hello World" trong Java</h3>
  <pre><code class="language-java">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
  <p>Chỉ cần lưu file này dưới tên <code>HelloWorld.java</code>, biên dịch bằng <code>javac HelloWorld.java</code>, rồi chạy bằng <code>java HelloWorld</code>.</p>

  <h3>Ứng dụng thực tế</h3>
  <p>Java xuất hiện trong:
    <ul>
      <li>Hệ thống ngân hàng (giao dịch an toàn, ổn định)</li>
      <li>Backend của các nền tảng lớn như LinkedIn, Amazon</li>
      <li>Các công cụ DevOps như Jenkins, Maven</li>
    </ul>
  </p>

  <h3>Tóm gọn</h3>
  <p>Nếu bạn muốn làm backend, hệ thống doanh nghiệp, hoặc tìm hiểu nền tảng lập trình vững chắc — Java là lựa chọn lý tưởng để bắt đầu.</p>
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
  <p>OOP (Object-Oriented Programming) là mô hình lập trình dựa trên “đối tượng” — kết hợp dữ liệu (thuộc tính) và hành vi (phương thức). Java là ngôn ngữ <strong>100% hướng đối tượng</strong>: mọi thứ đều nằm trong class.</p>

  <h3>Bốn trụ cột của OOP</h3>
  <ol>
    <li><strong>Đóng gói (Encapsulation)</strong>: Ẩn thông tin bên trong, chỉ cho phép truy cập qua phương thức công khai.</li>
    <li><strong>Kế thừa (Inheritance)</strong>: Lớp con kế thừa thuộc tính/phương thức từ lớp cha.</li>
    <li><strong>Đa hình (Polymorphism)</strong>: Cùng một phương thức có thể hoạt động khác nhau tùy đối tượng.</li>
    <li><strong>Trừu tượng (Abstraction)</strong>: Tập trung vào “gì” thay vì “như thế nào”.</li>
  </ol>

  <h3>Ví dụ minh họa</h3>
  <pre><code class="language-java">// Lớp cha
abstract class Animal {
    abstract void makeSound();
}

// Lớp con
class Dog extends Animal {
    void makeSound() {
        System.out.println("Gâu gâu!");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meo meo!");
    }
}

// Sử dụng đa hình
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.makeSound(); // Gâu gâu!
        myCat.makeSound(); // Meo meo!
    }
}</code></pre>

  <h3>Tại sao phải hiểu OOP?</h3>
  <p>OOP giúp bạn:
    <ul>
      <li>Viết code dễ bảo trì, mở rộng</li>
      <li>Giảm trùng lặp nhờ kế thừa và tái sử dụng</li>
      <li>Mô phỏng thế giới thực một cách tự nhiên</li>
    </ul>
  </p>
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
    <p>Khi làm việc với Java, bạn sẽ gặp ba thành phần cốt lõi:</p>
    <ul>
      <li><strong>JVM</strong> (Java Virtual Machine): Máy ảo thực thi bytecode. Đây là lý do Java “chạy mọi nơi”.</li>
      <li><strong>JRE</strong> (Java Runtime Environment): Bao gồm JVM + thư viện chuẩn (java.lang, java.util…). Dùng để <em>chạy</em> ứng dụng Java.</li>
      <li><strong>JDK</strong> (Java Development Kit): Bao gồm JRE + công cụ phát triển (javac, jar, jconsole…). Dùng để <em>viết và biên dịch</em> ứng dụng.</li>
    </ul>
  
    <h3>So sánh trực quan</h3>
    <pre>
    JDK = JRE + Công cụ phát triển (javac, debugger…)
    JRE = JVM + Thư viện Java
    </pre>
  
    <h3>Ví dụ thực tế</h3>
    <p>Giả sử bạn tải Java từ Oracle:
      <ul>
        <li>Nếu bạn là <strong>người dùng cuối</strong> (chỉ chạy ứng dụng): cài JRE.</li>
        <li>Nếu bạn là <strong>lập trình viên</strong>: bắt buộc cài JDK.</li>
      </ul>
    </p>
  
    <h3>Kiểm tra phiên bản trên máy</h3>
    <pre><code class="language-bash"># Kiểm tra JDK (nếu đã cài)
  javac -version
  
  # Kiểm tra JRE/JVM
  java -version
  </code></pre>
  
    <h3>Kết luận</h3>
    <p>Nhớ quy tắc: <strong>JDK để phát triển, JRE để chạy, JVM để thực thi</strong>. Hiểu rõ điều này giúp bạn tránh lỗi “command not found” hoặc “class not found” khi cấu hình môi trường.</p>
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
  <p>Thay vì dùng mảng tĩnh, Java cung cấp <strong>Collections Framework</strong> — bộ thư viện mạnh mẽ để lưu trữ và thao tác dữ liệu động.</p>

  <h3>Ba giao diện chính</h3>
  <table border="1" cellpadding="8">
    <tr><th>Giao diện</th><th>Đặc điểm</th><th>Lớp triển khai phổ biến</th></tr>
    <tr><td>List</td><td>Có thứ tự, cho phép trùng lặp</td><td>ArrayList, LinkedList</td></tr>
    <tr><td>Set</td><td>Không trùng lặp</td><td>HashSet, TreeSet</td></tr>
    <tr><td>Map</td><td>Lưu theo cặp key-value</td><td>HashMap, TreeMap</td></tr>
  </table>

  <h3>Ví dụ sử dụng</h3>
  <pre><code class="language-java">import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        // List
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        System.out.println(fruits); // [Apple, Banana]

        // Set
        Set<Integer> numbers = new HashSet<>();
        numbers.add(10);
        numbers.add(10); // Bị bỏ qua
        System.out.println(numbers); // [10]

        // Map
        Map<String, Integer> ages = new HashMap<>();
        ages.put("Phuc", 22);
        ages.put("Lan", 21);
        System.out.println(ages.get("Phuc")); // 22
    }
}</code></pre>

  <h3>Lời khuyên</h3>
  <ul>
    <li>Dùng <code>ArrayList</code> nếu cần truy cập theo chỉ số nhanh.</li>
    <li>Dùng <code>HashSet</code> nếu chỉ quan tâm đến sự tồn tại (không trùng).</li>
    <li>Dùng <code>HashMap</code> để tra cứu theo khóa — hiệu suất O(1) trung bình.</li>
  </ul>
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
  <p>Exception là sự kiện bất thường làm gián đoạn luồng chương trình, ví dụ: chia cho 0, file không tồn tại, mạng lỗi… Java phân loại exception thành hai nhóm:</p>

  <h3>1. Checked Exception</h3>
  <p>Bắt buộc phải xử lý hoặc khai báo <code>throws</code>. Ví dụ: <code>IOException</code>, <code>SQLException</code>.</p>

  <h3>2. Unchecked Exception</h3>
  <p>Không bắt buộc xử lý, thường do lỗi logic: <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>.</p>

  <h3>Ví dụ xử lý exception</h3>
  <pre><code class="language-java">import java.io.*;

public class FileRead {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("data.txt");
            BufferedReader reader = new BufferedReader(file);
            System.out.println(reader.readLine());
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("File không tồn tại!");
        } catch (IOException e) {
            System.out.println("Lỗi khi đọc file!");
        } finally {
            System.out.println("Hoàn tất thao tác.");
        }
    }
}</code></pre>

  <h3>Best practices</h3>
  <ul>
    <li>Không bắt <code>catch (Exception e)</code> chung chung.</li>
    <li>Log lỗi thay vì chỉ in ra console.</li>
    <li>Dọn dẹp tài nguyên trong <code>finally</code> hoặc dùng <em>try-with-resources</em>.</li>
  </ul>

  <h3>Kết luận</h3>
  <p>Xử lý exception đúng cách giúp ứng dụng không crash và dễ debug. Đây là kỹ năng bắt buộc cho lập trình viên Java chuyên nghiệp.</p>
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
  <p>JavaScript (JS) là ngôn ngữ lập trình <strong>client-side</strong> chạy trực tiếp trên trình duyệt, dùng để tạo tương tác động cho trang web: thay đổi nội dung, phản hồi click, gửi dữ liệu không cần tải lại trang.</p>

  <h3>Tại sao JavaScript thống trị web?</h3>
  <ul>
    <li>Là ngôn ngữ <strong>duy nhất</strong> trình duyệt hiểu (bên cạnh HTML/CSS)</li>
    <li>Hệ sinh thái khổng lồ: React, Vue, Angular, Node.js, Express, Next.js…</li>
    <li>Hỗ trợ lập trình hàm, hướng đối tượng, bất đồng bộ</li>
    <li>Có thể dùng cả frontend lẫn backend (Node.js)</li>
  </ul>

  <h3>Ví dụ đơn giản</h3>
  <pre><code class="language-html"><button onclick="alert('Xin chào!')">Click tôi</button></code></pre>

  <p>Hoặc dùng JS thuần:</p>
  <pre><code class="language-javascript">document.querySelector('button').addEventListener('click', () => {
  console.log('Bạn đã click!');
});</code></pre>

  <h3>Ứng dụng thực tế</h3>
  <ul>
    <li>Frontend: React, Vue để xây dựng giao diện phức tạp</li>
    <li>Backend: Node.js + Express để làm API</li>
    <li>Mobile: React Native</li>
    <li>Desktop: Electron (VS Code, Discord)</li>
  </ul>

  <h3>Kết luận</h3>
  <p>Nếu bạn muốn làm web — dù frontend, backend hay full-stack — JavaScript là ngôn ngữ <strong>không thể bỏ qua</strong>.</p>
`
  },

  "dom-trong-javascript": {
    title: "DOM trong JavaScript – Hiểu bản chất để thao tác web",
    date: "17/10/2025",
    category: "JavaScript",
    author: "Phuc Nguyen",
    image: "/Javascript-là-gì-3.jpg",
    content: `
  <h2>DOM là gì?</h2>
  <p>Khi trình duyệt tải HTML, nó tạo ra một cây đối tượng gọi là <strong>Document Object Model</strong> (DOM). Mỗi thẻ HTML là một <em>node</em> trong cây này. JavaScript có thể truy cập và thay đổi DOM để làm giao diện “sống động”.</p>

  <h3>Truy cập phần tử DOM</h3>
  <pre><code class="language-javascript">// Lấy phần tử theo ID
const title = document.getElementById('main-title');

// Lấy theo class
const buttons = document.getElementsByClassName('btn');

// Lấy theo selector CSS (phổ biến nhất)
const header = document.querySelector('header');
const allLinks = document.querySelectorAll('a');</code></pre>

  <h3>Thay đổi nội dung và thuộc tính</h3>
  <pre><code class="language-javascript">const p = document.querySelector('p');
p.textContent = 'Nội dung mới!'; // Thay văn bản
p.innerHTML = '<strong>In đậm!</strong>'; // Thay HTML

// Thay đổi thuộc tính
const img = document.querySelector('img');
img.src = '/new-image.jpg';
img.alt = 'Ảnh mới';</code></pre>

  <h3>Tạo và thêm phần tử mới</h3>
  <pre><code class="language-javascript">const newDiv = document.createElement('div');
newDiv.textContent = 'Tôi là phần tử mới!';
document.body.appendChild(newDiv);</code></pre>

  <h3>Lưu ý hiệu năng</h3>
  <p>Thao tác DOM tốn kém. Tránh:
    <ul>
      <li>Truy cập DOM trong vòng lặp</li>
      <li>Thay đổi style từng thuộc tính (dùng class CSS thay vì <code>element.style.color = ...</code>)</li>
    </ul>
  </p>

  <h3>Kết luận</h3>
  <p>DOM là cầu nối giữa HTML và JavaScript. Hiểu DOM giúp bạn xây dựng giao diện tương tác mượt mà và hiệu quả.</p>
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
  <p>Event là hành động xảy ra trên trang web: click, nhập liệu, di chuột, submit form… JavaScript có thể “lắng nghe” và phản hồi các sự kiện này.</p>

  <h3>Đăng ký sự kiện</h3>
  <pre><code class="language-javascript">const button = document.querySelector('#myBtn');

// Cách 1: addEventListener (khuyến khích)
button.addEventListener('click', function() {
  alert('Đã click!');
});

// Cách 2: gán trực tiếp (ít dùng)
button.onclick = function() { ... };</code></pre>

  <h3>Ví dụ: Form validation</h3>
  <pre><code class="language-javascript">const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const email = document.querySelector('#email').value;
  if (!email.includes('@')) {
    e.preventDefault(); // Ngăn gửi form
    alert('Email không hợp lệ!');
  }
});</code></pre>

  <h3>Event delegation (ủy quyền sự kiện)</h3>
  <p>Khi có nhiều phần tử con (ví dụ danh sách), thay vì gắn listener cho từng cái, hãy gắn vào phần tử cha:</p>
  <pre><code class="language-javascript">document.querySelector('#todo-list').addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove(); // Xóa todo item
  }
});</code></pre>

  <h3>Kết luận</h3>
  <p>Sự kiện là trái tim của trải nghiệm người dùng trên web. Biết cách lắng nghe, xử lý và ủy quyền sự kiện giúp bạn xây dựng ứng dụng tương tác mạnh mẽ và hiệu quả.</p>
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
  <p>Nhiều tác vụ như gọi API, đọc file, hoặc chờ người dùng không thể “chặn” luồng chính. JavaScript xử lý chúng bằng cơ chế <strong>bất đồng bộ</strong> (asynchronous).</p>

  <h3>1. Callback (cũ, dễ rối)</h3>
  <pre><code class="language-javascript">function fetchData(callback) {
  setTimeout(() => {
    callback('Dữ liệu từ server');
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});</code></pre>

  <h3>2. Promise (rõ ràng hơn)</h3>
  <pre><code class="language-javascript">function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Dữ liệu từ server');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));</code></pre>

  <h3>3. Async/Await (hiện đại, dễ đọc)</h3>
  <pre><code class="language-javascript">async function loadUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error('Lỗi:', error);
  }
}

loadUserData();</code></pre>

  <h3>So sánh</h3>
  <ul>
    <li><strong>Callback</strong>: dễ dẫn đến “callback hell” khi lồng nhiều lớp.</li>
    <li><strong>Promise</strong>: hỗ trợ chaining, dễ xử lý lỗi hơn.</li>
    <li><strong>Async/Await</strong>: viết như code đồng bộ, dễ debug, hỗ trợ try/catch.</li>
  </ul>

  <h3>Kết luận</h3>
  <p>Trong dự án hiện đại, hãy ưu tiên dùng <code>async/await</code>. Nhưng vẫn cần hiểu Promise vì nhiều thư viện vẫn trả về Promise.</p>
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
          <h1 
            style={{ fontFamily: '"Times New Roman", serif' }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            Post not found
          </h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Quay lại
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
            style={{ fontFamily: '"Times New Roman", serif' }}
          >
            <ChevronLeft size={20} />
            Quay lại
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
            <h1 
              style={{ fontFamily: '"Times New Roman", serif' }}
              className="text-5xl font-bold text-foreground mb-4 text-balance"
            >
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">By {post.author}</p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <div
              className="space-y-6 text-muted-foreground leading-relaxed"
              style={{ fontFamily: '"Times New Roman", serif' }}
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<h2>/g, '<h2 style="font-family: &quot;Times New Roman&quot;, serif;" class="text-3xl font-bold text-foreground mt-8 mb-4">')
                  .replace(/<h3>/g, '<h3 style="font-family: &quot;Times New Roman&quot;, serif;" class="text-2xl font-bold text-foreground mt-6 mb-3">')
                  .replace(/<p>/g, '<p class="mb-4">'),
              }}
            />
          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0">
                <img
                  src="/z6215793032195_fe07755bb356595bb66d3caf71c7b30e.jpg"
                  alt={post.author}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h3 
                  style={{ fontFamily: '"Times New Roman", serif' }}
                  className="font-semibold text-foreground mb-2"
                >
                  {post.author}
                </h3>
                <p className="text-muted-foreground">
                  Chia sẽ kinh nghiệm học lập trình.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 
              style={{ fontFamily: '"Times New Roman", serif' }}
              className="text-2xl font-bold text-foreground mb-8"
            >
              Các bài khác
            </h3>
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