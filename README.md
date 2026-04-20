# ShopHub - E-Commerce Product Showcase

## Overview
ShopHub is a modern, responsive e-commerce product showcase application built with React. It features user authentication, product browsing with search and filtering, and a clean, professional UI designed to fit within the viewport without scrolling.

## Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks for component logic
- **React Router DOM** - Client-side routing for navigation
- **Vite** - Fast build tool and development server

### State Management
- **Redux Toolkit** - Simplified Redux for state management
- **React Redux** - Official React bindings for Redux

### Styling
- **CSS3** - Custom CSS with modern features like Flexbox and Grid
- **Responsive Design** - Mobile-first approach with media queries

### Data & Storage
- **JSON** - Static product data
- **LocalStorage** - Persistent user authentication state

## Features

### Authentication
- Simple login form with username/password
- Redux state management for user data
- Persistent login state across browser sessions
- Automatic logout functionality

### Product Management
- Display of 20 curated products across 3 categories (Electronics, Home, Lifestyle)
- High-quality product images from Unsplash
- Product details including name, description, and price in Indian Rupees

### Search & Filtering
- Real-time search by product name or description
- Category-based filtering (All, Electronics, Home, Lifestyle)
- Combined search and filter functionality

### Pagination
- 3 products per page for optimal viewing
- Previous/Next navigation buttons
- Page number buttons for direct navigation
- Reset to page 1 on search/filter changes

### UI/UX
- Modern, gradient-based design
- Responsive layout that works on desktop and mobile
- Hover effects and smooth transitions
- Equal-height product cards
- Sidebar navigation with active state indicators
- No-scroll design - everything fits in viewport

### Navigation
- Clean routing between login, products, and profile pages
- Sidebar menu with user details display
- Active link highlighting

## Project Structure

```
src/
├── components/
│   ├── Login.jsx          # Authentication form
│   ├── Products.jsx       # Product listing with search/filter/pagination
│   ├── Profile.jsx        # User profile page
│   ├── SideMenu.jsx       # Navigation sidebar
│   └── Layout.jsx         # Main layout wrapper
├── features/
│   └── userSlice.js       # Redux slice for user state
├── App.jsx                # Main application component
├── App.css                # Global styles
├── store.js               # Redux store configuration
├── products.json          # Product data
└── main.jsx               # Application entry point
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

## Key Implementation Details

### State Management
- User authentication state managed with Redux Toolkit
- Persistent storage using localStorage
- Clean separation of concerns with slice-based architecture

### Component Architecture
- Functional components with hooks
- Custom hooks for complex logic (not implemented in this version)
- Separation of presentation and logic

### Styling Approach
- CSS-in-JS for component-specific styles
- Global CSS for layout and responsive design
- Consistent color scheme and typography

### Performance Optimizations
- useMemo for expensive computations (categories, filtered products)
- Efficient re-rendering with proper dependency arrays
- Minimal bundle size by removing unused testing dependencies

### Responsive Design
- Mobile-first CSS with breakpoints
- Flexible grid layouts
- Touch-friendly interface elements

## Future Enhancements
- Add to cart functionality
- Product detail pages
- User registration
- Backend API integration
- Payment processing
- Order history
- Admin panel for product management

## Browser Support
- Modern browsers with ES6+ support
- Tested on Chrome, Firefox, Safari, Edge
- Mobile browsers supported

## Contributing
This is a practice project for learning React and modern web development. Feel free to fork and experiment with additional features.

## License
This project is for educational purposes only.