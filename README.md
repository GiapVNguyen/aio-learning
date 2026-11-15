# ⚡ AIO 2026 · AI Knowledge Hub

Trạm học tập, ghi chép và tra cứu tương tác cá nhân hóa dành cho chương trình **AIO 2026** (Python, Toán học, Machine Learning, Deep Learning, Computer Vision).

---

## 🚀 Cách mở và sử dụng

### Cách 1: Mở trực tiếp (Không cần cài đặt gì)
* Nhấp đúp chuột trực tiếp vào file `index.html` trong thư mục này để mở ngay trên trình duyệt (Chrome, Edge, Brave...).

### Cách 2: Chạy Localhost (Khuyên dùng)
* Nhấp đúp chuột vào file `run_hub.bat` (hoặc mở Terminal tại thư mục này và gõ `python -m http.server 8080`).
* Trình duyệt sẽ tự động mở địa chỉ: `http://localhost:8080`.

---

## 📂 Cấu trúc thư mục

* `index.html`: Khung sườn ứng dụng Single Page (Header, Tabs môn học, Sidebar kỹ năng, Khung nội dung và Ô tra cứu toàn diện).
* `style.css`: Giao diện hiện đại, hỗ trợ Dark Mode / Light Mode, hiệu ứng xoay lật 3D Flashcard, thẻ Quiz tương tác, responsive trên mọi kích thước màn hình.
* `data.js`: **Toàn bộ kho dữ liệu kiến thức**. Tất cả bài học, công thức toán, code mẫu, quiz trắc nghiệm và flashcard đều nằm ở đây.
* `app.js`: Xử lý tương tác động (chuyển tab, chấm điểm quiz, lật thẻ flashcard, render công thức toán học KaTeX, tìm kiếm tức thì theo từ khóa).

---

## ✍️ Cách thêm bài học mới

Khi học bài mới, bạn không cần phải sửa code giao diện HTML/CSS. Bạn chỉ cần:
1. Mở file `data.js`.
2. Sao chép một khối bài mẫu trong môn học tương ứng (ví dụ trong mảng `lessons`).
3. Hoặc chỉ cần bảo tôi: *"Hãy thêm bài Backpropagation vào khóa Deep Learning trong data.js"*, tôi sẽ tự động soạn đầy đủ lý thuyết, công thức toán, code mẫu, quiz và flashcard cho bạn!
