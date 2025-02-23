#!/bin/bash
echo "🚀 Setting up the project..."

# Install dependencies
npm install

# Initialize Git (if not already initialized)
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git initialized"
fi

# Create default .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "NODE_ENV=development" > .env
    echo "✅ .env file created"
fi

echo "🎉 Setup complete! Run 'npm run dev' to start coding."
