#!/bin/bash

# React App Deployment Script for AWS EC2
# Run this script on your EC2 Ubuntu server

echo "🚀 Starting React App Deployment..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally for process management
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
sudo apt install nginx -y

# Create application directory
echo "📁 Creating application directory..."
sudo mkdir -p /var/www/exhibition-supaagent
sudo chown -R $USER:$USER /var/www/exhibition-supaagent

# Navigate to application directory
cd /var/www/exhibition-supaagent

# Clone your repository (replace with your actual repo URL)
echo "📥 Cloning repository..."
# git clone https://github.com/yourusername/your-repo.git .

# If you're uploading files directly, create the directory structure
mkdir -p src components contexts hooks styles utils public

echo "✅ Setup complete! Now upload your React app files to /var/www/exhibition-supaagent"
echo "📋 Next steps:"
echo "1. Upload your React app files to /var/www/exhibition-supaagent"
echo "2. Run: cd /var/www/exhibition-supaagent && npm install"
echo "3. Run: npm run build"
echo "4. Configure Nginx (see nginx-config.txt)"
echo "5. Start services: sudo systemctl start nginx && pm2 start ecosystem.config.js"
