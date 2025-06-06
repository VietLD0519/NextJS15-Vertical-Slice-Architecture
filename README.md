# Next.js 15 Vertical Slice Architecture

## Cấu trúc thư mục

- `src/slices`: Chứa các feature slice (ví dụ: user, product, ...)
- `src/shared`: Các thành phần, util dùng chung
- `src/app`: Entry point Next.js

## Tích hợp Material UI

- Đã cài đặt và cấu hình theme MUI.
- Xem `src/theme.ts` và `src/app/layout.tsx`.

## Slice mẫu: user

- Thư mục: `src/slices/user`
- Bao gồm: component, hook, API, types.