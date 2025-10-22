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
  <h2>Java là gì?</h2>
  <p>Java là một ngôn ngữ lập trình bậc cao, hướng đối tượng, được phát hành bởi Sun Microsystems vào năm 1995 (nay thuộc Oracle). Java được thiết kế với triết lý <strong>“Write Once, Run Anywhere” (WORA)</strong> — tức là mã nguồn Java sau khi biên dịch thành <em>bytecode</em> có thể chạy trên bất kỳ thiết bị nào có cài đặt <strong>Java Virtual Machine</strong> (JVM), mà không cần sửa đổi.</p>

  <h3>Tại sao Java lại “chạy mọi nơi”?</h3>
  <p>Khi bạn viết mã Java và biên dịch bằng <code>javac</code>, bạn không tạo ra mã máy (machine code) cho Windows hay macOS, mà là <strong>bytecode</strong> — một định dạng trung gian. JVM trên mỗi hệ điều hành sẽ <em>phiên dịch</em> hoặc <em>biên dịch JIT</em> (Just-In-Time) bytecode này thành mã máy phù hợp.</p>
  <p>→ Điều này giúp Java cực kỳ <strong>di động</strong> và <strong>ổn định</strong> qua nhiều nền tảng.</p>

  <h3>Ví dụ “Hello World” — phân tích từng phần</h3>
  <pre><code class="language-java">public class HelloWorld {          // 1. Tên class phải trùng tên file (HelloWorld.java)
    public static void main(String[] args) {  // 2. Phương thức main là điểm vào chương trình
        System.out.println("Hello, World!");  // 3. In ra console
    }
}</code></pre>

  <p><strong>Các bước chạy:</strong></p>
  <ol>
    <li>Lưu file dưới tên <code>HelloWorld.java</code></li>
    <li>Biên dịch: <code>javac HelloWorld.java</code> → tạo ra <code>HelloWorld.class</code> (bytecode)</li>
    <li>Chạy: <code>java HelloWorld</code> → JVM đọc <code>.class</code> và thực thi</li>
  </ol>

  <h3>Java dùng ở đâu trong thực tế?</h3>
  <ul>
    <li><strong>Backend doanh nghiệp</strong>: Spring Boot, Jakarta EE — được dùng bởi ngân hàng, bảo hiểm, logistics (ví dụ: ING, Goldman Sachs)</li>
    <li><strong>Android (truyền thống)</strong>: Trước khi Kotlin trở thành ngôn ngữ chính, Java là lựa chọn duy nhất</li>
    <li><strong>Công cụ DevOps</strong>: Jenkins, Maven, Gradle — đều viết bằng Java</li>
    <li><strong>Big Data</strong>: Hadoop, Apache Spark có API Java</li>
  </ul>

  <h3>Ưu điểm nổi bật</h3>
  <ul>
    <li><strong>An toàn bộ nhớ</strong>: Không có con trỏ (pointer) như C/C++, giảm lỗi tràn bộ nhớ</li>
    <li><strong>Garbage Collection</strong>: Tự động giải phóng bộ nhớ không dùng đến</li>
    <li><strong>Đa luồng (Multithreading)</strong>: Hỗ trợ xử lý song song ngay trong ngôn ngữ</li>
    <li><strong>Cộng đồng khổng lồ</strong>: Stack Overflow, GitHub, tài liệu chính thức phong phú</li>
  </ul>

  <h3>Nhược điểm</h3>
  <ul>
    <li>Khởi động chậm hơn so với ngôn ngữ biên dịch thuần (C++, Rust)</li>
    <li>Mức tiêu thụ RAM cao hơn do JVM</li>
  </ul>

  <h3>Lời khuyên cho người mới</h3>
  <p>Đừng vội học framework! Hãy nắm vững:
    <ul>
      <li>Cú pháp cơ bản (vòng lặp, điều kiện, mảng)</li>
      <li>OOP (class, object, inheritance, polymorphism)</li>
      <li>Collections và xử lý exception</li>
      <li>Cách dùng IDE (IntelliJ IDEA hoặc VS Code + Extension Pack for Java)</li>
    </ul>
  </p>

  <h3>Kết luận</h3>
  <p>Java không “hot trend” như JavaScript hay Python, nhưng vẫn là <strong>ngôn ngữ trụ cột</strong> trong thế giới doanh nghiệp. Học Java giúp bạn xây dựng tư duy lập trình vững chắc — nền tảng cho mọi ngôn ngữ khác.</p>
