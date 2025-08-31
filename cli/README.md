# 🚀 MVPBlocks CLI

The official command-line interface for **MVPBlocks** - Copy, paste, customize—and launch your idea faster than ever!

MVPBlocks CLI allows you to quickly add beautiful, responsive components to your React/Next.js projects directly from your terminal.

## ✨ Features

- 🎨 **Beautiful Terminal UI** - Stunning ASCII art and colorful interface
- 🔍 **Smart Search** - Find components by name, description, or category
- 📦 **Auto Dependencies** - Automatically installs required packages
- 🔄 **TypeScript & JavaScript** - Support for both TS and JS projects
- 🏗️ **Organized Structure** - Components are organized by type and category
- ⚡ **Lightning Fast** - Quick installation and setup

## 🛠️ Installation

You don't need to install the CLI globally. Use it directly with npx:

```bash
npx mvpblocks --help
```

## 📚 Usage

### List all available components
```bash
npx mvpblocks list
```

### Add a component to your project
```bash
npx mvpblocks add button
npx mvpblocks add hero-1
```

### Search for components
```bash
npx mvpblocks search hero
npx mvpblocks search button
```

### View component categories
```bash
npx mvpblocks categories
```

### Get detailed component information
```bash
npx mvpblocks info button
npx mvpblocks info hero-1
```

### Force language preference
```bash
# Force TypeScript
npx mvpblocks add button --ts

# Force JavaScript
npx mvpblocks add button --js
```

## 🎯 Commands

| Command | Description | Example |
|---------|-------------|---------|
| `list` | List all available components | `npx mvpblocks list` |
| `add <component>` | Add a component to your project | `npx mvpblocks add button` |
| `search <query>` | Search for components | `npx mvpblocks search hero` |
| `categories` | List all available categories | `npx mvpblocks categories` |
| `info <component>` | Get detailed component information | `npx mvpblocks info button` |
| `help` | Show help message | `npx mvpblocks help` |

## 🏗️ Project Structure

After adding components, your project will have this structure:

```
your-project/
├── components/
│   ├── ui/           # Basic UI components (buttons, inputs, etc.)
│   └── mvpblocks/    # Block components (heroes, features, etc.)
├── hooks/            # Custom React hooks
├── lib/
│   └── utils.ts      # Utility functions (automatically created)
└── ...
```

## 🔧 Options

- `--ts, --typescript` - Force TypeScript output
- `--js, --javascript` - Force JavaScript output
- `--help, -h` - Show help message

## 📋 Requirements

- Node.js 18 or higher
- A React/Next.js project with Tailwind CSS
- Package manager: npm, yarn, pnpm, or bun

## 🎨 Component Types

- **UI Components** (`registry:ui`) - Basic building blocks like buttons, inputs, cards
- **Block Components** (`registry:block`) - Complete sections like heroes, features, testimonials
- **Hooks** (`registry:hook`) - Custom React hooks for enhanced functionality
- **Library** (`registry:lib`) - Utility functions and helpers

## 🚀 Quick Start

1. **Create a new Next.js project** (if you don't have one):
   ```bash
   npx create-next-app@latest my-project --typescript --tailwind --eslint
   cd my-project
   ```

2. **Add your first component**:
   ```bash
   npx mvpblocks add button
   ```

3. **Use the component** in your project:
   ```tsx
   import { Button } from "@/components/ui/button"
   
   export default function App() {
     return (
       <Button>Click me</Button>
     )
   }
   ```

## 🌐 Links

- **Website**: [https://blocks.mvp-subha.me](https://blocks.mvp-subha.me)
- **GitHub**: [https://github.com/subhadeeproy3902/mvpblocks](https://github.com/subhadeeproy3902/mvpblocks)
- **Documentation**: [https://blocks.mvp-subha.me/docs](https://blocks.mvp-subha.me/docs)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../CONTRIBUTING.md) for details.

## 📝 License

MIT License - see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

**Subhadeep Roy**
- GitHub: [@subhadeeproy3902](https://github.com/subhadeeproy3902)
- Twitter: [@mvp_Subha](https://twitter.com/mvp_Subha)

---

Made with ❤️ for the developer community
