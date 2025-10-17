# TechEquitas - Bridging the Digital Divide

A modern, responsive website for TechEquitas, a non-profit organization dedicated to collecting old technology and donating it to those in need.

> **Build Status**: Fixed autoprefixer dependency issue

## 🌟 Features

### Pages & Sections
- **Home Page**: Hero section, impact statistics, mission overview, testimonials carousel
- **About Page**: Mission/vision statements, organization timeline, team profiles
- **Donate Page**: Interactive device donation form with photo upload capability
- **Workshops Page**: Filterable workshop listings for kids and seniors programs
- **Contact Page**: Contact form, office information, FAQ section

### Design & User Experience
- Clean, professional design with blue (#1e3a8a) primary color scheme
- Fully responsive design optimized for mobile, tablet, and desktop
- Interactive components with smooth hover effects and transitions
- Accessible navigation with proper focus states
- Modern card-based layouts with subtle shadows and rounded corners

### Technical Implementation
- Built with **Next.js 14** using App Router
- Styled with **Tailwind CSS** for consistent, maintainable styling
- TypeScript for type safety and better development experience
- Optimized images using Next.js Image component
- Reusable component architecture (Button, Card, Navbar, Footer)
- Static data for forms and content (no backend required)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TechEqutiers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
  app/                    # Next.js App Router pages
    about/               # About page
    contact/             # Contact page  
    donate/              # Donation form page
    workshops/           # Workshops listing page
    layout.tsx           # Root layout with navigation
    page.tsx             # Home page
    globals.css          # Global styles and Tailwind imports
  components/            # Reusable components
    Button.tsx           # Customizable button component
    Card.tsx             # Flexible card container
    Footer.tsx           # Site footer with links and contact info
    Navbar.tsx           # Responsive navigation header
```

## 🎨 Design System

### Colors
- **Primary Blue**: #1e3a8a (text, buttons, accents)
- **Light Blue**: #eff6ff (backgrounds, hover states)  
- **White**: #ffffff (card backgrounds, button text)
- **Gray Scale**: Various shades for text and borders

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for impact
- **Body Text**: Medium weight, good readability

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent padding, shadows, and hover effects
- **Forms**: Clean inputs with focus states and validation

## 🔧 Customization

### Adding New Content
- **Testimonials**: Update the `testimonials` array in `src/app/page.tsx`
- **Team Members**: Modify the `team` array in `src/app/about/page.tsx`
- **Workshops**: Add entries to the `workshops` array in `src/app/workshops/page.tsx`
- **Contact Info**: Update contact details in `src/components/Footer.tsx` and `src/app/contact/page.tsx`

### Styling Changes
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Spacing**: Adjust component padding and margins in individual components

### Images
Replace placeholder images with actual organization photos:
- Update Unsplash URLs with local images in `/public` folder
- Modify `next.config.js` to allow additional image domains

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px (single column layouts, mobile navigation)
- **Tablet**: 768px - 1024px (two-column grids, adjusted spacing)  
- **Desktop**: > 1024px (multi-column layouts, full navigation)

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works between all pages
- [ ] Forms submit successfully (with placeholder functionality)
- [ ] Images load and display properly
- [ ] Responsive design works on different screen sizes
- [ ] Hover states and animations function correctly

### Browser Compatibility
Tested and optimized for:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deployment Options
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** (requires Node.js support)

## 📄 License

This project is created for TechEquitas nonprofit organization. All content and branding materials are property of TechEquitas.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions about this website implementation:
- Create an issue in the repository
- Contact the development team

---

**Built with ❤️ for the TechEquitas community**