` 
  },

  "oop-trong-java": {
    title: "OOP trong Java là gì? Tại sao lập trình viên phải hiểu rõ?",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
  <h2>OOP là gì? Tại sao Java bắt buộc phải hiểu OOP?</h2>
  <p>Java là ngôn ngữ <strong>100% hướng đối tượng</strong>: mọi thứ đều là đối tượng, và mọi đoạn mã đều nằm trong class. OOP giúp bạn mô phỏng thế giới thực bằng code, đồng thời tổ chức chương trình theo cách <strong>dễ mở rộng, dễ bảo trì</strong>.</p>

  <h3>Bốn nguyên lý cốt lõi của OOP</h3>

  <h4>1. Đóng gói (Encapsulation)</h4>
  <p>Ẩn dữ liệu bên trong class, chỉ cho phép truy cập qua phương thức công khai (<code>getter/setter</code>). Điều này bảo vệ tính toàn vẹn dữ liệu.</p>
  <pre><code class="language-java">public class BankAccount {
    private double balance; // private → không truy cập trực tiếp từ ngoài

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public double getBalance() {
        return balance;
    }
}</code></pre>
  <p>→ Không ai có thể gán <code>account.balance = -1000</code>!</p>

  <h4>2. Kế thừa (Inheritance)</h4>
  <p>Cho phép lớp con tái sử dụng mã từ lớp cha, đồng thời mở rộng hoặc ghi đè hành vi.</p>
  <pre><code class="language-java">class Vehicle {
    protected String brand = "Ford";
    public void honk() {
        System.out.println("Tuut, tuut!");
    }
}

class Car extends Vehicle {
    private String modelName = "Mustang";
    // Car kế thừa brand và honk() từ Vehicle
}</code></pre>

  <h4>3. Đa hình (Polymorphism)</h4>
  <p>Cùng một phương thức có thể hoạt động khác nhau tùy vào đối tượng thực tế.</p>
  <pre><code class="language-java">Animal myPet = new Dog(); // Kiểu tham chiếu là Animal, nhưng đối tượng là Dog
myPet.makeSound(); // Gọi phương thức của Dog, không phải Animal
</code></pre>
  <p>→ Giúp viết code linh hoạt, dễ thay thế module.</p>

  <h4>4. Trừu tượng (Abstraction)</h4>
  <p>Ẩn chi tiết triển khai, chỉ để lại giao diện cần thiết. Dùng <code>abstract class</code> hoặc <code>interface</code>.</p>
  <pre><code class="language-java">interface Drawable {
    void draw(); // Không có thân hàm
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Vẽ hình tròn");
    }
}</code></pre>

  <h3>OOP trong dự án thực tế</h3>
  <p>Khi bạn dùng Spring Boot:
    <ul>
      <li>Mỗi service là một class → <strong>đóng gói</strong></li>
      <li>Repository kế thừa từ JpaRepository → <strong>kế thừa</strong></li>
      <li>Controller gọi service qua interface → <strong>trừu tượng + đa hình</strong></li>
    </ul>
  </p>

  <h3>Lỗi thường gặp</h3>
  <ul>
    <li>Lạm dụng kế thừa → tạo ra hệ thống cứng nhắc (nên ưu tiên <em>composition over inheritance</em>)</li>
    <li>Không đóng gói → dữ liệu bị thay đổi bừa bãi</li>
  </ul>

  <h3>Kết luận</h3>
  <p>OOP không chỉ là lý thuyết — nó là <strong>triết lý thiết kế</strong> giúp bạn viết phần mềm quy mô lớn. Hãy luyện tập bằng cách thiết kế hệ thống quản lý thư viện, cửa hàng, hoặc blog như bạn đang làm!</p>
`
  },

  "jdk-jre-jvm": {
    title: "Sự khác nhau giữa JDK, JRE và JVM",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
  <h2>Ba thành phần cốt lõi của hệ sinh thái Java</h2>
  <p>Nhiều người mới học Java thường nhầm lẫn giữa JDK, JRE và JVM. Hiểu rõ sự khác biệt giúp bạn cài đặt môi trường đúng và tránh lỗi “command not found” hoặc “class not found”.</p>

  <h3>1. JVM – Java Virtual Machine</h3>
  <p>Là <strong>máy ảo</strong> chịu trách nhiệm thực thi bytecode. JVM là phần <strong>phụ thuộc vào hệ điều hành</strong> (Windows, macOS, Linux có JVM riêng), nhưng bytecode thì không.</p>
  <p>→ Đây là nền tảng cho triết lý “Write Once, Run Anywhere”.</p>

  <h3>2. JRE – Java Runtime Environment</h3>
  <p>Bao gồm:
    <ul>
      <li>JVM</li>
      <li>Các thư viện chuẩn (java.lang, java.util, java.io…)</li>
      <li>Các file cấu hình cần thiết để chạy ứng dụng Java</li>
    </ul>
  </p>
  <p>→ Dùng khi bạn chỉ cần <strong>chạy</strong> ứng dụng Java (ví dụ: mở phần mềm đã build sẵn).</p>

  <h3>3. JDK – Java Development Kit</h3>
  <p>Bao gồm:
    <ul>
      <li>JRE</li>
      <li>Trình biên dịch <code>javac</code></li>
      <li>Trình gỡ lỗi <code>jdb</code></li>
      <li>Công cụ đóng gói <code>jar</code></li>
      <li>JavaDoc, JConsole, và nhiều công cụ phát triển khác</li>
    </ul>
  </p>
  <p>→ Bắt buộc phải cài nếu bạn là <strong>lập trình viên</strong>.</p>

  <h3>So sánh trực quan</h3>
  <pre>
  JDK = JRE + Công cụ phát triển
  JRE = JVM + Thư viện Java
  </pre>

  <h3>Ví dụ thực tế</h3>
  <p>Giả sử bạn tải Java từ Oracle:
    <ul>
      <li><strong>Người dùng cuối</strong> (chỉ chạy ứng dụng): cài JRE.</li>
      <li><strong>Lập trình viên</strong>: cài JDK (vì JDK đã bao gồm JRE).</li>
    </ul>
  </p>

  <h3>Kiểm tra trên máy bạn</h3>
  <pre><code class="language-bash"># Kiểm tra JDK (nếu đã cài)
javac -version   → nếu báo lỗi, bạn chưa cài JDK

# Kiểm tra JRE/JVM
java -version    → nếu chạy được, bạn có JRE
</code></pre>

  <h3>Lưu ý quan trọng</h3>
  <ul>
    <li>Từ Java 11 trở đi, Oracle chỉ cung cấp JDK — không còn bản JRE riêng.</li>
    <li>Khi deploy ứng dụng Java lên server, bạn vẫn cần JRE (hoặc JDK) để chạy.</li>
  </ul>

  <h3>Kết luận</h3>
  <p>Nhớ quy tắc: <strong>JDK để phát triển, JRE để chạy, JVM để thực thi</strong>. Hiểu rõ điều này giúp bạn tự tin cấu hình môi trường và giải quyết lỗi liên quan đến runtime.</p>
`
  },

  "java-collections-framework": {
    title: "Java Collections là gì? Hiểu đúng để dùng hiệu quả",
    date: "17/10/2025",
    category: "Java",
    author: "Phuc Nguyen",
    image: "/cb88-java-logo-001.jpg",
    content: `
  <h2>Java Collections Framework là gì?</h2>
  <p>Thay vì dùng mảng tĩnh (<code>int[]</code>), Java cung cấp <strong>Collections Framework</strong> — một hệ thống giao diện và lớp triển khai giúp bạn lưu trữ, thao tác dữ liệu động một cách hiệu quả và an toàn.</p>

  <h3>Ba giao diện chính</h3>
  <table border="1" cellpadding="8" style="width:100%; border-collapse: collapse;">
    <tr><th>Giao diện</th><th>Đặc điểm</th><th>Lớp triển khai phổ biến</th><th>Độ phức tạp trung bình</th></tr>
    <tr>
      <td><code>List</code></td>
      <td>Có thứ tự, cho phép trùng lặp</td>
      <td><code>ArrayList</code>, <code>LinkedList</code></td>
      <td>Truy cập: O(1) (ArrayList), Chèn/xóa: O(n)</td>
    </tr>
    <tr>
      <td><code>Set</code></td>
      <td>Không trùng lặp</td>
      <td><code>HashSet</code>, <code>TreeSet</code></td>
      <td>Thêm/kiểm tra: O(1) (HashSet), O(log n) (TreeSet)</td>
    </tr>
    <tr>
      <td><code>Map</code></td>
      <td>Lưu theo cặp key-value</td>
      <td><code>HashMap</code>, <code>TreeMap</code></td>
      <td>Truy cập: O(1) (HashMap), O(log n) (TreeMap)</td>
    </tr>
  </table>

  <h3>Ví dụ chi tiết từng loại</h3>

  <h4>ArrayList – mảng động</h4>
  <pre><code class="language-java">List<String> colors = new ArrayList<>();
colors.add("Red");
colors.add("Green");
colors.add("Blue");
System.out.println(colors.get(0)); // "Red" – truy cập theo chỉ số
</code></pre>

  <h4>HashSet – tập hợp không trùng</h4>
  <pre><code class="language-java">Set<String> uniqueNames = new HashSet<>();
uniqueNames.add("Phuc");
uniqueNames.add("Phuc"); // Bị bỏ qua
System.out.println(uniqueNames.size()); // 1
</code></pre>

  <h4>HashMap – ánh xạ key-value</h4>
  <pre><code class="language-java">Map<String, Integer> studentScores = new HashMap<>();
studentScores.put("Phuc", 95);
studentScores.put("Lan", 88);
System.out.println(studentScores.get("Phuc")); // 95
</code></pre>

  <h3>Khi nào dùng cái nào?</h3>
  <ul>
    <li>Dùng <code>ArrayList</code> nếu bạn cần truy cập theo chỉ số nhanh (ví dụ: danh sách bài viết).</li>
    <li>Dùng <code>HashSet</code> nếu bạn cần kiểm tra “tồn tại hay không” (ví dụ: danh sách email đã đăng ký).</li>
    <li>Dùng <code>HashMap</code> nếu bạn cần tra cứu theo khóa (ví dụ: cache dữ liệu).</li>
  </ul>

  <h3>Best practices</h3>
  <ul>
    <li>Luôn khai báo kiểu bằng giao diện (<code>List<String> list = new ArrayList<>();</code>) → dễ thay đổi triển khai sau này.</li>
    <li>Tránh dùng <code>Vector</code> hoặc <code>Hashtable</code> (đã lỗi thời, đồng bộ hóa thừa).</li>
    <li>Nếu cần dữ liệu được sắp xếp, dùng <code>TreeSet</code> hoặc <code>TreeMap</code>.</li>
  </ul>

  <h3>Kết luận</h3>
  <p>Collections là trái tim của mọi ứng dụng Java. Nắm vững cách chọn và dùng đúng cấu trúc dữ liệu giúp bạn viết code hiệu quả, dễ đọc và ít lỗi.</p>
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
  <p>Exception (ngoại lệ) là sự kiện bất thường làm gián đoạn luồng thực thi chương trình, ví dụ: chia cho 0, file không tồn tại, mạng lỗi… Java cung cấp cơ chế <strong>bắt và xử lý exception</strong> để chương trình không crash và có thể phục hồi.</p>

  <h3>Phân loại exception</h3>

  <h4>1. Checked Exception</h4>
  <p>Là exception <strong>bắt buộc phải xử lý</strong> hoặc khai báo <code>throws</code>. Chúng thường liên quan đến lỗi từ môi trường bên ngoài (I/O, mạng).</p>
  <p>Ví dụ: <code>IOException</code>, <code>SQLException</code>, <code>ClassNotFoundException</code>.</p>

  <h4>2. Unchecked Exception</h4>
  <p>Là exception <strong>không bắt buộc xử lý</strong>, thường do lỗi logic trong code.</p>
  <p>Ví dụ: <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>, <code>IllegalArgumentException</code>.</p>

  <h4>3. Error</h4>
  <p>Là lỗi nghiêm trọng từ hệ thống (thiếu bộ nhớ, stack overflow) — <strong>không nên bắt</strong> vì không thể phục hồi.</p>

  <h3>Ví dụ xử lý exception</h3>
  <pre><code class="language-java">import java.io.*;

public class FileReaderExample {
    public static void main(String[] args) {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader("data.txt"));
            String line = reader.readLine();
            System.out.println(line);
        } catch (FileNotFoundException e) {
            System.err.println("Lỗi: File không tồn tại!");
        } catch (IOException e) {
            System.err.println("Lỗi khi đọc file: " + e.getMessage());
        } finally {
            // Đảm bảo đóng file dù có lỗi hay không
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    System.err.println("Không thể đóng file.");
                }
            }
        }
    }
}</code></pre>

  <h3>Try-with-resources (Java 7+)</h3>
  <p>Tự động đóng tài nguyên, gọn và an toàn hơn:</p>
  <pre><code class="language-java">try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line = reader.readLine();
    System.out.println(line);
} catch (IOException e) {
    System.err.println("Lỗi: " + e.getMessage());
}
// reader tự động đóng ở đây
</code></pre>

  <h3>Best practices</h3>
  <ul>
    <li><strong>Không bắt chung chung</strong>: Tránh <code>catch (Exception e)</code> — hãy bắt từng loại cụ thể.</li>
    <li><strong>Log lỗi thay vì chỉ in</strong>: Dùng SLF4J hoặc java.util.logging để ghi log.</li>
    <li><strong>Không nuốt exception</strong>: Đừng để <code>catch { /* im lặng */ }</code> — điều này che giấu lỗi.</li>
    <li><strong>Tạo custom exception</strong> nếu cần: giúp phân biệt lỗi nghiệp vụ rõ ràng.</li>
  </ul>

  <h3>Ví dụ custom exception</h3>
  <pre><code class="language-java">class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

