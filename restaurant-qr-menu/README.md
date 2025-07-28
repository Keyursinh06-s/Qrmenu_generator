# Restaurant QR Menu Builder

A complete full-stack application for creating beautiful digital menus for restaurants with QR code access. Built with React, Node.js, and MongoDB.

## 🚀 Features

### Core Features
- **QR Code Generation**: Automatically generate QR codes for menu access
- **Mobile-First Design**: Responsive menus that work on all devices
- **Drag & Drop Menu Builder**: Intuitive interface for creating menus
- **Real-time Updates**: Live menu updates without page refresh
- **Custom Branding**: Customize colors, fonts, and themes
- **Image Optimization**: Automatic image resizing and compression
- **Analytics Dashboard**: Track menu views and popular items

### Advanced Features
- **Multi-Language Support**: Support for multiple languages and currencies
- **Bulk Import**: CSV import for menu items
- **Menu Scheduling**: Time-based menu switching
- **Dietary Tags**: Vegan, vegetarian, gluten-free labels
- **Search & Filtering**: Customer menu search functionality
- **PWA Support**: Progressive Web App capabilities
- **Print Support**: QR code printing layouts

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for routing
- **React Hook Form** for form handling
- **React DnD** for drag and drop
- **Axios** for API calls
- **React Hot Toast** for notifications

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **MongoDB** with Mongoose
- **Multer & Sharp** for image processing
- **QRCode** library for QR generation
- **Socket.io** for real-time updates
- **Express Rate Limit** for API protection

### DevOps
- **Docker** and Docker Compose
- **ESLint** and Prettier for code quality
- **GitHub Actions** for CI/CD (optional)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **MongoDB** (v6 or higher)
- **Git**

For Docker deployment:
- **Docker** (v20 or higher)
- **Docker Compose** (v2 or higher)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/restaurant-qr-menu.git
cd restaurant-qr-menu
```

### 2. Environment Setup

Copy the environment variables file and configure it:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/restaurant-qr-menu
CORS_ORIGIN=http://localhost:3000
```

### 3. Install Dependencies

```bash
# Install root dependencies
npm install

# Install all dependencies (client + server)
npm run install:all
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Ubuntu/Debian
sudo systemctl start mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:7.0
```

### 5. Development Mode

Start both client and server in development mode:

```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 🐳 Docker Deployment

### Quick Docker Setup

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Production Docker Build

```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Start production environment
docker-compose -f docker-compose.prod.yml up -d
```

## 📁 Project Structure

```
restaurant-qr-menu/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── admin/          # Admin dashboard components
│   │   │   ├── menu/           # Customer menu components
│   │   │   ├── shared/         # Reusable components
│   │   │   └── forms/          # Form components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Page components
│   │   ├── utils/              # Utility functions
│   │   ├── types/              # TypeScript types
│   │   └── styles/             # CSS styles
│   ├── package.json
│   └── vite.config.ts
├── server/                     # Node.js backend
│   ├── src/
│   │   ├── routes/             # API routes
│   │   ├── models/             # MongoDB models
│   │   ├── middleware/         # Express middleware
│   │   ├── utils/              # Utility functions
│   │   └── types/              # TypeScript types
│   ├── uploads/                # File uploads
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml          # Docker configuration
├── .env.example               # Environment variables template
└── README.md
```

## 🔧 Available Scripts

### Root Commands
```bash
npm run dev          # Start both client and server in development
npm run build        # Build both client and server for production
npm run start        # Start production server
npm run install:all  # Install dependencies for all packages
```

### Client Commands
```bash
cd client
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Server Commands
```bash
cd server
npm run dev          # Start development server with nodemon
npm run build        # Compile TypeScript to JavaScript
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📖 API Documentation

### Restaurant Endpoints
```
GET    /api/restaurants            # Get all restaurants
POST   /api/restaurants            # Create new restaurant
GET    /api/restaurant/:slug       # Get restaurant by slug
PUT    /api/restaurant/:id         # Update restaurant
DELETE /api/restaurant/:id         # Delete restaurant
```

### Menu Endpoints
```
GET    /api/menu                   # Get all menus
POST   /api/menu                   # Create new menu
GET    /api/menu/:id               # Get specific menu
PUT    /api/menu/:id               # Update menu
DELETE /api/menu/:id               # Delete menu
```

### Public Endpoints
```
GET    /api/public/menu/:slug      # Get public menu by restaurant slug
GET    /api/public/qr/:slug        # Get QR code image
POST   /api/public/analytics/:id   # Track menu view (anonymous)
```

## 🎨 Customization

### Theme Customization

The application supports multiple themes that can be customized:

1. **Modern**: Clean, contemporary design
2. **Classic**: Traditional restaurant styling
3. **Minimal**: Simple, elegant layout
4. **Colorful**: Vibrant, fun design

### Branding Options

- **Colors**: Primary, secondary, and accent colors
- **Fonts**: Google Fonts integration
- **Logo**: Upload custom restaurant logos
- **Layout**: Multiple menu layout options

## 📱 Mobile Features

- **Touch-friendly**: Large tap targets and gestures
- **Offline Support**: PWA caching for better performance
- **Fast Loading**: Optimized images and lazy loading
- **Search**: Voice search and text search
- **Sharing**: Easy menu sharing via QR codes

## 🔒 Security Features

- **Rate Limiting**: API endpoint protection
- **Input Validation**: Server-side validation
- **File Upload Security**: Image type and size validation
- **CORS Configuration**: Cross-origin request handling
- **Helmet**: Security headers middleware

## 📊 Analytics

Track important metrics:

- **QR Code Scans**: Total and unique visitors
- **Popular Items**: Most viewed menu items
- **Device Types**: Mobile, tablet, desktop breakdown
- **Time Analytics**: Peak viewing hours
- **Geographic Data**: Anonymous location tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Check if MongoDB is running
brew services list | grep mongodb
sudo systemctl status mongod

# Restart MongoDB
brew services restart mongodb-community
sudo systemctl restart mongod
```

**Port Already in Use**
```bash
# Find process using port 3000 or 5000
lsof -ti:3000
lsof -ti:5000

# Kill the process
kill -9 <PID>
```

**Build Errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
npm run clean
npm run build
```

## 🔗 Links

- [Live Demo](https://qr-menu-demo.com) (if available)
- [Documentation](https://docs.qr-menu.com) (if available)
- [Bug Reports](https://github.com/your-username/restaurant-qr-menu/issues)
- [Feature Requests](https://github.com/your-username/restaurant-qr-menu/discussions)

## 👥 Support

- **Email**: support@qr-menu.com
- **Discord**: [Join our community](https://discord.gg/qr-menu)
- **GitHub Issues**: [Report bugs or request features](https://github.com/your-username/restaurant-qr-menu/issues)

---

Made with ❤️ for the restaurant industry