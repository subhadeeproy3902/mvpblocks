# 🚀 MVPBlocks CLI

The official command-line interface for **MVPBlocks** - Copy, paste, customize—and launch your idea faster than ever!

MVPBlocks CLI is the **most intelligent component CLI** that not only adds components but can **automatically initialize entire projects** with your preferred framework, theme, and setup.

## ✨ Revolutionary Features

### 🪄 **Auto-Project Initialization**
- **Zero Configuration** - Detects if you're in an empty directory and offers to create a project
- **Framework Choice** - Choose between Next.js or Vite + React
- **Official Tools** - Uses `create-next-app` and `create-vite` for rock-solid projects
- **Package Manager Respect** - Automatically detects and uses your preferred package manager (npm, yarn, pnpm, bun)

### 🎨 **Interactive Theme Selection**
- **6 Beautiful Color Palettes** - Zinc, Red, Rose, Orange, Green, Blue
- **Smart CSS Detection** - Automatically finds and updates your CSS files (`globals.css`, `index.css`, etc.)
- **Instant Preview** - See color swatches before making your choice
- **Tailwind Integration** - Perfect CSS variables setup for light/dark themes

### 🚀 **Intelligent Component System**
- **Beautiful Terminal UI** - Stunning ASCII art and colorful interface
- **Smart Search** - Find components by name, description, or category
- **Auto Dependencies** - Automatically installs required packages
- **TypeScript & JavaScript** - Support for both TS and JS projects
- **Organized Structure** - Components are organized by type and category
- **Lightning Fast** - Quick installation and setup

## 🛠️ Installation

You don't need to install the CLI globally. Use it directly with npx:

```bash
npx mvpblocks --help
```

**OR** install globally for faster access:

```bash
npm install -g mvpblocks
mvpblocks --help
```

## 🚀 Quick Start - The Magic Way

### 1. **Start from Scratch** (Recommended)
```bash
# Navigate to where you want your project
mkdir my-awesome-project
cd my-awesome-project

# Run ANY command and MVPBlocks will set everything up!
npx mvpblocks add hero-1 --ts
```

**What happens automatically:**
1. 🔍 **Detects empty directory** and offers project initialization
2. 🎯 **Choose framework**: Next.js or Vite + React
3. 🏗️ **Creates project** using official tools (`create-next-app` or `create-vite`)
4. 📦 **Installs dependencies** with your package manager
5. 🎨 **Interactive theme selection** - pick from 6 beautiful color palettes
6. 🔧 **Sets up Tailwind CSS** (v3 for Next.js, v4 for Vite)
7. 📁 **Creates component structure** and installs your component
8. ✨ **Ready to code!**

### 2. **Existing Projects**
```bash
# In your existing React/Next.js project
npx mvpblocks add button
npx mvpblocks add hero-1 --ts
```

## 🎨 Auto-Initialization Features

### 🏗️ **Framework Support**
- **Next.js** - Full App Router setup with TypeScript, Tailwind CSS, ESLint
- **Vite + React** - Lightning-fast development with Tailwind CSS v4

### 🎨 **Theme System**
Choose from 6 professionally designed color palettes:

| Theme | Description | Perfect For |
|-------|-------------|-------------|
| 🔘 **Zinc** | Modern neutral grays | Professional dashboards, SaaS apps |
| 🔴 **Red** | Bold and energetic | Marketing sites, calls-to-action |
| 🌹 **Rose** | Warm and welcoming | E-commerce, lifestyle brands |
| 🟠 **Orange** | Creative and vibrant | Creative agencies, portfolios |
| � **Green** | Fresh and natural | Health, finance, eco-friendly |
| 🔵 **Blue** | Trust and reliability | Corporate, tech, social platforms |

### 📦 **Package Manager Intelligence**
Automatically detects and uses your preferred package manager:
- **npm** - Default Node.js package manager
- **yarn** - Fast, reliable, and secure dependency management
- **pnpm** - Fast, disk space efficient package manager
- **bun** - Incredibly fast JavaScript runtime and package manager

### 🔍 **Smart CSS Detection**
Automatically finds and updates CSS files:
- `app/globals.css` (Next.js App Router)
- `src/globals.css` (Next.js with src)
- `styles/globals.css` (Custom styles folder)
- `src/index.css` (Vite projects)
- `src/main.css` (Alternative Vite setup)

