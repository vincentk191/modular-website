# Personal Portfolio Website

A modern, modular, and responsive personal portfolio website built with React and designed to be deployed on GitHub Pages.

## 🚀 Features

- **Fully Modular Architecture** - Each component is self-contained and easy to understand
- **Easy to Customize** - All content is managed through a single data configuration file
- **Responsive Design** - Works beautifully on all devices
- **Dark/Light Mode** - Built-in theme toggle
- **Smooth Animations** - Professional transitions and effects
- **Modern UI** - Clean and professional design with gradient accents
- **GitHub Pages Ready** - Automated deployment with GitHub Actions

## 📋 Sections

- **Hero** - Landing section with introduction and social links
- **About** - Personal background and story
- **Skills** - Technical skills with visual progress bars
- **Experience** - Work history in timeline format
- **Education** - Academic background
- **Projects** - Featured projects with images and links
- **Contact** - Contact information and form

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Modern styling with CSS variables
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - Automated deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/modular-website.git
cd modular-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## ✏️ Customization

### Update Your Content

All content is managed in a single file: `src/data/portfolioData.js`

Simply edit this file to update:
- Personal information (name, title, contact details)
- Social media links
- About section text
- Skills and proficiency levels
- Work experience
- Education history
- Projects
- Contact information

**No need to touch any component files!** Everything is data-driven.

### Update Colors and Theme

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  /* ... more variables */
}
```

### Add/Remove Sections

In `src/App.jsx`, simply add or remove component imports and their usage:

```jsx
import NewSection from './components/NewSection/NewSection';

// Then add to the main component
<NewSection />
```

## 🌐 Deployment to GitHub Pages

### Initial Setup

1. Update `package.json` with your GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/modular-website"
```

2. Update `vite.config.js` with your repository name:
```js
base: '/modular-website/'  // Your repo name
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**

### Deploy

The site will automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Or manually deploy using npm:

```bash
npm run deploy
```

## 📱 Adding Contact Form Functionality

The contact form is currently a static form. To make it functional on GitHub Pages, integrate with one of these services:

### Option 1: Formspree
1. Sign up at [formspree.io](https://formspree.io/)
2. Update the form action in `src/components/Contact/Contact.jsx`

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their React integration guide
3. Update the `handleSubmit` function

### Option 3: Netlify Forms
If you decide to host on Netlify instead of GitHub Pages, you can use their built-in form handling.

## 📁 Project Structure

```
modular-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/             # React components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Education/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ScrollToTop/
│   ├── data/
│   │   └── portfolioData.js   # Main content configuration
│   ├── styles/
│   │   ├── index.css          # Global styles and variables
│   │   └── App.css            # App component styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # App entry point
├── index.html                  # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Component Documentation

Each component is well-documented with comments explaining:
- What the component does
- What props it accepts
- How to customize it

Simply open any component file to see detailed inline documentation.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use! If you make improvements that could benefit others, pull requests are welcome.

## 📄 License

MIT License - feel free to use this project for your personal portfolio!

## 👤 Author

**Vincent Kesumo**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Built with React and Vite
- Icons from React Icons
- Deployed on GitHub Pages

---

**Made with ❤️ using React**
