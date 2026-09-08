# 🦾 Iron Assistant

Your personal AI assistant with Iron Man capabilities. Control your life like Tony Stark controls his suit.

## Features

### 📅 Daily Automation
- **Smart Morning Routine**: Automated reminders and app locking/unlocking
  - 7:30 AM - Breakfast reminder + 4 music songs
  - 7:45 AM - Get ready alert (meds, teeth, hair, toilet, shoes)
  - 7:55 AM - Lock apps (except transit & weather), pack bag, put on deodorant
  - 8:00 AM - Leave for school
  - 8:30 AM - Arrive at school, freeze screen time
  
- **Schedule Tracking**: View your day's events at a glance
- **Appointment Booking**: Book and manage appointments

### 📱 Communication
- **Phone Calls & Messaging**: Call and text people directly
- **Social Media Access**: Instagram, Snapchat integration
- **Voicemail & Messages**: Check voicemails and message history
- **Language Translation**: Translate text to any language
- **Voice for You**: Speak on phone calls for you

### 📊 Personal Tracking
- **Step Counter**: Track daily steps
- **Health Monitoring**: Integration with health apps
- **Schedule Management**: Know what you have today

### 🤖 Advanced Features
- **Voice Assistant**: Always available, understand your commands
- **Hand Gesture Control**: Control computer with hand gestures
- **Photo Analysis**: Analyze images (ocean depth, objects, etc.)
- **AR Helmet Mode**: See the world like Iron Man
- **Computer Control**: Control your computer from your phone
- **24/7 Availability**: Available anytime, anywhere

### 📞 Add Your Contact
- Phone: 604 328 2162
- Access messages and voicemails in app

## Tech Stack

- **Frontend**: React Native (iOS & Android)
- **Backend**: Node.js + Express
- **Database**: Firebase/MongoDB
- **APIs**: 
  - Google Calendar API
  - Twilio (calls/messaging)
  - Google Cloud Vision (photo analysis)
  - Google Translate API
  - OpenAI (voice assistant)
- **AR**: React Native AR Kit

## Project Structure

```
iron-assistant/
├── mobile/                 # React Native mobile app
│   ├── src/
│   │   ├── screens/       # App screens
│   │   ├── components/    # Reusable components
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   └── assets/        # Images, fonts, etc.
├── backend/               # Node.js backend
│   ├── routes/           # API routes
│   ├── controllers/       # Business logic
│   ├── models/           # Database models
│   ├── services/         # External service integrations
│   └── middleware/       # Express middleware
├── docs/                 # Documentation
└── config/              # Configuration files
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- React Native CLI
- Xcode (iOS) or Android Studio
- Expo CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/blibo3/iron-assistant.git
cd iron-assistant
```

2. Install dependencies
```bash
cd mobile
npm install
cd ../backend
npm install
```

3. Set up environment variables
```bash
cp backend/.env.example backend/.env
# Add your API keys
```

4. Run the app
```bash
# Terminal 1: Start backend
cd backend
npm start

# Terminal 2: Start mobile app
cd mobile
npm start
```

## Features in Detail

### Morning Routine Automation
Set up your perfect morning with automated reminders and app controls.

### Schedule Management
Never miss an event - your assistant knows your schedule and tells you what's coming.

### Communication Hub
Make calls, send messages, and manage all your communications from one place.

### Personal Tracking
Track steps, health metrics, and monitor your daily activities.

### AR Helmet Mode
Experience the world like Iron Man with augmented reality visualization.

## Roadmap

- [ ] Core mobile app structure
- [ ] Morning routine automation
- [ ] Voice assistant integration
- [ ] Schedule & calendar sync
- [ ] Communication features
- [ ] Step tracking
- [ ] AR helmet mode
- [ ] Gesture recognition
- [ ] Photo analysis
- [ ] Computer control
- [ ] Advanced ML features

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - See LICENSE file for details

## Contact

For support or questions, reach out at: 604 328 2162

---

**Iron Assistant** - Control Your Life Like Tony Stark Controls His Suit 🦾
