# Quick Start Guide

This guide will help you quickly get the Vlog Network App up and running.

## 🚀 Quick Start Options

### Option 1: Run Locally (Recommended for Development)

#### Backend
```bash
# Navigate to backend directory
cd backend

# Build and run
mvn spring-boot:run
```

Backend will be available at `http://localhost:8080`

#### Frontend
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Metro bundler
npm start

# In another terminal, run on Android
npm run android

# OR run on iOS (Mac only)
npm run ios
```

### Option 2: Using Docker (Backend Only)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Backend will be available at http://localhost:8080
```

## 📋 Prerequisites

### Backend Requirements
- ✅ Java 17 or higher
- ✅ Maven 3.6+

### Frontend Requirements
- ✅ Node.js 16 or higher
- ✅ npm or yarn
- ✅ React Native CLI (`npm install -g react-native-cli`)
- ✅ For iOS: Xcode 12+ (Mac only)
- ✅ For Android: Android Studio and Android SDK

## 🧪 Testing the Backend

Once the backend is running, test it with:

```bash
# Run the automated test script
cd backend
./test-api.sh
```

Or manually test endpoints:
```bash
# Health check
curl http://localhost:8080/api/network/health

# Get all users
curl http://localhost:8080/api/users

# Create a user
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'
```

## 📱 Connecting Frontend to Backend

### For Android Emulator
Update `frontend/src/services/NetworkService.js`:
```javascript
const API_BASE_URL = 'http://10.0.2.2:8080/api';
```

### For iOS Simulator
Update `frontend/src/services/NetworkService.js`:
```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

### For Physical Device
Update `frontend/src/services/NetworkService.js` with your computer's IP:
```javascript
const API_BASE_URL = 'http://192.168.1.XXX:8080/api';
```

Find your IP address:
- **Windows**: `ipconfig`
- **Mac/Linux**: `ifconfig` or `ip addr show`

## 🔍 Verify Everything Works

1. **Start the backend** - you should see Spring Boot startup logs
2. **Test the health endpoint** - `curl http://localhost:8080/api/network/health`
3. **Start the frontend** - Metro bundler should start
4. **Open the app** - You should see the Network App UI
5. **Test user list** - Click "Refresh Users" to load users from backend

## 📚 Next Steps

- Check out [README.md](./README.md) for detailed documentation
- See [API_EXAMPLES.md](./backend/API_EXAMPLES.md) for API usage examples
- Explore the code structure in `backend/src` and `frontend/src`

## 🐛 Common Issues

### Backend won't start
- Check if port 8080 is already in use
- Verify Java 17+ is installed: `java -version`
- Ensure Maven is installed: `mvn -version`

### Frontend can't connect to backend
- Make sure backend is running on port 8080
- Check the API_BASE_URL in `NetworkService.js`
- For Android emulator, use `10.0.2.2` instead of `localhost`

### React Native won't build
- Clear cache: `npm start -- --reset-cache`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- For Android: Clean gradle: `cd android && ./gradlew clean`

## 💡 Tips

- Use `mvn spring-boot:run` for backend development (auto-reload on file changes)
- Keep Metro bundler running in a separate terminal for frontend development
- Check backend logs for any API errors
- Use React Native debugger for frontend debugging

## 🎉 You're All Set!

Your network app is now running with:
- ✅ Spring Boot WebFlux backend on port 8080
- ✅ React Native frontend on your device/emulator
- ✅ Full CRUD operations for users
- ✅ Network request proxy functionality

Happy coding! 🚀
