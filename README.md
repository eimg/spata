# SPATA - Full-Stack Starter Template

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

> **SPATA** (SPA Starter) - A comprehensive, production-ready full-stack starter template that gets you from zero to deployment in minutes, not hours.

## 🚀 What is SPATA?

SPATA eliminates the tedious initial setup tasks that every modern web project requires. Instead of spending days configuring linters, tests, routing, state management, and essential packages, you can focus on building your actual product from day one.

### ✨ Perfect for:
- 🏢 **Startups** needing to move fast with proven architecture
- 👨‍💻 **Developers** who want to skip the boilerplate setup
- 🎯 **Product teams** focusing on features, not configuration
- 📚 **Learning** modern full-stack development patterns

## 🏗️ Architecture Overview

SPATA provides a complete ecosystem with four integrated components:

```
📦 SPATA
├── 🌐 Web App (React SPA)
├── 📱 Mobile App (React Native + Expo)  
├── ⚡ API Backend (Express + TypeScript)
└── 📖 Documentation (Docusaurus)
```

## 🛠️ Tech Stack

### Web App (`/app`)
- **Framework**: React 18 + Vite (lightning-fast development)
- **Language**: TypeScript (type safety)
- **Styling**: Tailwind CSS + shadcn/ui (beautiful, accessible components)
- **Routing**: React Router v7 (client-side routing)
- **State Management**: React Query (server state) + React Hook Form (form state)
- **Testing**: Vitest + React Testing Library + jsdom
- **Theme**: Built-in light/dark mode switcher
- **Linting**: ESLint with React Query rules

### Mobile App (`/mobile`)
- **Framework**: React Native + Expo (cross-platform mobile)
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **State Management**: React Query + React Hook Form
- **Testing**: Jest + React Native Testing Library
- **Theme**: Custom theme system with light/dark mode
- **Linting**: ESLint with React Query rules

### API Backend (`/api`)
- **Runtime**: Node.js + Express
- **Language**: TypeScript
- **Database**: Prisma ORM + SQLite (easily swappable)
- **Validation**: Express Validator
- **Testing**: Jest + supertest
- **Development**: Hot reload with nodemon
- **Database Tools**: Migrations, seeding, and reset capabilities

### Documentation (`/doc`)
- **Framework**: Docusaurus v3
- **Language**: TypeScript + MDX
- **Features**: Blog, versioning, search, and internationalization ready

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### 1️⃣ Clone and Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd spata

# Choose your component and get started!
```

### 2️⃣ Start Development

#### 🌐 Web App
```bash
cd app
npm install
npm run dev
```
- Opens at `http://localhost:5173`
- Hot reload enabled
- React DevTools & React Query DevTools included

#### 📱 Mobile App
```bash
cd mobile
npm install
npm run start
```
- Scan QR code with Expo Go app
- Works on iOS, Android, and web
- Hot reload across all platforms

#### ⚡ API Backend
```bash
cd api
# Setup environment
cp prisma.env .env

npm install
npm run migrate  # Setup database
npm run seed     # Add sample data
npm run dev      # Start development server
```
- Runs at `http://localhost:3000`
- Database UI at `npx prisma studio`
- API automatically restarts on changes

#### 📖 Documentation
```bash
cd doc
npm install
npm run start
```
- Opens at `http://localhost:3000`
- Live editing with hot reload
- Production build with `npm run build`

## 📁 Project Structure

```
spata/
├── 📱 app/                 # React Web Application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── lib/           # Utilities and configuration
│   │   └── assets/        # Static assets
│   ├── tests/             # Component and integration tests
│   └── public/            # Public assets
│
├── 📲 mobile/             # React Native Mobile App
│   ├── app/               # Expo Router pages
│   ├── components/        # Reusable mobile components
│   ├── constants/         # App constants and themes
│   └── __tests__/         # Mobile app tests
│
├── 🔧 api/                # Express API Backend
│   ├── src/
│   │   ├── routes/        # API route handlers
│   │   └── index.ts       # Express server setup
│   ├── prisma/            # Database schema and migrations
│   └── __tests__/         # API endpoint tests
│
└── 📚 doc/                # Docusaurus Documentation
    ├── docs/              # Documentation pages
    ├── blog/              # Blog posts
    └── src/               # Custom components
```

## 🧪 Testing

Each component includes comprehensive testing setup:

```bash
# Web App Testing
cd app && npm test

# Mobile App Testing  
cd mobile && npm test

# API Testing
cd api && npm test
```

## 🔧 Available Scripts

### Web App (`/app`)
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm test` - Run tests with Vitest
- `npm run lint` - Run ESLint

### Mobile App (`/mobile`)
- `npm run start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run as web app
- `npm test` - Run tests with Jest

### API (`/api`)
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript
- `npm run start` - Start production server
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed database with sample data
- `npm run migrate:reset` - Reset database
- `npm test` - Run API tests

### Documentation (`/doc`)
- `npm run start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally

## 🎨 Customization

### Themes & Styling
- **Web**: Modify `tailwind.config.js` and shadcn/ui components
- **Mobile**: Update theme constants in `constants/Colors.ts`
- Both apps include light/dark mode switching out of the box

### Database Schema
```bash
cd api
# Edit prisma/schema.prisma
npm run migrate
```

### Environment Variables
- **API**: Copy `prisma.env` to `.env` and customize
- **Web/Mobile**: Add environment variables as needed

## 🚀 Deployment

### Web App
- **Vercel/Netlify**: Connect your Git repository
- **Static Hosting**: Run `npm run build` and deploy `dist/` folder

### Mobile App
- **Expo**: Run `expo build` for app store deployment
- **Development Build**: Use EAS Build for custom native code

### API
- **Railway/Render**: Connect your Git repository
- **VPS**: Use PM2 with `npm run build && npm run start`

### Documentation
- **GitHub Pages**: Use `npm run deploy`
- **Static Hosting**: Deploy `build/` folder after `npm run build`

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🗺️ Roadmap

- [ ] **Authentication System** - JWT-based auth with user management
- [ ] **Database Options** - PostgreSQL, MySQL configuration guides
- [ ] **Deployment Scripts** - One-command deployment to popular platforms
- [ ] **Component Library** - Extended shadcn/ui component collection
- [ ] **Testing Coverage** - E2E testing with Playwright
- [ ] **Monitoring** - Built-in error tracking and analytics
- [ ] **i18n Support** - Internationalization for global apps

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 💬 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/your-org/spata/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/your-org/spata/discussions)
- 📖 **Documentation**: Visit `/doc` after running the docs server

---

<div align="center">

**Built with ❤️ by [Fairway Technology](https://fairway.technology)**

⭐ **Star this repo if SPATA helps you build faster!** ⭐

</div>
