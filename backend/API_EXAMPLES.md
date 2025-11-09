# API Examples

This document provides examples of how to interact with the Network Backend API.

## Base URL
```
http://localhost:8080/api
```

## Network Operations

### Health Check
```bash
curl http://localhost:8080/api/network/health
```

**Response:**
```
Network service is running
```

### Make Network Request
```bash
curl -X POST http://localhost:8080/api/network/request \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://jsonplaceholder.typicode.com/posts/1",
    "method": "GET"
  }'
```

**Response:**
```json
{
  "statusCode": 200,
  "body": "{\"userId\":1,\"id\":1,\"title\":\"...\",\"body\":\"...\"}",
  "responseTime": 234,
  "success": true,
  "error": null
}
```

## User Management

### Get All Users
```bash
curl http://localhost:8080/api/users
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com"
  }
]
```

### Get User by ID
```bash
curl http://localhost:8080/api/users/1
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Create User
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Wonder",
    "email": "alice@example.com"
  }'
```

**Response:**
```json
{
  "id": 4,
  "name": "Alice Wonder",
  "email": "alice@example.com"
}
```

### Update User
```bash
curl -X PUT http://localhost:8080/api/users/4 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Wonderland",
    "email": "alice.wonderland@example.com"
  }'
```

**Response:**
```json
{
  "id": 4,
  "name": "Alice Wonderland",
  "email": "alice.wonderland@example.com"
}
```

### Delete User
```bash
curl -X DELETE http://localhost:8080/api/users/4
```

**Response:**
```
204 No Content
```

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200 OK` - Successful GET/PUT request
- `201 Created` - Successful POST request
- `204 No Content` - Successful DELETE request
- `404 Not Found` - Resource not found
- `400 Bad Request` - Invalid request body
- `500 Internal Server Error` - Server error

## Testing with React Native

When testing with the React Native app, make sure to:
1. Backend is running on `http://localhost:8080`
2. For Android emulator, use `http://10.0.2.2:8080` instead
3. For iOS simulator, use `http://localhost:8080`
4. For physical devices, use your computer's IP address (e.g., `http://192.168.1.10:8080`)
