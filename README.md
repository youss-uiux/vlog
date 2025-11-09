# Vlog Network App

A full-stack network application built with React Native frontend and Spring Boot WebFlux backend.

## Project Structure

```
vlog/
├── backend/           # Spring Boot WebFlux backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/vlog/network/
│   │   │   │   ├── controller/     # REST controllers
│   │   │   │   ├── model/          # Data models
│   │   │   │   ├── service/        # Business logic
│   │   │   │   └── NetworkApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
└── frontend/          # React Native frontend
    ├── src/
    │   ├── components/     # React components
    │   ├── services/       # API services
    │   └── screens/        # App screens
    ├── App.js
    ├── package.json
    └── index.js
```

## Features

### Backend (Spring Boot WebFlux)
- **Reactive REST API** using Spring WebFlux
- **CORS Configuration** for cross-origin requests
- **User Management** endpoints (CRUD operations)
- **Network Request Proxy** - make HTTP requests through the backend
- **Health Check** endpoint

### Frontend (React Native)
- **User List** - Display and manage users
- **Network Request Tool** - Make custom HTTP requests
- **Modern UI** with smooth animations
- **Error Handling** and loading states
- **Cross-platform** support (iOS & Android)

## Prerequisites

### Backend
- Java 17 or higher
- Maven 3.6+

### Frontend
- Node.js 16 or higher
- npm or yarn
- React Native CLI
- For iOS: Xcode 12+
- For Android: Android Studio and SDK

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. For iOS (Mac only):
```bash
cd ios && pod install && cd ..
```

4. Start the Metro bundler:
```bash
npm start
```

5. Run on Android:
```bash
npm run android
```

6. Run on iOS:
```bash
npm run ios
```

## API Endpoints

### Network Operations
- `POST /api/network/request` - Make a network request through the backend
- `GET /api/network/health` - Health check endpoint

### User Management
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

## API Examples

### Make a Network Request
```bash
curl -X POST http://localhost:8080/api/network/request \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://jsonplaceholder.typicode.com/posts/1",
    "method": "GET"
  }'
```

### Get All Users
```bash
curl http://localhost:8080/api/users
```

### Create a User
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```

## Configuration

### Backend Configuration
Edit `backend/src/main/resources/application.properties`:
```properties
server.port=8080
spring.application.name=network-backend
```

### Frontend Configuration
Update the API URL in `frontend/src/services/NetworkService.js`:
```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

For Android emulator, use: `http://10.0.2.2:8080/api`
For iOS simulator, use: `http://localhost:8080/api`
For physical devices, use your computer's IP address

## Technologies Used

### Backend
- Spring Boot 3.1.5
- Spring WebFlux (Reactive Programming)
- Maven
- Java 17

### Frontend
- React Native 0.72.6
- React 18.2.0
- Axios (HTTP client)
- React Hooks

## Development

### Backend Development
- The backend uses reactive programming with WebFlux
- All endpoints return Mono or Flux for reactive streams
- CORS is configured to allow requests from any origin

### Frontend Development
- The app uses functional components with Hooks
- Network requests are handled through a service layer
- Error handling and loading states are implemented

## Testing

### Backend Tests
```bash
cd backend
mvn test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Building for Production

### Backend
```bash
cd backend
mvn clean package
java -jar target/network-backend-1.0.0.jar
```

### Frontend
Follow the React Native official documentation for building release versions:
- [Android Release Build](https://reactnative.dev/docs/signed-apk-android)
- [iOS Release Build](https://reactnative.dev/docs/publishing-to-app-store)

## Troubleshooting

### Backend Issues
- **Port already in use**: Change the port in `application.properties`
- **Build fails**: Ensure Java 17+ is installed and JAVA_HOME is set correctly

### Frontend Issues
- **Metro bundler issues**: Clear cache with `npm start -- --reset-cache`
- **Cannot connect to backend**: Check the API_BASE_URL and ensure backend is running
- **Android emulator network**: Use `10.0.2.2` instead of `localhost`

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