## 📚 Usage

### **Auto-Initialization Commands**
```bash
# Start a new project with any component
npx mvpblocks add hero-1 --ts    # Next.js or Vite with TypeScript
npx mvpblocks add button --js    # Next.js or Vite with JavaScript
npx mvpblocks add features       # Auto-detects language preference
```

### **Standard Commands**
### **Standard Commands**

#### List all available components
```bash
npx mvpblocks list
```

#### Add a component to your project
```bash
npx mvpblocks add button
npx mvpblocks add hero-1
```

#### Search for components
```bash
npx mvpblocks search hero
npx mvpblocks search button
```

#### View component categories
```bash
npx mvpblocks categories
```

#### Get detailed component information
```bash
npx mvpblocks info button
npx mvpblocks info hero-1
```

#### Force language preference
```bash
# Force TypeScript
npx mvpblocks add button --ts

# Force JavaScript
npx mvpblocks add button --js
```

## ⚡ Live Demo Workflow

Here's what happens when you run MVPBlocks in an empty directory:

```bash
mkdir my-project && cd my-project
npx mvpblocks add hero-1 --ts
```

**Interactive Flow:**
1. 🔍 **Auto-Detection**: "No package.json found. Let's set up a new project!"
2. 🎯 **Framework Choice**: Choose between Next.js or Vite + React
3. 🏷️ **Project Name**: Enter your project name (or use current directory)
4. 🚀 **Project Creation**: Official tools create your project structure
5. 📦 **Dependency Installation**: All dependencies installed automatically
6. 🎨 **Theme Selection**: Interactive color palette picker
7. 🔧 **Theme Application**: CSS variables applied to your theme file
8. 📁 **Component Installation**: Your requested component is added
9. ✨ **Ready!**: Complete project ready for development

## 🎯 Commands Reference

| Command | Description | Auto-Init | Example |
|---------|-------------|-----------|---------|
| `add <component>` | Add component (auto-initializes if needed) | ✅ | `npx mvpblocks add hero-1 --ts` |
| `list` | List all available components | ❌ | `npx mvpblocks list` |
| `search <query>` | Search for components | ❌ | `npx mvpblocks search hero` |
| `categories` | List all available categories | ❌ | `npx mvpblocks categories` |
| `info <component>` | Get detailed component information | ❌ | `npx mvpblocks info button` |
| `help` | Show help message | ❌ | `npx mvpblocks help` |

## 🏗️ Project Structure

### **After Auto-Initialization (Next.js)**
```
my-awesome-project/
├── app/
│   ├── globals.css          # 🎨 Theme applied here
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                  # Basic UI components
│   │   └── button.tsx
│   └── mvpblocks/           # Block components
│       └── hero-1.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── package.json             # 📦 All dependencies
├── tailwind.config.ts       # 🎨 Tailwind setup
└── tsconfig.json           # TypeScript config
```

### **After Auto-Initialization (Vite)**
```
my-awesome-project/
├── src/
│   ├── index.css           # 🎨 Theme applied here
│   ├── App.tsx
│   └── main.tsx
├── components/
│   ├── ui/                 # Basic UI components
│   │   └── button.tsx
│   └── mvpblocks/          # Block components
│       └── hero-1.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── package.json            # 📦 All dependencies
├── vite.config.ts          # ⚡ Vite + Tailwind CSS v4
└── tsconfig.json          # TypeScript config
```

## 🔧 Options & Flags

- `--ts, --typescript` - Force TypeScript output (triggers auto-init if needed)
- `--js, --javascript` - Force JavaScript output (triggers auto-init if needed)
- `--help, -h` - Show help message

## 📋 Requirements

- **Node.js** 18 or higher
- **Package Manager**: npm, yarn, pnpm, or bun (auto-detected)
- **No existing setup needed** - MVPBlocks creates everything for you!

## 🎨 Supported Frameworks & Setups

### **Next.js (Auto-Initialized)**
- ✅ App Router with TypeScript
- ✅ Tailwind CSS v3 
- ✅ ESLint configuration
- ✅ Automatic `globals.css` theme integration
- ✅ Optional `src/` directory support

