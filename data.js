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
        description: "Giải thích chi tiết 100% theo bản chất, ẩn dụ trực quan, cơ chế vùng nhớ, bảng băm O(1) và đối số nâng cao.",
        tags: ["python", "variable", "list", "tuple", "dict", "set", "argument", "parameter", "scalar"],
        content: {
          theory: `
            <div class="section-block">
              <h4>1. Variable (Biến) – "Tấm thẻ tên / Nhãn dán"</h4>
              <p>Trong Python, biến <strong>không phải là một chiếc hộp</strong> chứa trực tiếp giá trị như trong C/C++, mà thực chất là một <strong>tấm tem dán tên (name tag / reference)</strong> trỏ đến vùng nhớ của đối tượng (Object) trong bộ nhớ Heap.</p>
              <p>Python sử dụng cơ chế định kiểu động (<em>dynamic typing</em>), biến tự động nhận kiểu của đối tượng mà nó tham chiếu tới.</p>
              <div class="callout-box">
                <strong>⚠️ Cạm bẫy tham chiếu vùng nhớ:</strong>
                <p>Khi bạn thực hiện <code>b = a</code> với một đối tượng có thể thay đổi (Mutable như <code>list</code>), cả <code>a</code> và <code>b</code> sẽ cùng trỏ vào <strong>chính xác một địa chỉ ô nhớ</strong>. Sửa một bên là bên kia thay đổi theo!</p>
              </div>
            </div>

            <div class="section-block">
              <h4>2. Scalar (Đại lượng vô hướng / Giá trị đơn)</h4>
              <p>Scalar là một con số hoặc giá trị đơn lẻ, mang số chiều bằng $0$ (phân biệt với Vector $1$ chiều, Matrix ma trận $2$ chiều và Tensor đa chiều trong AI/ML).</p>
              <ul>
                <li><strong>Số nguyên (<code>int</code>):</strong> Giá tiền, batch size (vd: <code>batch_size = 32</code>).</li>
                <li><strong>Số thực (<code>float</code>):</strong> Tốc độ học, điểm số (vd: <code>lr = 0.001</code>).</li>
                <li><strong>Logic (<code>bool</code>):</strong> Trạng thái nhị phân <code>True</code> / <code>False</code>.</li>
                <li><strong>Số phức (<code>complex</code>):</strong> <code>z = 2 + 3j</code>.</li>
              </ul>
            </div>

            <div class="section-block">
              <h4>3. List (Danh sách) – "Chiếc giỏ đi chợ (Thêm/bớt/sửa thoải mái)"</h4>
              <p>Cấu trúc dữ liệu tuần tự linh hoạt nhất trong Python:</p>
              <ul>
                <li><strong>Có thứ tự (Ordered):</strong> Món nào vào trước nằm trước, đánh chỉ số (index) bắt đầu từ $0$, hỗ trợ index âm từ cuối về ($-1$).</li>
                <li><strong>Có thể thay đổi (Mutable):</strong> Thêm (<code>append</code>, <code>insert</code>), xóa (<code>pop</code>, <code>remove</code>), sửa phần tử tùy ý.</li>
                <li><strong>Đa dạng kiểu (Heterogeneous):</strong> Một list có thể chứa cả số, chuỗi, boolean hay một list con khác.</li>
                <li><strong>Cú pháp:</strong> Cặp dấu ngoặc vuông <code>[...]</code>.</li>
              </ul>
              <div class="callout-box">
                <strong>So sánh với NumPy Array trong AI:</strong> <code>list</code> của Python lưu con trỏ rời rạc trong RAM. Trong Deep Learning, ta bắt buộc chuyển sang dùng <code>numpy.ndarray</code> hoặc <code>torch.Tensor</code> vì dữ liệu được lưu trên mảng bộ nhớ liên tục (Contiguous Memory), hỗ trợ tính toán ma trận song song siêu tốc.
              </div>
            </div>

            <div class="section-block">
              <h4>4. Tuple (Bộ cố định) – "Thông tin in ép dẻo trên thẻ CCCD (Cấm sửa)"</h4>
              <p>Tương tự như <code>list</code> nhưng có một đặc tính tối quan trọng: <strong>Bất biến (Immutable)</strong>.</p>
              <ul>
                <li>Một khi đã tạo, <strong>không thể</strong> thêm, xóa hoặc thay đổi bất kỳ phần tử nào bên trong.</li>
                <li><strong>Cú pháp:</strong> Dùng cặp ngoặc tròn <code>(...)</code>. (Lưu ý: Tuple có $1$ phần tử phải có dấu phẩy ở cuối: <code>x = (5,)</code>).</li>
                <li><strong>Ứng dụng:</strong> Lưu kích thước ảnh cố định <code>image_shape = (224, 224, 3)</code>, tọa độ GPS, trả về nhiều giá trị từ hàm, hoặc dùng làm Key trong Dictionary.</li>
              </ul>
            </div>

            <div class="section-block">
              <h4>5. Dict / Dictionary (Từ điển) – "Danh bạ điện thoại / Menu quán ăn"</h4>
              <p>Thay vì tìm kiếm bằng số thứ tự ($0, 1, 2$), <code>dict</code> lưu dữ liệu theo cặp <strong>Khóa - Giá trị (<code>key: value</code>)</strong>.</p>
              <ul>
                <li><strong>Key (Khóa):</strong> Phải là đối tượng <strong>bất biến và băm được (Hashable)</strong> như số, chuỗi, hoặc tuple. <em>Tuyệt đối không được dùng List hay Dict làm Key</em>. Key là duy nhất (không trùng lặp).</li>
                <li><strong>Value (Giá trị):</strong> Bất kỳ kiểu dữ liệu nào.</li>
                <li><strong>Tốc độ tra cứu:</strong> Cực kỳ nhanh với độ phức tạp trung bình là $O(1)$ nhờ cấu trúc Bảng băm (Hash Table).</li>
                <li><strong>Cú pháp:</strong> Dùng ngoặc nhọn <code>{"key": value}</code>.</li>
              </ul>
            </div>

            <div class="section-block">
              <h4>6. Set (Tập hợp) – "Túi gom hàng tự động lọc sạch trùng lặp"</h4>
              <p>Mô phỏng trực tiếp khái niệm Tập hợp trong Toán học:</p>
              <ul>
                <li><strong>Duy nhất (Unique):</strong> Bỏ $10$ phần tử trùng nhau vào set thì nó cũng tự động gộp thành $1$.</li>
                <li><strong>Không có thứ tự (Unordered):</strong> Không hỗ trợ truy xuất theo chỉ số (không thể gọi <code>s[0]</code>).</li>
                <li><strong>Cú pháp:</strong> Dùng ngoặc nhọn <code>{1, 2, 3}</code>. Muốn tạo set rỗng phải dùng <code>set()</code> (vì <code>{}</code> sẽ tạo ra dict).</li>
              </ul>
            </div>

            <div class="section-block">
              <h4>7. Argument vs Parameter – "Mẫu đơn in sẵn" và "Chữ bạn điền"</h4>
              <ul>
                <li><strong>Parameter (Tham số):</strong> Là tên biến được khai báo ở phần định nghĩa hàm (như các <strong>ô trống trên mẫu đơn</strong> in sẵn: <code>[Tên: ...]</code>, <code>[Năm sinh: ...]</code>).</li>
                <li><strong>Argument (Đối số):</strong> Là giá trị cụ thể bạn cầm bút <strong>điền vào ô trống</strong> khi gọi hàm thực tế.</li>
              </ul>
              <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                <thead>
                  <tr style="background: var(--primary-light);">
                    <th style="padding: 8px; border: 1px solid var(--border-color);">Phân loại Argument</th>
                    <th style="padding: 8px; border: 1px solid var(--border-color);">Ý nghĩa</th>
                    <th style="padding: 8px; border: 1px solid var(--border-color);">Ví dụ cú pháp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>Positional</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">Gán theo đúng thứ tự từ trái sang phải</td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>calc(10, 20)</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>Keyword</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">Chỉ định rõ tên tham số (không cần theo thứ tự)</td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>calc(y=20, x=10)</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>Default</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">Giá trị mặc định sẵn nếu người gọi không truyền</td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>def calc(x, b=0):</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>*args</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">Thu thập số lượng vô hạn đối số vị trí thành <strong>Tuple</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>def f(*args):</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>**kwargs</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">Thu thập số lượng vô hạn đối số từ khóa thành <strong>Dict</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>def f(**kwargs):</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="section-block">
              <h4>8. Bảng so sánh 4 cấu trúc dữ liệu cốt lõi</h4>
              <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                <thead>
                  <tr style="background: var(--primary-light); text-align: left;">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Tiêu chí</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">List (<code>[...]</code>)</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Tuple (<code>(...)</code>)</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Dict (<code>{k: v}</code>)</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">Set (<code>{...}</code>)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Thứ tự (Ordered)</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Có (chỉ số $0$)</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Có (chỉ số $0$)</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Có (từ Python 3.7+)</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Không</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Có thể sửa (Mutable)</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Có</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>KHÔNG</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Có</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Có</strong></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Trùng lặp</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Cho phép</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Cho phép</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Key duy nhất</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Lọc sạch trùng</strong></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Cách truy xuất</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Theo chỉ số <code>a[i]</code></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Theo chỉ số <code>t[i]</code></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Theo Khóa <code>d[key]</code></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Duyệt vòng lặp <code>for</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Mục đích chính</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Danh sách thay đổi linh hoạt</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Bảo vệ dữ liệu, hằng số</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Tra cứu $O(1)$, cấu hình</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Lọc phần tử duy nhất, giao/hợp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          math: `
            <div class="section-block">
              <h4>1. Phép toán Tập hợp (Set Operations)</h4>
              <p>Cấu trúc <code>set</code> hỗ trợ trực tiếp các phép toán tập hợp đại số kinh điển:</p>
              <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                <thead>
                  <tr style="background: var(--primary-light);">
                    <th style="padding: 8px; border: 1px solid var(--border-color);">Phép toán</th>
                    <th style="padding: 8px; border: 1px solid var(--border-color);">Ký hiệu Toán học</th>
                    <th style="padding: 8px; border: 1px solid var(--border-color);">Toán tử Python</th>
                    <th style="padding: 8px; border: 1px solid var(--border-color);">Phương thức hàm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>Hợp (Union)</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">$A \\cup B$</td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A | B</code></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A.union(B)</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>Giao (Intersection)</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">$A \\cap B$</td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A & B</code></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A.intersection(B)</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>Hiệu (Difference)</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">$A \\setminus B$</td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A - B</code></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A.difference(B)</code></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><strong>Hiệu đối xứng</strong></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);">$A \\Delta B$</td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A ^ B</code></td>
                    <td style="padding: 8px; border: 1px solid var(--border-color);"><code>A.symmetric_difference(B)</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="section-block">
              <h4>2. Độ phức tạp thuật toán (Time Complexity):</h4>
              <p>Nhờ cấu trúc Bảng băm (Hash Table), thời gian tìm kiếm một phần tử trong <code>dict</code> hoặc <code>set</code> là độc lập với số lượng phần tử $N$:</p>
              <div style="text-align: center; margin: 15px 0; font-size: 18px;">
                $$\\mathcal{T}_{\\text{Dict / Set}} = O(1)$$
              </div>
              <p>Trong khi đó, duyệt tìm một phần tử trong <code>list</code> đòi hỏi duyệt tuyến tính từ đầu tới cuối:</p>
              <div style="text-align: center; margin: 15px 0; font-size: 18px;">
                $$\\mathcal{T}_{\\text{List search}} = O(N)$$
              </div>
            </div>

            <div class="section-block">
              <h4>3. Phân cấp Thứ nguyên Không gian (Dimensions in AI):</h4>
              <ul>
                <li><strong>Scalar:</strong> $s \\in \\mathbb{R}$ (Không gian $0$ chiều, ví dụ: Loss = $0.025$)</li>
                <li><strong>Vector (1D):</strong> $\\mathbf{x} = [x_1, x_2, \\dots, x_d]^T \\in \\mathbb{R}^d$ ($1$ chiều)</li>
                <li><strong>Matrix (2D):</strong> $\\mathbf{X} \\in \\mathbb{R}^{m \\times n}$ ($2$ chiều)</li>
                <li><strong>Tensor (4D trong Computer Vision):</strong> $\\mathcal{X} \\in \\mathbb{R}^{B \\times C \\times H \\times W}$ (Batch size, Channels, Height, Width)</li>
              </ul>
            </div>
          `,
          code: `
# ==========================================
# 1. BIẾN VÀ CƠ CHẾ THAM CHIẾU (MUTABLE VS IMMUTABLE)
# ==========================================
a = [1, 2, 3]
b = a                 # b và a cùng trỏ chung một địa chỉ ô nhớ
b.append(4)
print("a:", a)        # [1, 2, 3, 4] -> a bị thay đổi!

# Cách copy tách biệt ô nhớ độc lập:
c = a.copy()
c.append(99)
print("a vẫn an toàn:", a) # [1, 2, 3, 4]

# ==========================================
# 2. TUPLE (BẤT BIẾN - DÙNG CHO CẤU HÌNH & TỌA ĐỘ)
# ==========================================
img_shape = (224, 224, 3) # (H, W, Channels)
# img_shape[0] = 512      # Lỗi TypeError!

# ==========================================
# 3. DICTIONARY (CẶP KHÓA - GIÁ TRỊ TRA CỨU O(1))
# ==========================================
model_config = {
    "model_name": "ResNet50",
    "lr": 0.001,
    "epochs": 100,
    "batch_size": 32,
    "pretrained": True
}
print("Learning rate:", model_config["lr"])
model_config["optimizer"] = "AdamW" # Thêm cặp mới dễ dàng

# ==========================================
# 4. SET (LỌC TRÙNG LẶP & CÁC PHÉP TOÁN TẬP HỢP)
# ==========================================
dataset_labels = ["cat", "dog", "cat", "bird", "dog", "cat"]
unique_classes = set(dataset_labels)
print("Các lớp duy nhất:", unique_classes) # {'cat', 'dog', 'bird'}

train_set = {"cat", "dog", "bird"}
test_set = {"dog", "elephant"}
print("Các con vật chung (Giao &):", train_set & test_set) # {'dog'}
print("Tất cả các con vật (Hợp |):", train_set | test_set)

# ==========================================
# 5. PARAMETERS VÀ ARGUMENTS (KÈM *ARGS, **KWARGS)
# ==========================================
# x, y là parameters
def compute_linear(x, w, b=0.0):
    return w * x + b

# 5, 2.5 là arguments (đối số truyền vào)
val = compute_linear(5, 2.5)

# Hàm nhận linh hoạt số lượng đối số
def build_model(name, *layers, **hyperparams):
    print(f"Mô hình: {name}")
    print("Các lớp mạng (Tuple):", layers)
    print("Siêu tham số (Dict):", hyperparams)

build_model("MyCNN", "Conv2d", "BatchNorm", "ReLU", "Linear", lr=0.001, drop=0.2)
          `,
          quiz: [
            {
              question: "Đoạn code sau in ra kết quả gì: a = [10, 20]; b = a; b.append(30); print(len(a))?",
              options: [
                "2",
                "3",
                "Báo lỗi TypeError",
                "None"
              ],
              answer: 1,
              explanation: "Vì List là kiểu Mutable và 'b = a' chỉ gán con trỏ tham chiếu cùng vùng nhớ, thao tác trên b sẽ làm thay đổi danh sách a. Do đó độ dài len(a) là 3."
            },
            {
              question: "Trong Python, đối tượng nào sau đây KHÔNG THỂ được sử dụng làm Key trong Dictionary?",
              options: [
                "Chuỗi 'learning_rate'",
                "Số nguyên 42",
                "Tuple (224, 224)",
                "List [1, 2, 3]"
              ],
              answer: 3,
              explanation: "Key của Dictionary bắt buộc phải là đối tượng bất biến và băm được (Hashable). List là Mutable nên không thể dùng làm Key."
            },
            {
              question: "Cú pháp đúng để tạo một Tuple chỉ có đúng 1 phần tử số 5 là gì?",
              options: [
                "t = (5)",
                "t = (5,)",
                "t = tuple[5]",
                "t = {5}"
              ],
              answer: 1,
              explanation: "Trong Python, nếu chỉ viết (5) thì Python xem dấu ngoặc tròn là dấu ngoặc ưu tiên số học (số nguyên 5). Để tạo Tuple 1 phần tử, bắt buộc phải có dấu phẩy: (5,)."
            },
            {
              question: "Trong định nghĩa hàm 'def train(epochs, lr=0.01):', 'epochs' và 'lr' được gọi là gì?",
              options: [
                "Parameters (Tham số)",
                "Arguments (Đối số)",
                "Local Variables",
                "Constants"
              ],
              answer: 0,
              explanation: "Các biến nằm ở định nghĩa hàm gọi là Parameters (Tham số). Giá trị thực tế đưa vào lúc gọi hàm mới gọi là Arguments (Đối số)."
            }
          ],
          flashcards: [
            { front: "Scalar", back: "Đại lượng vô hướng, mang 0 chiều trong không gian, chứa đúng 1 giá trị đơn lẻ (int, float, bool, complex)." },
            { front: "Variable trong Python", back: "Là tấm tem dán nhãn tên (reference pointer) trỏ đến vùng nhớ Heap của đối tượng, không phải là ô chứa giá trị cứng." },
            { front: "Mutable vs Immutable", back: "Mutable (sửa được): List, Dict, Set. Immutable (bất biến, cấm sửa): Tuple, int, float, str, bool." },
            { front: "Dictionary Key Rule", back: "Key trong Dict bắt buộc phải là Hashable (bất biến: str, int, tuple). Tuyệt đối không được dùng List làm Key." },
            { front: "*args", back: "Gói tất cả các đối số vị trí (positional) dư thừa thành một Tuple." },
            { front: "**kwargs", back: "Gói tất cả các đối số từ khóa (keyword) dư thừa dạng key=value thành một Dictionary." }
          ],
          tips: `
            <div class="section-block">
              <h4>Câu hỏi phỏng vấn AI / Python cốt lõi:</h4>
              <p><strong>1. Phân biệt sự khác nhau giữa Shallow Copy và Deep Copy?</strong></p>
              <p><strong>Trả lời:</strong> Shallow Copy (<code>a.copy()</code>) tạo danh sách mới nhưng các phần tử con lồng bên trong (nested objects) vẫn trỏ chung vùng nhớ. Deep Copy (<code>copy.deepcopy(a)</code>) sao chép đệ quy hoàn toàn mọi cấp, tạo ra bản sao độc lập 100%.</p>
            </div>
            <div class="section-block">
              <p><strong>2. Tại sao lại dùng Tuple thay vì List dù List đa năng hơn?</strong></p>
              <p><strong>Trả lời:</strong></p>
              <ul>
                <li><strong>An toàn dữ liệu:</strong> Đảm bảo cấu hình, kích thước ảnh, hằng số không bị sửa đổi ngoài ý muốn (Write-protection).</li>
                <li><strong>Hiệu năng:</strong> Tuple chiếm ít bộ nhớ RAM hơn và được cấp phát nhanh hơn List.</li>
                <li><strong>Khả năng băm (Hashability):</strong> Tuple có thể làm Key cho Dictionary, trong khi List thì không.</li>
              </ul>
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
