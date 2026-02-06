# Modern Portfolio Build

A modern, responsive portfolio website built with Next.js 14, featuring smooth animations and an elegant design.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Smooth Animations**: GSAP and Locomotive Scroll for engaging user experience
- **Responsive**: Mobile and desktop optimized with adaptive scrolling behavior
- **Component-Based**: Modular architecture with reusable components
- **TypeScript**: Full type safety throughout the codebase
- **Optimized Performance**: Static generation for fast loading times

## 📋 Sections

- **Hero**: Eye-catching introduction with animated elements
- **About**: Personal information and background
- **Projects**: Showcase of work and achievements
- **Achievements**: Highlights and milestones
- **Contact**: Get in touch section

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: GSAP, ScrollTrigger, Locomotive Scroll
- **Icons**: Lucide React, Phosphor Icons

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/pradeepmisal/v0-modern-portfolio-build.git
cd v0-modern-portfolio-build
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### Development

Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Build

Create an optimized production build:

\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`

### Production

Start the production server:

\`\`\`bash
npm start
# or
yarn start
# or
pnpm start
\`\`\`

## 📁 Project Structure

\`\`\`
v0-modern-portfolio-build/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── navigation.tsx   # Navigation bar
│   ├── hero.tsx        # Hero section
│   ├── about.tsx       # About section
│   ├── projects.tsx    # Projects section
│   ├── achievements.tsx # Achievements section
│   ├── contact.tsx     # Contact section
│   ├── preloader.tsx   # Loading animation
│   └── ui/             # Reusable UI components
├── public/             # Static assets
└── styles/             # Additional styles
\`\`\`

## 🎨 Customization

To customize the portfolio for your own use:

1. Update personal information in the component files
2. Modify colors and styles in `tailwind.config.ts`
3. Replace images in the `public` directory
4. Update metadata in `app/layout.tsx`

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pradeepmisal/v0-modern-portfolio-build)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pradeepmisal/v0-modern-portfolio-build/issues).

## 👤 Author

**Pradeep Misal**
- Full Stack Developer specializing in React, Next.js, and modern web technologies

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Animations powered by [GSAP](https://greensock.com/gsap/)
- Design inspiration from modern portfolio trends
