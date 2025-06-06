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


/src
│
├── /app                      # App Router layout
│   └── layout.tsx
│   └── page.tsx
│
├── /features                 # Vertical Slices theo từng tính năng
│   └── /auth
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── types.ts
│       ├── login/
│       │   ├── LoginForm.tsx
│       │   ├── page.tsx
│       │   └── schema.ts
│       └── register/
│           ├── RegisterForm.tsx
│           └── page.tsx
│
│   └── /dashboard
│       ├── components/
│       ├── page.tsx
│
├── /shared                  # Tái sử dụng cross-feature
│   ├── components/
│   ├── lib/                 # tiện ích, hàm helper
│   ├── constants/
│   ├── types/
│   └── ui/                  # wrapper UI lib (MUI, ShadCN...)
│
├── /core                    # Lõi app: store, config, context, auth
│   ├── providers.tsx
│   ├── store/               # Redux, Zustand...
│   └── api/                 # base axios/fetch client
│
└── /styles
    └── globals.css
