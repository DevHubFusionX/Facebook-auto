# Facebook Auto-Liker Backend API

Backend API for Facebook automation system that monitors for tagged posts and automatically likes them across multiple accounts.

## 🚀 Features

- **Multi-Account Management**: Handle multiple Facebook accounts simultaneously
- **Tag Detection**: Monitor for custom keywords (e.g., @autolike, @sushma)
- **Automatic Liking**: Auto-like posts when tags are detected
- **Session Persistence**: Save login sessions to MongoDB
- **Headless Operation**: Run in background without visible browsers
- **Real-time Updates**: WebSocket communication for live status
- **Proxy Support**: Use different proxies for each account

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, Puppeteer
- **Database**: MongoDB Atlas
- **Real-time**: WebSocket communication
- **Automation**: Puppeteer with stealth plugins

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/DevHubFusionX/Facebook-auto.git
cd Facebook-auto
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
```

## 🚀 Usage

### Development:
```bash
npm run dev
```

### Production:
```bash
npm start
```

## 📡 API Endpoints

### System Control
- `POST /api/system/start` - Start the automation system
- `POST /api/system/stop` - Stop the automation system
- `POST /api/system/retry-failed` - Retry all failed accounts
- `POST /api/system/headless-mode` - Toggle headless/visible mode

### Account Management
- `GET /api/accounts` - Get all accounts
- `POST /api/accounts/add` - Add new account
- `DELETE /api/accounts/:id` - Remove account
- `POST /api/accounts/:id/retry` - Retry specific account

### Tag Detection
- `GET /api/tag-keyword` - Get current tag keyword
- `POST /api/tag-keyword` - Set tag keyword
- `POST /api/broadcast` - Manual broadcast post for testing

## 🎛️ System Controls

- **🖥️ Visible Mode**: Enable for manual login setup
- **👻 Headless Mode**: Background operation (production)
- **🔄 Retry Failed**: Retry failed account logins
- **🏷️ Tag Configuration**: Set custom detection keywords

## 📋 Workflow

1. **Setup**: Add Facebook accounts via API
2. **Initial Login**: Use visible mode for manual login/2FA
3. **Production**: Switch to headless mode for background operation
4. **Monitoring**: Monitor via WebSocket or API endpoints

## ⚠️ Important Notes

- Use responsibly and comply with Facebook's Terms of Service
- Accounts may require manual verification (CAPTCHA, 2FA)
- Sessions are encrypted and stored securely in MongoDB
- Proxy usage recommended for multiple accounts

## 🔧 Environment Variables

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=3001
```

## 🐳 Docker Deployment

```bash
docker build -t facebook-auto-backend .
docker run -p 3001:3001 -e MONGODB_URI=your_uri facebook-auto-backend
```

## 📊 Monitoring

- Real-time account status via WebSocket (port 8080)
- Memory usage monitoring
- Auto-like history tracking
- Session validity monitoring

## 📄 License

This project is for educational purposes only. Use responsibly.