# Nexus - Society Member App 🏘️

**Nexus** is a comprehensive mobile application designed exclusively for **society members** to manage their day-to-day community activities. This app provides residents with a convenient platform to stay connected, track payments, report issues, and access community information.

> **⚠️ Important Note:** This application is specifically designed for **society members/residents only**. It is NOT an admin or management application. Admins and management committees should use separate administrative tools to manage the society.

## 🎯 Purpose

Nexus empowers society members with self-service capabilities to:
- Stay informed about society announcements and events
- View and connect with fellow residents
- Report and track maintenance issues
- Manage and pay society bills
- Access community resources and information

## ✨ Features for Members

### 🏠 Dashboard
- Quick overview of society statistics
- Latest announcements and updates
- Priority-based notifications
- Quick action buttons for common tasks

### 👥 Residents Directory
- View list of all society members
- Search for residents by name or unit
- View member status and unit information
- Connect with neighbors

### 🔧 Complaints & Issues
- Report maintenance issues and complaints
- Track complaint status (Open, In Progress, Resolved)
- View priority levels (High, Medium, Low)
- Monitor resolution progress
- Access complaint history

### 💳 Bills & Payments
- View pending and paid bills
- Track outstanding amounts
- Pay society dues directly from the app
- View payment history
- Get due date reminders
- Manage multiple bill types:
  - Monthly Maintenance
  - Annual Corpus Fund
  - Water & Electricity Bills

### 📋 More Options
- Access announcements and news
- View upcoming events
- Browse society documents and regulations
- Connect with the community
- Manage visitor passes
- Update profile settings
- Contact support

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- For iOS development: [Xcode](https://developer.apple.com/xcode/)
- For Android development: [Android Studio](https://developer.android.com/studio)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YashThakur-997/Nexus.git
cd Nexus
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

### Running the App

#### On Physical Device
1. Install the [Expo Go app](https://expo.dev/client) on your iOS or Android device
2. Scan the QR code from the terminal
3. The app will load on your device

#### On Emulator/Simulator

**For Android:**
```bash
npm run android
# or
yarn android
```

**For iOS (macOS only):**
```bash
npm run ios
# or
yarn ios
```

**For Web:**
```bash
npm run web
# or
yarn web
```

## 🛠️ Technology Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **Navigation:** Expo Router with React Navigation
- **Styling:** NativeWind (TailwindCSS for React Native)
- **Icons:** @expo/vector-icons (Material Icons)
- **UI Components:** React Native core components
- **State Management:** React hooks

## 📱 App Structure

```
Nexus/
├── app/                    # Main application screens
│   ├── _layout.tsx        # Tab navigation layout
│   ├── index.tsx          # Dashboard/Home screen
│   ├── members.tsx        # Residents directory
│   ├── complaints.tsx     # Complaints & issues
│   ├── payments.tsx       # Bills & payments
│   └── more.tsx           # Additional options
├── assets/                # Images and static assets
├── global.css            # Global styles
├── package.json          # Dependencies
└── README.md             # This file
```

## 🎨 Features Overview

### For Members Only
This application provides members with:
- ✅ **View-only access** to member directory
- ✅ **Self-service** complaint filing and tracking
- ✅ **Personal** payment management
- ✅ **Read access** to announcements and events
- ✅ **Profile management** for their own account
- ✅ **Community interaction** features

### What This App Does NOT Include
- ❌ Admin controls
- ❌ Society management tools
- ❌ Member approval/removal capabilities
- ❌ Financial reports and analytics
- ❌ System configuration settings
- ❌ Bulk operations

## 📄 License

This project is private and proprietary.

## 👥 Support

For member support and assistance:
- Use the in-app "Contact Support" feature
- Contact your society management committee

## 🔄 Updates

Stay tuned for updates and new features! The app will automatically notify you of any important updates or announcements from your society.

---

**Version:** 1.0.0  
**Last Updated:** January 2026

**Remember:** This app is designed for society members to manage their personal needs. For administrative functions, please contact your society management or use the designated admin tools.
