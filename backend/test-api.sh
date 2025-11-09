#!/bin/bash

# API Testing Script for Network Backend
# Make sure the backend is running on http://localhost:8080

BASE_URL="http://localhost:8080/api"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Network Backend API Test Script ===${NC}\n"

# Test 1: Health Check
echo -e "${YELLOW}Test 1: Health Check${NC}"
response=$(curl -s -w "\n%{http_code}" ${BASE_URL}/network/health)
status_code=$(echo "$response" | tail -n1)
if [ "$status_code" = "200" ]; then
    echo -e "${GREEN}✓ Health check passed${NC}"
else
    echo -e "${RED}✗ Health check failed (Status: $status_code)${NC}"
fi
echo ""

# Test 2: Get All Users
echo -e "${YELLOW}Test 2: Get All Users${NC}"
response=$(curl -s -w "\n%{http_code}" ${BASE_URL}/users)
status_code=$(echo "$response" | tail -n1)
if [ "$status_code" = "200" ]; then
    echo -e "${GREEN}✓ Get all users passed${NC}"
    echo "Users found: $(echo "$response" | head -n -1 | grep -o '"id"' | wc -l)"
else
    echo -e "${RED}✗ Get all users failed (Status: $status_code)${NC}"
fi
echo ""

# Test 3: Get User by ID
echo -e "${YELLOW}Test 3: Get User by ID (ID: 1)${NC}"
response=$(curl -s -w "\n%{http_code}" ${BASE_URL}/users/1)
status_code=$(echo "$response" | tail -n1)
if [ "$status_code" = "200" ]; then
    echo -e "${GREEN}✓ Get user by ID passed${NC}"
else
    echo -e "${RED}✗ Get user by ID failed (Status: $status_code)${NC}"
fi
echo ""

# Test 4: Create User
echo -e "${YELLOW}Test 4: Create User${NC}"
response=$(curl -s -w "\n%{http_code}" -X POST ${BASE_URL}/users \
    -H "Content-Type: application/json" \
    -d '{"name":"Test User","email":"test@example.com"}')
status_code=$(echo "$response" | tail -n1)
if [ "$status_code" = "201" ]; then
    echo -e "${GREEN}✓ Create user passed${NC}"
    user_id=$(echo "$response" | head -n -1 | grep -o '"id":[0-9]*' | grep -o '[0-9]*')
    echo "Created user with ID: $user_id"
else
    echo -e "${RED}✗ Create user failed (Status: $status_code)${NC}"
    user_id=""
fi
echo ""

# Test 5: Update User
if [ -n "$user_id" ]; then
    echo -e "${YELLOW}Test 5: Update User (ID: $user_id)${NC}"
    response=$(curl -s -w "\n%{http_code}" -X PUT ${BASE_URL}/users/${user_id} \
        -H "Content-Type: application/json" \
        -d '{"name":"Updated User","email":"updated@example.com"}')
    status_code=$(echo "$response" | tail -n1)
    if [ "$status_code" = "200" ]; then
        echo -e "${GREEN}✓ Update user passed${NC}"
    else
        echo -e "${RED}✗ Update user failed (Status: $status_code)${NC}"
    fi
    echo ""
    
    # Test 6: Delete User
    echo -e "${YELLOW}Test 6: Delete User (ID: $user_id)${NC}"
    response=$(curl -s -w "\n%{http_code}" -X DELETE ${BASE_URL}/users/${user_id})
    status_code=$(echo "$response" | tail -n1)
    if [ "$status_code" = "204" ]; then
        echo -e "${GREEN}✓ Delete user passed${NC}"
    else
        echo -e "${RED}✗ Delete user failed (Status: $status_code)${NC}"
    fi
    echo ""
fi

echo -e "${YELLOW}=== All Tests Completed ===${NC}"
