

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

✨ Tiptap Callout Extension 🚀
This project is a custom Tiptap extension that adds a Callout block 📝 to a React-based text editor. The Callout extension allows users to insert highlighted messages with different types (e.g., ℹ️ Info, ⚠️ Warning, ✅ Success, ❌ Error) inside the editor.

🔥 Features:
✅ Custom Callout block support 🎨
✅ Users can select different Callout types (ℹ️ Info, ⚠️ Warning, ✅ Success, ❌ Error)
✅ Interactive buttons 🎯 to insert Callout messages
✅ Built with React, Tiptap, and StarterKit ⚛️
✅ Styled using CSS 🎨 for visual differentiation

🛠 Technologies Used:
🚀 React – For building the frontend 🏗️
📝 Tiptap – A customizable rich-text editor ✍️
📦 Tiptap StarterKit – Provides basic text formatting features
🎨 CSS – For styling the Callout block 🎭

⚙️ How It Works:
1️⃣ The editor is initialized using Tiptap's useEditor hook.
2️⃣ The Callout extension is created as a custom Tiptap Node, allowing users to insert callouts.
3️⃣ The Callout type (ℹ️ Info, ⚠️ Warning, etc.) is passed as an attribute.
4️⃣ Users can click buttons 🎯 to insert different types of callouts dynamically.
5️⃣ The editor renders the callouts with distinct styles 🎨 based on their type.

💡 This extension enhances text editing by allowing users to add visually distinct Callout messages for important notes, warnings, or alerts. 🚀