### **Vite + React (Auto-Initialized)**
- ✅ React with TypeScript/JavaScript  
- ✅ Tailwind CSS v4 with `@tailwindcss/vite`
- ✅ Automatic `index.css` theme integration
- ✅ Lightning-fast development server

### **Existing Projects (Manual)**
- ✅ Any React/Next.js project with Tailwind CSS
- ✅ Components added to existing structure
- ✅ Dependencies auto-installed

## 🎨 Component Types

- **UI Components** (`registry:ui`) - Basic building blocks like buttons, inputs, cards
- **Block Components** (`registry:block`) - Complete sections like heroes, features, testimonials  
- **Hooks** (`registry:hook`) - Custom React hooks for enhanced functionality
- **Library** (`registry:lib`) - Utility functions and helpers

## 🚀 Example Workflows

### **Scenario 1: Complete Beginner**
```bash
# I want to build a landing page
mkdir my-landing-page
cd my-landing-page
npx mvpblocks add hero-1 --ts
# 🎯 Choose Next.js → Enter project name → Pick theme → Done!
npx mvpblocks add features
npx mvpblocks add testimonials  
npx mvpblocks add cta-1
# Perfect landing page ready! 🚀
```

### **Scenario 2: Experienced Developer**  
```bash
# I have specific preferences
mkdir my-saas-app
cd my-saas-app
npx mvpblocks add dashboard --ts
# 🎯 Choose Vite → Modern setup → Blue theme → Ready!
npx mvpblocks add button
npx mvpblocks add modal
# Components added to existing structure
```

### **Scenario 3: Existing Project**
```bash
# Add to my current project  
cd my-existing-project
npx mvpblocks add hero-2
# ✅ Components added directly, no initialization needed
```

## 💡 Pro Tips

### **🎨 Theme Switching**
Want to change themes later? Re-run initialization:
```bash
npx mvpblocks add button --ts  # Will detect existing project
# 🎨 Theme selection will appear for theme switching
```

### **📦 Package Manager Preference**  
MVPBlocks respects your package manager:
```bash
# Will use yarn for everything if yarn.lock exists
yarn create vite my-app
cd my-app  
npx mvpblocks add hero-1  # Uses yarn automatically
```

### **🚀 Speed Tips**
```bash
# Install globally for faster access
npm install -g mvpblocks
mvpblocks add hero-1 --ts  # No npx needed!
```

## 🌐 Links

- **🌐 Website**: [https://blocks.mvp-subha.me](https://blocks.mvp-subha.me)
- **📚 Documentation**: [https://blocks.mvp-subha.me/docs](https://blocks.mvp-subha.me/docs/cli)  
- **📦 NPM Package**: [https://www.npmjs.com/package/mvpblocks](https://www.npmjs.com/package/mvpblocks)
- **💻 GitHub**: [https://github.com/subhadeeproy3902/mvpblocks](https://github.com/subhadeeproy3902/mvpblocks)
- **🐦 Twitter**: [@mvp_Subha](https://twitter.com/mvp_Subha)

## 🎉 What Makes MVPBlocks Special?

### **🪄 Zero Configuration Magic**
Other CLIs require you to set up projects manually. MVPBlocks creates **production-ready projects** with a single command.

### **🎨 Professional Theme System**  
No more tweaking CSS variables manually. Choose from expertly crafted color palettes and get perfect theming instantly.

### **🚀 Official Tools Integration**
Uses `create-next-app` and `create-vite` under the hood, ensuring you get the same quality setup as manual creation.

### **📦 Package Manager Intelligence**
Automatically detects and respects your preferred package manager. No configuration needed.

### **🎯 Smart Defaults**
Every choice is optimized for modern development: TypeScript, Tailwind CSS, latest versions, best practices.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../CONTRIBUTING.md) for details.

**Areas we'd love help with:**
- 🆕 New component designs
- 🐛 Bug fixes and improvements  
- 📖 Documentation enhancements
- 🧪 Testing and quality assurance

## 📝 License

MIT License - see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

**Subhadeep Roy**
- **GitHub**: [@subhadeeproy3902](https://github.com/subhadeeproy3902)
- **Twitter**: [@mvp_Subha](https://twitter.com/mvp_Subha)

---

**🚀 From zero to production-ready in seconds. That's the MVPBlocks promise.**

Made with ❤️ for developers who ship fast 🌟
