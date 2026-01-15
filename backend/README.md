# Task Manager

A full-stack task management application with a React frontend and Laravel backend API. This project helps users manage their tasks efficiently with a clean, modern interface.

## Features

### Backend (Laravel API)
- User authentication (register, login, logout)
- Task CRUD operations
- Task filtering and sorting
- User profile management
- Secure API authentication with Sanctum

### Frontend (React + TypeScript + TailwindCSS)
- Modern, responsive UI built with React 19
- Type-safe components with TypeScript
- Beautiful, accessible UI components using Radix UI
- Form handling with React Hook Form and Zod validation
- State management with React Query
- Responsive design with Tailwind CSS

## Prerequisites

### For Backend
- PHP >= 8.1
- Composer
- MySQL/PostgreSQL/SQLite

### For Frontend
- Node.js >= 18
- pnpm (recommended) or npm

## Getting Started

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rono1579/task-manager.git
   cd task-manager/backend
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Set up environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. Configure your database in `.env`:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=task_manager
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

5. Run database migrations:
   ```bash
   php artisan migrate
   ```

6. Start the backend server:
   ```bash
   php artisan serve
   ```
   The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies (using pnpm):
   ```bash
   pnpm install
   # or using npm
   # npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or using npm
   # npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

## Project Structure

```
task-manager/
├── backend/          # Laravel API
│   ├── app/          # Application code
│   ├── config/       # Configuration files
│   ├── database/     # Migrations and seeders
│   └── routes/       # API routes
│
└── frontend/         # React frontend
    ├── public/       # Static files
    ├── src/          # Source code
    │   ├── components/  # Reusable components
    │   ├── pages/      # Page components
    │   └── lib/        # Utility functions
    └── vite.config.ts  # Vite configuration
```

## API Documentation

API documentation is available using Postman. Import the Postman collection from the `docs` directory.

### Available Scripts (Frontend)

In the frontend directory, you can run:

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview the production build
- `pnpm lint` - Run ESLint

## Environment Variables

- `APP_ENV` - Application environment (local, production, etc.)
- `APP_DEBUG` - Debug mode (true/false)
- `APP_URL` - Application URL
- `DB_*` - Database connection settings
- `MAIL_*` - Email configuration
- `SANCTUM_STATEFUL_DOMAINS` - Domains for session authentication
- `SESSION_DOMAIN` - Session domain configuration

## Testing

Run the tests with:
```bash
php artisan test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development

### Backend Development

Run tests:
```bash
php artisan test
```

### Frontend Development

The frontend uses:
- [Vite](https://vitejs.dev/) for fast development server and building
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [React Query](https://tanstack.com/query) for data fetching and state management
- [Zod](https://zod.dev/) for runtime type validation

## License

This project is open-source and available under the MIT License.
