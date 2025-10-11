// PM2 Ecosystem Configuration
module.exports = {
  apps: [{
    name: 'exhibition-supaagent',
    script: 'serve',
    args: '-s dist -l 3000',
    cwd: '/var/www/exhibition-supaagent',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