// Sử dụng
if (age < 0) {
    throw new InvalidAgeException("Tuổi không thể âm!");
}
</code></pre>

  <h3>Kết luận</h3>
  <p>Xử lý exception đúng cách là dấu hiệu của lập trình viên chuyên nghiệp. Nó giúp ứng dụng ổn định, dễ debug và cung cấp trải nghiệm tốt cho người dùng.</p>
`
  },

  "javascript-la-gi": {
    title: "JavaScript là gì? Tại sao ngôn ngữ này thống trị Frontend?",
    date: "17/10/2025",
    category: "JavaScript",
    author: "Phuc Nguyen",
    image: "/Javascript-là-gì-3.jpg",
    content: `
  <h2>JavaScript là gì?</h2>
  <p>JavaScript (JS) là ngôn ngữ lập trình <strong>client-side</strong> chạy trực tiếp trên trình duyệt, dùng để tạo tương tác động cho trang web: thay đổi nội dung, phản hồi click, gửi dữ liệu không cần tải lại trang.</p>

  <h3>Tại sao JavaScript lại thống trị web?</h3>
  <ul>
    <li>Là ngôn ngữ <strong>duy nhất</strong> trình duyệt hiểu (bên cạnh HTML/CSS)</li>
    <li>Hệ sinh thái khổng lồ: React, Vue, Angular, Node.js, Express, Next.js…</li>
    <li>Hỗ trợ lập trình hàm, hướng đối tượng, bất đồng bộ</li>
    <li>Có thể dùng cả frontend lẫn backend (Node.js)</li>
    <li>Cộng đồng lớn, tài liệu phong phú, cập nhật liên tục (ES6, ES2022…)</li>
  </ul>

  <h3>Ví dụ “Hello World” trong trình duyệt</h3>
  <pre><code class="language-html"><!DOCTYPE html>
