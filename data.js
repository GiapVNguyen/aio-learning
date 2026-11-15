/**
 * AIO 2026 · AI KNOWLEDGE HUB DATA STORE
 * Dữ liệu bài học, công thức toán, code mẫu, quiz và flashcard
 */

window.AIO_COURSES = [
  {
    id: "python",
    title: "Python Core",
    icon: "🐍",
    description: "Nền tảng lập trình Python chuyên sâu cho AI & Data Science",
    lessons: [
      {
        id: "py_basics",
        title: "Bài 1: Variable, Scalar, List, Tuple, Dict, Set & Argument",
        badge: "Python Nền tảng · Bài 01",
        description: "Bản chất vùng nhớ, các kiểu dữ liệu cốt lõi, so sánh chi tiết và cách truyền đối số trong Python.",
        tags: ["python", "variable", "list", "tuple", "dict", "set", "argument", "scalar"],
        content: {
          theory: `
            <div class="section-block">
              <h4>1. Variable (Biến) – Nhãn dán tham chiếu vùng nhớ</h4>
              <p>Trong Python, biến không phải là một chiếc hộp chứa trực tiếp giá trị như trong C/C++, mà thực chất là một <strong>nhãn tên (reference tag)</strong> trỏ đến vùng nhớ của đối tượng trên bộ nhớ Heap.</p>
              <div class="callout-box">
                <strong>💡 Lưu ý quan trọng về tính tham chiếu (Reference):</strong> Khi thực hiện <code>b = a</code> với các kiểu dữ liệu có thể sửa đổi (Mutable như <code>list</code>), việc thay đổi <code>b</code> sẽ ảnh hưởng trực tiếp đến <code>a</code> vì cả hai đang cùng trỏ chung một vùng nhớ!
              </div>
            </div>

            <div class="section-block">
              <h4>2. Scalar (Đại lượng vô hướng / Giá trị đơn)</h4>
              <p>Scalar là một giá trị đơn lẻ, mang số chiều bằng $0$ (phân biệt với Vector 1D, Matrix 2D và Tensor đa chiều). Các kiểu dữ liệu Scalar cơ bản gồm: <code>int</code>, <code>float</code>, <code>bool</code>, <code>complex</code>.</p>
            </div>

            <div class="section-block">
              <h4>3. Bảng so sánh 4 cấu trúc dữ liệu cốt lõi</h4>
              <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                <thead>
                  <tr style="background: var(--primary-light); text-align: left;">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Kiểu</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Cú pháp</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Có thứ tự (Ordered)</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Có thể sửa (Mutable)</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Trùng lặp</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Mục đích chính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>List</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><code>[...]</code></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Có (index $0$)</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Có</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Cho phép</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Giỏ hàng linh hoạt, thêm/sửa/xóa</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Tuple</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><code>(...)</code></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Có (index $0$)</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>KHÔNG</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Cho phép</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Hằng số, tọa độ cố định, key của dict</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Dict</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><code>{k: v}</code></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Có (Python 3.7+)</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Có</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Key duy nhất</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Bảng tra cứu nhanh $O(1)$, cấu hình</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Set</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><code>{...}</code></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Không</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Có</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Lọc sạch trùng</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Loại bỏ phần tử trùng lặp, phép toán tập hợp</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="section-block">
              <h4>4. Parameter vs Argument</h4>
              <p><strong>Parameter (Tham số):</strong> Tên biến được định nghĩa ở phần khai báo hàm (như các ô trống trên mẫu đơn).</p>
              <p><strong>Argument (Đối số):</strong> Giá trị thực tế được truyền vào khi gọi hàm (như nội dung thật bạn điền vào ô trống).</p>
            </div>
          `,
          math: `
            <div class="section-block">
              <h4>Mô hình Toán học & Độ phức tạp thuật toán (Time Complexity)</h4>
              <p>Cấu trúc <strong>Dictionary</strong> và <strong>Set</strong> dựa trên cấu trúc <em>Bảng băm (Hash Table)</em>, cho tốc độ tra cứu phần tử trung bình là:</p>
              <div style="text-align: center; margin: 15px 0; font-size: 18px;">
                $$\\text{Complexity}(\\text{Tra cứu Dict / Set}) = O(1)$$
              </div>
              <p>Trong khi đó, việc tìm kiếm phần tử trong một <strong>List</strong> thông thường phải duyệt tuần tự từ đầu đến cuối:</p>
              <div style="text-align: center; margin: 15px 0; font-size: 18px;">
                $$\\text{Complexity}(\\text{Tìm kiếm List}) = O(n)$$
              </div>
            </div>

            <div class="section-block">
              <h4>Độ phức tạp không gian (Space Dimension):</h4>
              <p>Sự phân cấp hình học dữ liệu từ Python sang AI/ML:</p>
              <ul>
                <li><strong>Scalar:</strong> $x \\in \\mathbb{R}$ (Không gian $0$ chiều)</li>
                <li><strong>Vector (1D List/Array):</strong> $\\mathbf{x} = [x_1, x_2, \\dots, x_d]^T \\in \\mathbb{R}^d$ ($1$ chiều)</li>
                <li><strong>Matrix (2D List/Array):</strong> $\\mathbf{X} \\in \\mathbb{R}^{m \\times n}$ ($2$ chiều)</li>
                <li><strong>Tensor (3D+):</strong> $\\mathcal{T} \\in \\mathbb{R}^{B \\times C \\times H \\times W}$ (Tensor ảnh 4 chiều trong Deep Learning)</li>
              </ul>
            </div>
          `,
          code: `
# 1. Minh họa về tính tham chiếu (Reference) của Biến
a = [1, 2, 3]
b = a              # b và a trỏ cùng vùng nhớ
b.append(4)
print(f"a: {a}")   # Kết quả: [1, 2, 3, 4] -> a bị thay đổi!

# Để copy độc lập:
c = a.copy()
c.append(99)
print(f"a vẫn giữ nguyên: {a}")

# 2. Ứng dụng Tuple làm tọa độ và kích thước ảnh
image_shape = (224, 224, 3) # (H, W, C) - Cố định không đổi

# 3. Tra cứu siêu tốc với Dict
hyperparams = {
    "lr": 0.001,
    "batch_size": 32,
    "optimizer": "Adam"
}
print(f"Learning rate: {hyperparams['lr']}")

# 4. Lọc trùng lặp nhãn siêu nhanh với Set
raw_classes = ["dog", "cat", "dog", "bird", "cat"]
unique_classes = set(raw_classes)
print(f"Các lớp nhãn: {unique_classes}") # {'dog', 'cat', 'bird'}

# 5. Phân biệt Parameter và Argument
def train_model(epochs, lr=0.01, *args, **kwargs):
    # epochs, lr là parameters
    print(f"Train {epochs} epochs với lr={lr}")

train_model(50, 0.005) # 50 và 0.005 là arguments
          `,
          quiz: [
            {
              question: "Điều gì sẽ xảy ra khi chạy đoạn code sau: a = (1, 2); a[0] = 5?",
              options: [
                "a trở thành (5, 2)",
                "Báo lỗi TypeError vì Tuple là kiểu bất biến (Immutable)",
                "a trở thành [5, 2]",
                "Không có chuyện gì xảy ra"
              ],
              answer: 1,
              explanation: "Tuple là kiểu dữ liệu bất biến (Immutable), một khi đã tạo thì không thể thay đổi giá trị của bất kỳ phần tử nào bên trong."
            },
            {
              question: "Cấu trúc dữ liệu nào trong Python có tốc độ tra cứu phần tử trung bình là O(1)?",
              options: [
                "List",
                "Tuple",
                "Dictionary và Set",
                "Chuỗi ký tự (str)"
              ],
              answer: 2,
              explanation: "Dictionary và Set được triển khai bằng Bảng băm (Hash Table) nên tốc độ tìm kiếm/truy xuất theo Key trung bình là O(1)."
            },
            {
              question: "Trong định nghĩa hàm 'def predict(image, threshold=0.5):', 'image' và 'threshold' được gọi là gì?",
              options: [
                "Arguments (Đối số)",
                "Parameters (Tham số)",
                "Variables độc lập",
                "Constants"
              ],
              answer: 1,
              explanation: "Biến được khai báo ở phần định nghĩa hàm được gọi là Parameters (tham số), còn giá trị thực tế truyền vào khi gọi hàm mới là Arguments (đối số)."
            }
          ],
          flashcards: [
            { front: "Scalar", back: "Đại lượng vô hướng, mang 0 chiều, chứa đúng 1 giá trị đơn lẻ (int, float, bool)." },
            { front: "Mutable vs Immutable", back: "Mutable: Cho phép thay đổi nội dung (List, Dict, Set). Immutable: Bất biến, không thể sửa sau khi tạo (Tuple, int, float, str)." },
            { front: "Dictionary Key Rule", back: "Key của Dict bắt buộc phải là đối tượng bất biến (Hashable) như số, chuỗi hoặc tuple. Không được dùng List làm Key." },
            { front: "Set", back: "Tập hợp các phần tử duy nhất, tự động lọc sạch các giá trị trùng lặp, không có thứ tự chỉ số index." }
          ],
          tips: `
            <div class="section-block">
              <h4>Câu hỏi phỏng vấn thường gặp:</h4>
              <p><strong>Hỏi:</strong> Phân biệt giữa <code>is</code> và <code>==</code> trong Python?</p>
              <p><strong>Trả lời:</strong> <code>==</code> so sánh <em>giá trị</em> của hai đối tượng, còn <code>is</code> so sánh <em>định danh vùng nhớ (memory address)</em> xem chúng có phải là cùng một đối tượng hay không.</p>
            </div>
            <div class="section-block">
              <p><strong>Hỏi:</strong> Tại sao trong Machine Learning ta dùng NumPy Array thay vì List thông thường của Python?</p>
              <p><strong>Trả lời:</strong> List của Python lưu con trỏ phân tán trong RAM và kiểm tra kiểu động nên tính toán chậm. NumPy Array lưu các khối nhớ liên tục cùng kiểu dữ liệu (C-style contiguous array), hỗ trợ tính toán vector hóa (Vectorization) và tối ưu hóa bằng tập lệnh phần cứng SIMD/C/Fortran nhanh hơn hàng trăm lần.</p>
            </div>
          `
        }
      },
      {
        id: "py_functions",
        title: "Bài 2: Hàm nâng cao, *args, **kwargs & Lambda",
        badge: "Python Nền tảng · Bài 02",
        description: "Làm chủ truyền đối số động, unpacking toán tử sao (*) và viết hàm ẩn danh lambda trong xử lý dữ liệu.",
        tags: ["python", "function", "args", "kwargs", "lambda"],
        content: {
          theory: `
            <div class="section-block">
              <h4>1. *args và **kwargs là gì?</h4>
              <p>Khi bạn không biết trước hàm sẽ nhận bao nhiêu đối số, Python cung cấp hai toán tử đặc biệt:</p>
              <ul>
                <li><code>*args</code>: Thu thập tất cả các <strong>đối số vị trí (positional arguments)</strong> dư thừa thành một <code>tuple</code>.</li>
                <li><code>**kwargs</code>: Thu thập tất cả các <strong>đối số từ khóa (keyword arguments)</strong> dư thừa thành một <code>dict</code>.</li>
              </ul>
            </div>
            <div class="section-block">
              <h4>2. Lambda Expression (Hàm ẩn danh)</h4>
              <p>Lambda là hàm ngắn gọn viết trên một dòng duy nhất, không cần tên, thường dùng kèm với <code>map()</code>, <code>filter()</code> hoặc sắp xếp dữ liệu:</p>
              <code>f = lambda x: x ** 2</code>
            </div>
          `,
          math: `
            <div class="section-block">
              <h4>Biểu diễn Toán học của Hàm:</h4>
              <p>Một hàm số $f$ ánh xạ từ không gian đầu vào $\\mathcal{X}$ sang không gian đầu ra $\\mathcal{Y}$:</p>
              <div style="text-align: center; margin: 15px 0;">
                $$f: \\mathcal{X} \\to \\mathcal{Y}, \\quad y = f(\\mathbf{x}; \\mathbf{\\theta})$$
              </div>
              <p>Trong đó $\\mathbf{\\theta}$ là các siêu tham số (Hyperparameters) được truyền vào hàm thông qua <code>*args</code> hoặc <code>**kwargs</code>.</p>
            </div>
          `,
          code: `
# Demo *args và **kwargs
def build_pipeline(*steps, **config):
    print("Các bước pipeline (tuple):", steps)
    print("Cấu hình huấn luyện (dict):", config)

build_pipeline("Normalize", "Augment", "ResNet", epochs=50, lr=0.001)

# Demo Lambda sắp xếp dự đoán theo Confidence Score
predictions = [
    {"class": "dog", "score": 0.85},
    {"class": "cat", "score": 0.95},
    {"class": "car", "score": 0.40}
]
predictions.sort(key=lambda item: item["score"], reverse=True)
print("Top 1 dự đoán:", predictions[0]) # cat 0.95
          `,
          quiz: [
            {
              question: "Trong hàm def demo(*args): ... kiểu dữ liệu của biến args bên trong hàm là gì?",
              options: ["List", "Tuple", "Dict", "Set"],
              answer: 1,
              explanation: "*args luôn luôn đóng gói các đối số truyền vào thành một Tuple."
            }
          ],
          flashcards: [
            { front: "*args", back: "Thu thập các đối số vị trí tùy biến số lượng thành một Tuple." },
            { front: "**kwargs", back: "Thu thập các đối số dạng key=value thành một Dictionary." }
          ],
          tips: `
            <div class="section-block">
              <h4>Mẹo thực chiến:</h4>
              <p>Trong PyTorch hoặc Keras, bạn sẽ thấy hầu như mọi hàm khởi tạo <code>def __init__(self, *args, **kwargs)</code> đều gọi <code>super().__init__(*args, **kwargs)</code> để truyền thẳng toàn bộ tham số lên lớp cha mà không cần viết lại từng tên biến!</p>
            </div>
          `
        }
      }
    ]
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: "🤖",
    description: "Các thuật toán học máy cổ điển, hồi quy, phân loại và tối ưu hóa",
    lessons: [
      {
        id: "ml_linear",
        title: "Bài 1: Hồi quy tuyến tính (Linear Regression) & Hàm mất mát MSE",
        badge: "Machine Learning · Bài 01",
        description: "Mô hình dự đoán liên tục cơ bản nhất, hàm mất mát Mean Squared Error và trực giác tối ưu vi phân.",
        tags: ["ml", "linear regression", "mse", "loss", "gradient descent", "math"],
        content: {
          theory: `
            <div class="section-block">
              <h4>1. Định nghĩa Linear Regression</h4>
              <p>Hồi quy tuyến tính tìm kiếm một mối quan hệ dạng đường thẳng (hoặc siêu phẳng trong không gian nhiều chiều) giữa biến đầu vào $\\mathbf{x}$ và nhãn mục tiêu liên tục $y$.</p>
            </div>
            <div class="section-block">
              <h4>2. Phương trình mô hình</h4>
              <p>Dự đoán $\\hat{y}$ được tính bằng tích vô hướng giữa vector trọng số $\\mathbf{w}$ và vector đặc trưng $\\mathbf{x}$ cộng với hệ số chệch $b$ (bias):</p>
              $$\\hat{y} = \\mathbf{w}^T \\mathbf{x} + b = w_1 x_1 + w_2 x_2 + \\dots + w_d x_d + b$$
            </div>
          `,
          math: `
            <div class="section-block">
              <h4>Hàm mất mát Mean Squared Error (MSE):</h4>
              <p>Đo lường trung bình bình phương khoảng cách giữa giá trị thực tế $y_i$ và giá trị mô hình dự đoán $\\hat{y}_i$:</p>
              <div style="text-align: center; margin: 15px 0;">
                $$\\mathcal{L}_{\\text{MSE}}(\\mathbf{w}, b) = \\frac{1}{N} \\sum_{i=1}^N \\left( y_i - (\\mathbf{w}^T \\mathbf{x}_i + b) \\right)^2$$
              </div>
              <p>Đạo hàm riêng theo trọng số $w$ dùng để cập nhật Gradient Descent:</p>
              <div style="text-align: center; margin: 15px 0;">
                $$\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{w}} = -\\frac{2}{N} \\sum_{i=1}^N \\mathbf{x}_i (y_i - \\hat{y}_i)$$
              </div>
            </div>
          `,
          code: `
import numpy as np

# Huấn luyện Linear Regression bằng công thức nghiệm giải tích (Normal Equation)
# w = (X^T * X)^(-1) * X^T * y
X = np.array([[1, 1], [1, 2], [2, 2], [2, 3]])
y = np.dot(X, np.array([1, 2])) + 3 # y = 1*x1 + 2*x2 + 3

# Thêm cột bias 1 vào X
X_b = np.c_[np.ones((X.shape[0], 1)), X]

# Tính trọng số tối ưu trực tiếp:
w_best = np.linalg.inv(X_b.T.dot(X_b)).dot(X_b.T).dot(y)
print("Trọng số tối ưu (bias, w1, w2):", w_best)
          `,
          quiz: [
            {
              question: "Tại sao trong hàm mất mát MSE người ta lại bình phương sai số thay vì lấy trị tuyệt đối?",
              options: [
                "Vì bình phương giúp hàm số liên tục và có đạo hàm trơn tru tại mọi điểm, dễ tối ưu bằng vi phân",
                "Vì trị tuyệt đối tính toán chậm hơn máy tính",
                "Vì bình phương làm giảm sai số của các điểm nhiễu (outliers)",
                "Không có lý do cụ thể"
              ],
              answer: 0,
              explanation: "Hàm bình phương MSE có đạo hàm trơn liên tục tại mọi điểm (dễ tính vi phân) và phạt rất nặng các sai số lớn, giúp mô hình nhanh chóng hội tụ."
            }
          ],
          flashcards: [
            { front: "Mean Squared Error (MSE)", back: "Hàm mất mát bình phương sai số trung bình giữa giá trị thực và giá trị dự đoán." },
            { front: "Bias (b)", back: "Hệ số chặn, cho phép siêu phẳng dự đoán dịch chuyển tự do mà không bắt buộc phải đi qua gốc tọa độ." }
          ],
          tips: `
            <div class="section-block">
              <h4>Lưu ý thực chiến:</h4>
              <p>MSE rất nhạy cảm với các điểm dữ liệu nhiễu ngoại lai (Outliers). Khi tập dữ liệu có nhiều ngoại lai lớn, cân nhắc chuyển sang dùng <strong>MAE (L1 Loss)</strong> hoặc <strong>Huber Loss</strong>.</p>
            </div>
          `
        }
      }
    ]
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: "👁️",
    description: "Thị giác máy tính: Xử lý ảnh, CNN, Trích xuất đặc trưng và Nhận diện vật thể",
    lessons: [
      {
        id: "cv_cnn",
        title: "Bài 1: Convolutional Neural Network (CNN) & Phép tích chập 2D",
        badge: "Computer Vision · Bài 01",
        description: "Bản chất toán học của Kernel tích chập, Stride, Padding và công thức tính kích thước ảnh đầu ra.",
        tags: ["cv", "cnn", "convolution", "kernel", "stride", "padding", "pooling"],
        content: {
          theory: `
            <div class="section-block">
              <h4>1. Tại sao dùng CNN thay cho MLP truyền thống trong xử lý ảnh?</h4>
              <ul>
                <li><strong>Chia sẻ trọng số (Weight Sharing):</strong> Một kernel tích chập trượt trên toàn bộ bức ảnh giúp giảm số lượng tham số khổng lồ.</li>
                <li><strong>Bất biến tịnh tiến (Translation Invariance):</strong> Một đặc trưng (như tai mèo, góc cạnh) dù nằm ở góc trái hay góc phải ảnh đều được nhận diện như nhau.</li>
                <li><strong>Bảo toàn cấu trúc không gian 2D:</strong> MLP phải duỗi phẳng (flatten) ảnh làm mất tương quan lân cận giữa các điểm ảnh kề nhau, trong khi CNN giữ nguyên cấu trúc ma trận ảnh.</li>
              </ul>
            </div>
          `,
          math: `
            <div class="section-block">
              <h4>Công thức tính kích thước Output sau lớp Conv2D:</h4>
              <p>Cho ảnh vuông kích thước $W \\times W$, kích thước Kernel $K$, Padding $P$, và Stride $S$:</p>
              <div style="text-align: center; margin: 15px 0; font-size: 18px;">
                $$O = \\left\\lfloor \\frac{W - K + 2P}{S} \\right\\rfloor + 1$$
              </div>
              <div class="callout-box">
                <strong>Ví dụ thực tế:</strong> Ảnh đầu vào $W = 32$, Kernel $K = 3$, Padding $P = 1$, Stride $S = 1$:
                $$O = \\frac{32 - 3 + 2(1)}{1} + 1 = 32$$
                (Kích thước ảnh được bảo toàn nguyên vẹn $32 \\times 32$!).
              </div>
            </div>
          `,
          code: `
import torch
import torch.nn as nn

# Định nghĩa một khối Conv2D cơ bản trong PyTorch
conv_block = nn.Sequential(
    # In: 3 channels (RGB), Out: 32 feature maps, Kernel: 3x3, Padding: 1, Stride: 1
    nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, stride=1, padding=1),
    nn.BatchNorm2d(32),
    nn.ReLU(),
    nn.MaxPool2d(kernel_size=2, stride=2) # Giảm nửa kích thước ảnh
)

# Test với batch 4 ảnh RGB kích thước 64x64
sample_input = torch.randn(4, 3, 64, 64)
output = conv_block(sample_input)
print("Kích thước đầu ra:", output.shape) # torch.Size([4, 32, 32, 32])
          `,
          quiz: [
            {
              question: "Một bức ảnh kích thước 28x28 đi qua lớp Conv2D với Kernel 5x5, Stride 1, Padding 0. Kích thước output là bao nhiêu?",
              options: ["24x24", "26x26", "28x28", "20x20"],
              answer: 0,
              explanation: "Áp dụng công thức: O = (W - K + 2P)/S + 1 = (28 - 5 + 0)/1 + 1 = 24."
            },
            {
              question: "Mục đích chính của lớp Max Pooling là gì?",
              options: [
                "Tăng số lượng kênh màu",
                "Giảm kích thước không gian (spatial dimension) để giảm tính toán và kiểm soát overfitting",
                "Tính đạo hàm ngược",
                "Thay thế hàm kích hoạt ReLU"
              ],
              answer: 1,
              explanation: "Max Pooling trích xuất giá trị lớn nhất trong từng cửa sổ, giúp giảm kích thước chiều rộng/cao của feature map, tiết kiệm bộ nhớ và tạo tính bất biến cục bộ."
            }
          ],
          flashcards: [
            { front: "Stride (Bước nhảy)", back: "Số pixel mà bộ lọc (Kernel) dịch chuyển mỗi bước khi quét qua ảnh." },
            { front: "Padding", back: "Thêm các hàng/cột pixel (thường là số 0) xung quanh viền ảnh để kiểm soát kích thước output và giữ thông tin ở viền." },
            { front: "Feature Map", back: "Bản đồ đặc trưng đầu ra sau khi ảnh được áp dụng bộ lọc tích chập." }
          ],
          tips: `
            <div class="section-block">
              <h4>Mẹo vàng trong thiết kế CNN:</h4>
              <p>Luôn ưu tiên dùng nhiều lớp tích chập với <strong>Kernel nhỏ $3 \\times 3$</strong> xếp chồng lên nhau thay vì dùng một lớp với Kernel lớn $7 \\times 7$. Hai lớp $3 \\times 3$ có cùng vùng cảm thụ (Receptive field) $5 \\times 5$ nhưng dùng ít tham số hơn và có nhiều hàm phi tuyến hơn!</p>
            </div>
          `
        }
      }
    ]
  }
];
