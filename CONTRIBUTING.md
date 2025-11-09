# Contributing to Vlog Network App

Thank you for your interest in contributing to the Vlog Network App! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vlog.git
   cd vlog
   ```
3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Backend Development
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Development
```bash
cd frontend
npm install
npm start
```

## Code Style Guidelines

### Backend (Java)
- Follow standard Java naming conventions
- Use meaningful variable and method names
- Add JavaDoc comments for public methods
- Keep methods focused and concise
- Use Spring Boot best practices

### Frontend (JavaScript)
- Use ES6+ features
- Follow React Native best practices
- Use functional components with Hooks
- Keep components small and focused
- Use meaningful component and variable names

## Making Changes

1. **Write clean code**
   - Follow the existing code style
   - Add comments where necessary
   - Keep functions small and focused

2. **Test your changes**
   - Test backend endpoints with curl or Postman
   - Test frontend on both iOS and Android if possible
   - Run the automated test script: `./backend/test-api.sh`

3. **Update documentation**
   - Update README.md if you change functionality
   - Update API_EXAMPLES.md for new endpoints
   - Add comments for complex logic

## Submitting Changes

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Provide a clear description of changes

## Pull Request Guidelines

- **Title**: Clear and descriptive
- **Description**: Explain what changes you made and why
- **Testing**: Describe how you tested the changes
- **Screenshots**: Include screenshots for UI changes

## Types of Contributions

### Bug Fixes
- Fix issues in existing code
- Improve error handling
- Fix UI/UX issues

### New Features
- Add new API endpoints
- Add new UI components
- Improve existing features

### Documentation
- Improve README or other docs
- Add code comments
- Create tutorials or guides

### Performance
- Optimize backend performance
- Improve frontend rendering
- Reduce bundle size

## Code Review Process

1. Maintainers will review your PR
2. They may request changes
3. Make requested changes and push updates
4. Once approved, your PR will be merged

## Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- System information (OS, Java version, Node version)
- Error messages or logs

## Questions?

If you have questions:
- Open an issue with the "question" label
- Check existing documentation
- Review closed issues for similar questions

## Code of Conduct

- Be respectful and professional
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## Thank You!

Your contributions help make this project better for everyone. We appreciate your time and effort! 🎉