<html>
<body>
  <button id="btn">Click tôi</button>
  <script>
    document.getElementById('btn').addEventListener('click', () => {
      alert('Xin chào từ JavaScript!');
    });
  </script>
</body>
</html></code></pre>

  <h3>JavaScript ở đâu trong thực tế?</h3>
  <ul>
    <li><strong>Frontend</strong>: React (Facebook), Vue (Alibaba), Angular (Google)</li>
    <li><strong>Backend</strong>: Node.js + Express — dùng bởi Netflix, PayPal, Uber</li>
    <li><strong>Mobile</strong>: React Native (Instagram, Facebook)</li>
    <li><strong>Desktop</strong>: Electron (VS Code, Discord, Slack)</li>
    <li><strong>Game</strong>: Phaser.js, Three.js (3D)</li>
  </ul>

  <h3>JavaScript khác Java ở điểm nào?</h3>
  <p>Mặc dù tên giống, nhưng **JavaScript và Java hoàn toàn không liên quan**:
    <ul>
      <li>Java: biên dịch, mạnh về backend, cú pháp nghiêm ngặt</li>
      <li>JavaScript: thông dịch, mạnh về frontend, linh hoạt, dễ học</li>
    </ul>
  </p>

  <h3>ES6+ – JavaScript hiện đại</h3>
  <p>Từ ES6 (2015), JS trở nên mạnh mẽ hơn với:
    <ul>
      <li><code>let/const</code> thay vì <code>var</code></li>
      <li>Arrow function: <code>() => {}</code></li>
      <li>Template literals: <code>\`Xin chào \${name}\`</code></li>
      <li>Destructuring, spread operator, async/await…</li>
    </ul>
  </p>

  <h3>Lời khuyên cho người mới</h3>
  <ol>
    <li>Học JavaScript thuần trước khi dùng framework</li>
    <li>Hiểu DOM, event, bất đồng bộ</li>
    <li>Thực hành bằng cách xây dựng todo app, blog, calculator</li>
    <li>Dùng Chrome DevTools để debug</li>
  </ol>

  <h3>Kết luận</h3>
  <p>JavaScript không chỉ là “ngôn ngữ của web” — nó là <strong>ngôn ngữ của mọi nền tảng</strong> trong thời đại hiện nay. Nếu bạn muốn làm web, đây là bước đầu tiên không thể thiếu.</p>
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
  <p>Khi trình duyệt tải file HTML, nó không chỉ hiển thị nội dung — mà còn xây dựng một cây đối tượng trong bộ nhớ gọi là <strong>Document Object Model</strong> (DOM). Mỗi thẻ HTML (<code><div></code>, <code><p></code>, <code><img></code>…) trở thành một <em>node</em> trong cây này.</p>
  <p>JavaScript có thể <strong>truy cập, đọc, sửa, xóa hoặc tạo mới</strong> các node này → giúp trang web “sống động”.</p>

  <h3>Cấu trúc DOM</h3>
  <p>Ví dụ HTML:</p>
  <pre><code class="language-html"><html>
  <head>...</head>
  <body>
    <h1 id="title">Chào mừng</h1>
    <ul class="list">
      <li>Mục 1</li>
      <li>Mục 2</li>
    </ul>
  </body>
</html></code></pre>
  <p>→ Trong DOM, <code><html></code> là root node, <code><body></code> là con, <code><h1></code> và <code><ul></code> là cháu, v.v.</p>

  <h3>Truy cập phần tử DOM</h3>
  <pre><code class="language-javascript">// 1. Theo ID (nhanh nhất)
const title = document.getElementById('title');

// 2. Theo class
const listItems = document.getElementsByClassName('list-item');

// 3. Theo thẻ
const allDivs = document.getElementsByTagName('div');

// 4. Theo CSS selector (linh hoạt nhất)
const firstLi = document.querySelector('ul li');        // phần tử đầu tiên
const allLis = document.querySelectorAll('ul li');      // NodeList tất cả
</code></pre>

  <h3>Thay đổi nội dung và thuộc tính</h3>
  <pre><code class="language-javascript">const p = document.querySelector('p');

// Thay văn bản (an toàn, không parse HTML)
p.textContent = 'Nội dung mới <script>...</script>'; // Hiển thị nguyên văn

// Thay HTML (cẩn thận XSS!)
p.innerHTML = '<strong>In đậm!</strong>';

// Thay thuộc tính
const img = document.querySelector('img');
img.src = '/new-avatar.jpg';
img.alt = 'Ảnh đại diện mới';

// Thay class
p.className = 'highlight';
p.classList.add('active');
p.classList.remove('inactive');
</code></pre>

  <h3>Tạo và thêm phần tử mới</h3>
  <pre><code class="language-javascript">const newLi = document.createElement('li');
newLi.textContent = 'Mục mới';

const ul = document.querySelector('ul');
ul.appendChild(newLi); // Thêm vào cuối

// Hoặc chèn trước phần tử con đầu tiên
ul.insertBefore(newLi, ul.firstChild);
</code></pre>

  <h3>Hiệu năng khi thao tác DOM</h3>
  <p>Thao tác DOM là <strong>tốn kém</strong> vì trình duyệt phải tính toán lại layout, vẽ lại màn hình (reflow/repaint). Vì vậy:</p>
  <ul>
    <li>Tránh thao tác DOM trong vòng lặp → gom thay đổi, cập nhật một lần</li>
    <li>Dùng <code>DocumentFragment</code> để thêm nhiều phần tử cùng lúc</li>
    <li>Ẩn phần tử trước khi sửa (đặt <code>display: none</code>), rồi hiện lại sau</li>
  </ul>

  <h3>Ví dụ tối ưu</h3>
  <pre><code class="language-javascript">const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  fragment.appendChild(li);
}
document.querySelector('ul').appendChild(fragment); // Chỉ cập nhật DOM 1 lần
</code></pre>

  <h3>Kết luận</h3>
  <p>DOM là cầu nối giữa HTML và JavaScript. Hiểu cách nó hoạt động giúp bạn xây dựng giao diện tương tác mượt mà, hiệu quả và tránh “giật lag” khi ứng dụng phức tạp.</p>
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
  <p>Event là hành động xảy ra trên trang web: click chuột, nhập liệu, di chuyển, nhấn phím, gửi form, tải xong ảnh… JavaScript có thể “lắng nghe” và phản hồi các sự kiện này để tạo trải nghiệm tương tác.</p>

  <h3>Đăng ký sự kiện – cách đúng</h3>
  <p>Luôn dùng <code>addEventListener</code> thay vì gán trực tiếp (<code>onclick=</code>) vì:</p>
  <ul>
    <li>Cho phép đăng ký nhiều listener cho cùng một sự kiện</li>
    <li>Dễ gỡ bỏ sau này (<code>removeEventListener</code>)</li>
    <li>Không ghi đè listener cũ</li>
  </ul>

  <pre><code class="language-javascript">const button = document.querySelector('#myBtn');

button.addEventListener('click', function(event) {
  console.log('Đã click!');
  console.log('Tọa độ:', event.clientX, event.clientY);
  // event.preventDefault(); // ngăn hành vi mặc định (nếu cần)
});
</code></pre>

  <h3>Các loại sự kiện phổ biến</h3>
  <table border="1" cellpadding="6" style="width:100%; border-collapse: collapse;">
    <tr><th>Loại</th><th>Tên sự kiện</th><th>Mô tả</th></tr>
    <tr><td>Chuột</td><td><code>click</code>, <code>dblclick</code>, <code>mouseover</code></td><td>Tương tác chuột</td></tr>
    <tr><td>Bàn phím</td><td><code>keydown</code>, <code>keyup</code></td><td>Nhấn/phím nhả</td></tr>
    <tr><td>Form</td><td><code>submit</code>, <code>input</code>, <code>change</code></td><td>Tương tác form</td></tr>
    <tr><td>Tài liệu</td><td><code>DOMContentLoaded</code>, <code>load</code></td><td>Tải xong HTML hoặc toàn bộ trang</td></tr>
  </table>

  <h3>Ví dụ: Form validation</h3>
  <pre><code class="language-javascript">const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const email = document.querySelector('#email').value;
  if (!email.includes('@')) {
    e.preventDefault(); // Ngăn gửi form
    alert('Vui lòng nhập email hợp lệ!');
  }
});
</code></pre>

  <h3>Event delegation (ủy quyền sự kiện)</h3>
  <p>Khi có nhiều phần tử con (ví dụ: danh sách todo), thay vì gắn listener cho từng cái (tốn bộ nhớ), hãy gắn vào phần tử cha và dùng <code>event.target</code> để xác định phần tử thực sự được click.</p>

  <pre><code class="language-javascript">document.querySelector('#todo-list').addEventListener('click', function(e) {
  // Chỉ xử lý nếu click vào nút xóa
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('li').remove(); // Xóa todo item
  }
});
</code></pre>

  <h3>Event object – thông tin chi tiết</h3>
  <p>Hàm xử lý sự kiện nhận tham số <code>event</code> chứa nhiều thông tin hữu ích:</p>
  <ul>
    <li><code>event.target</code>: phần tử thực sự kích hoạt sự kiện</li>
    <li><code>event.currentTarget</code>: phần tử đang lắng nghe</li>
    <li><code>event.preventDefault()</code>: ngăn hành vi mặc định (ví dụ: gửi form)</li>
    <li><code>event.stopPropagation()</code>: ngăn sự kiện nổi bọt (bubbling)</li>
  </ul>

  <h3>Kết luận</h3>
  <p>Sự kiện là trái tim của trải nghiệm người dùng trên web. Biết cách lắng nghe, xử lý và ủy quyền sự kiện giúp bạn xây dựng ứng dụng tương tác mạnh mẽ, hiệu quả và dễ bảo trì.</p>
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
  <p>Nhiều tác vụ trong web như gọi API, đọc file, hoặc chờ phản hồi người dùng là <strong>bất đồng bộ</strong> — chúng không thể “chặn” luồng chính của chương trình. Nếu không xử lý đúng, ứng dụng sẽ bị treo hoặc dữ liệu không kịp cập nhật.</p>

  <h3>1. Callback – cách truyền thống (dễ rối)</h3>
  <p>Callback là hàm được truyền vào như tham số và gọi lại khi tác vụ hoàn tất.</p>
  <pre><code class="language-javascript">function fetchData(callback) {
  setTimeout(() => {
    callback(null, 'Dữ liệu từ server');
  }, 1000);
}

fetchData((err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
</code></pre>
  <p>→ Vấn đề: Khi có nhiều bước, code lồng sâu → “<strong>callback hell</strong>”.</p>

  <h3>2. Promise – giải pháp hiện đại</h3>
  <p>Promise đại diện cho một giá trị <em>có thể có trong tương lai</em>. Nó có 3 trạng thái: pending, fulfilled, rejected.</p>
  <pre><code class="language-javascript">function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve('Dữ liệu OK');
      else reject('Lỗi mạng');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
</code></pre>

  <h3>3. Async/Await – cú pháp “đồng bộ” cho code bất đồng bộ</h3>
  <p>Từ ES2017, bạn có thể dùng <code>async/await</code> để viết code bất đồng bộ trông như đồng bộ — dễ đọc, dễ debug.</p>
  <pre><code class="language-javascript">async function loadUserProfile() {
  try {
    const response = await fetch('https://api.example.com/user/123');
    if (!response.ok) throw new Error('Không tìm thấy người dùng');
    
    const user = await response.json();
    console.log('Tên:', user.name);
    
    const posts = await fetch(user.postsUrl).then(res => res.json());
    console.log('Số bài viết:', posts.length);
  } catch (error) {
    console.error('Lỗi:', error.message);
  }
}

loadUserProfile();
</code></pre>

  <h3>So sánh ba cách</h3>
  <table border="1" cellpadding="6" style="width:100%; border-collapse: collapse;">
    <tr><th>Cách</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
    <tr>
      <td>Callback</td>
      <td>Đơn giản cho tác vụ đơn lẻ</td>
      <td>Dễ rối khi lồng nhiều lớp</td>
    </tr>
    <tr>
      <td>Promise</td>
      <td>Hỗ trợ chaining, dễ xử lý lỗi</td>
      <td>Vẫn cần <code>.then/.catch</code>, không “đồng bộ”</td>
    </tr>
    <tr>
      <td>Async/Await</td>
      <td>Dễ đọc, hỗ trợ try/catch, debug tốt</td>
      <td>Chỉ dùng trong hàm <code>async</code></td>
    </tr>
  </table>

  <h3>Best practices</h3>
  <ul>
    <li>Luôn dùng <code>try/catch</code> với <code>async/await</code></li>
    <li>Không quên <code>await</code> → dẫn đến Promise chưa resolve</li>
    <li>Dùng <code>Promise.all()</code> để chạy nhiều tác vụ song song:
      <pre><code class="language-javascript">const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
]);</code></pre>
    </li>
  </ul>

  <h3>Kết luận</h3>
  <p>Trong dự án hiện đại, <strong>async/await là tiêu chuẩn</strong>. Nhưng bạn vẫn cần hiểu Promise vì hầu hết thư viện (fetch, axios) đều trả về Promise. Nắm vững bất đồng bộ là chìa khóa để xây dựng ứng dụng web mượt mà và đáng tin cậy.</p>
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