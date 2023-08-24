# So sánh Single-Page Application và Multiple-Page Application
|                | Single-Page Application (SPA)                  | Multiple-Page Application (MPA)         |
| -------------- | ---------------------------------------------- | --------------------------------------- |
| **Khái niệm**  | Ứng dụng web hoạt động trên một trang duy nhất | Ứng dụng web có nhiều trang riêng lẻ    |
| **Tải trang**  | Dữ liệu được tải và hiển thị một cách động     | Mỗi trang yêu cầu tải lại toàn bộ trang |
| **Tương tác**  | Sử dụng JavaScript để cập nhật nội dung        | Tải trang mới để thực hiện tương tác    |
| **Ưu điểm**    | - Trải nghiệm tương tác mượt mà                | - SEO tốt hơn <br> - Hiệu suất ban đầu  |
| **Nhược điểm** | - SEO khó khăn hơn                             | - Tương tác có thể trễ hơn              |                        |

# So sánh Server Side Rendering và Client Side Rendering

| Khía cạnh       | Server Side Rendering (SSR)                                             | Client Side Rendering (CSR)                                                          |
| --------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Khái niệm**   | Render HTML tại máy chủ trước khi gửi tới trình duyệt                   | Tải trang cơ bản và sử dụng JavaScript để tạo giao diện                              |
| **Hoạt động**   | Tạo trang hoàn chỉnh tại máy chủ và gửi HTML đến trình duyệt            | Tải trang cơ bản, sau đó tải dữ liệu và tạo giao diện bằng JavaScript                |
| **Ưu điểm**     | - SEO tốt hơn <br> - Hiển thị nhanh ban đầu <br> - Hỗ trợ máy khách yếu | - Tương tác nhanh <br> - Quản lý trạng thái dễ dàng <br> - Phù hợp cho ứng dụng động |
| **Nhược điểm**  | - Độ trễ trong tương tác <br> - Quản lý trạng thái phức tạp hơn         | - SEO khó khăn hơn <br> - Tải trang chậm ban đầu                                     |
| **Phù hợp cho** | Trang web cần SEO tốt và hiển thị nhanh ban đầu                         | Ứng dụng động và tương tác nhanh                                                     |

**Lựa chọn phù hợp** phụ thuộc vào mục tiêu và yêu cầu của dự án. SSR thích hợp cho trang web tập trung vào SEO và hiển thị nhanh ban đầu, trong khi CSR thích hợp cho các ứng dụng động và tương tác nhanh. Có thể kết hợp cả hai phương pháp để tối ưu hóa trải nghiệm người dùng và hiệu suất.


# So sánh Named Exports và Export Default​
|                 | Named Exports                                                   | Export Default                                                                   |
| --------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Mô tả**       | Hữu ích khi xuất nhiều giá trị, dùng tên để truy cập giá trị.   | Chỉ một default export duy nhất cho mỗi module, đơn giản để import.              |
| **Dạng Export** | `export const value = ...;`<br>`export function func() { ... }` | `export default ...;`                                                            |
| **Dạng Import** | `import { value, func } from './module';`                       | `import value from './module';`<br>`import ... from './module';`                 |
| **Ưu điểm**     | Có thể xuất nhiều giá trị riêng biệt.                           | Chỉ gọi một giá trị duy nhất khi import.                                         |
| **Nhược điểm**  | Cần phải nhớ tên cụ thể của các giá trị khi import.             | Không tường minh như named exports, chỉ có thể có một default export cho module. |