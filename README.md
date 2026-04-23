# ShoppyGlobe - React E-commerce Application

A basic e-commerce application built with **React + Vite**, using **Redux Toolkit** for state management and **React Router (createBrowserRouter)** for routing.

## 🔗 GitHub Repository

> **Add your GitHub repo link here:** `https://github.com/<your-username>/ShoppyGlobe`

## 🚀 Tech Stack

- **Vite** (project bundler)
- **React 18** (functional components + hooks)
- **Redux Toolkit + react-redux** (state management)
- **React Router v6** (`createBrowserRouter`)
- **Plain CSS** (responsive)

## 📦 Features Implemented

| Section | Feature |
|---|---|
| Components | App, Header, ProductList, ProductItem, ProductDetail, Cart, CartItem, Checkout, NotFound |
| Data Fetching | `useEffect` + custom hook `useProducts` fetching from `https://dummyjson.com/products` |
| Product Detail | Fetched dynamically using route param `/product/:id` |
| Error Handling | Graceful error UI on failed API fetch |
| State Management | Redux Toolkit slice for cart + search |
| Search | Filter products via Redux state |
| Cart | Add / Remove / Increase / Decrease (qty never < 1) |
| Routing | `createBrowserRouter` with routes: `/`, `/product/:id`, `/cart`, `/checkout`, `*` |
| Performance | `React.lazy` + `Suspense` for all routed components, `loading="lazy"` on images |
| Checkout | Dummy form, "Place Order" → empties cart → redirects to Home |
| 404 | Friendly NotFound page |
| Styling | Responsive CSS |

## 🛠 Installation

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## 🏗 Build

```bash
npm run build
npm run preview
```

## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
├── hooks/
│   └── useProducts.js
├── redux/
│   ├── store.js
│   ├── cartSlice.js
│   └── searchSlice.js
├── styles/
│   └── App.css
├── App.jsx
└── main.jsx
```

## ✅ Submission Notes

- `node_modules` is **not** included (as required).
- Run `npm install` before launching.
- Make at least 25 meaningful commits when pushing to GitHub.

// 1. Initial setup comment
// 2. Added navbar comment