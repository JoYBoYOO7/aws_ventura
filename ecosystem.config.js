module.exports = {
  apps: [
    {
      name: 'Ventura', // Name for your app in PM2
      script: 'pnpm',
      args: 'start', // Command to run 'pnpm start'
      cwd: '/var/www/ventura-app', // The directory your app is deployed to
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G', // Restart if it exceeds 1GB RAM
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // The port Next.js will run on
      },
    },
  ],
};