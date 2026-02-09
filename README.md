
# Expense Tracker (Learning Project)

A React Native Expo-based Expense Tracker built for learning modern mobile app architecture and best practices.

This project focuses on:
- Clean folder structure
- camelCase naming conventions
- Scalable navigation (Bottom Tabs + Stack)
- Context-based state management
- Local data handling
- Authentication flow
- Analytics and settings

---

## Tech Stack

- Expo
- React Native
- React Navigation
- Expo Fonts
- Expo Vector Icons
- Expo Image Picker
- Expo DateTime Picker
- AsyncStorage / SecureStore
- Context API

---

## Naming Convention

All files, folders, variables, and functions follow **camelCase**.

Examples:
- loginScreen.js  
- expenseContext.js  
- useExpenses.js  
- dateUtils.js  

---

## Folder Structure

```
src/
│
├── assets/
│   ├── fonts/
│   └── images/
│
├── components/
│   ├── common/
│   │   ├── customButton.js
│   │   ├── customInput.js
│   │   └── loader.js
│   │
│   ├── expense/
│   │   ├── expenseItem.js
│   │   ├── expenseList.js
│   │   └── expenseForm.js
│
├── context/
│   ├── authContext.js
│   ├── expenseContext.js
│   └── settingsContext.js
│
├── navigation/
│   ├── authStack.js
│   ├── tabNavigator.js
│   └── rootNavigator.js
│
├── screens/
│   ├── auth/
│   │   ├── loginScreen.js
│   │   └── registerScreen.js
│   │
│   ├── tabs/
│   │   ├── dashboardScreen.js
│   │   ├── addExpenseScreen.js
│   │   ├── analyticsScreen.js
│   │   └── settingsScreen.js
│   │
│   ├── expense/
│   │   ├── expenseDetailScreen.js
│   │   └── editExpenseScreen.js
│
├── services/
│   ├── storageService.js
│   ├── analyticsService.js
│   └── authService.js
│
├── hooks/
│   ├── useAuth.js
│   └── useExpenses.js
│
└── utils/
    ├── dateUtils.js
    ├── formatUtils.js
    └── constants.js
```

---

## Navigation Structure

### Root Flow
- AuthStack (Login / Register)
- BottomTabNavigator (after login)

### Bottom Tabs
1. Dashboard
2. Add Expense
3. Analytics
4. Settings

### Nested Stack
Inside Dashboard:
- expenseDetailScreen
- editExpenseScreen

---

## Expo Features

### Expo Fonts
Custom fonts loaded from:
```
assets/fonts/
```

### Expo Vector Icons
Used for:
- Bottom tab icons
- Buttons
- UI elements

### Image Picker
Using:
```
expo-image-picker
```
Allows attaching receipt images to expenses.

### Date Time Picker
Using:
```
@react-native-community/datetimepicker
```
Used to select expense date.

---

## State Management (Context)

### authContext
- Login / Logout
- Session persistence
- User data storage

### expenseContext
- Add expense
- Edit expense
- Delete expense
- Filter by date/category
- Store locally

### settingsContext
- Theme (Light/Dark)
- Currency selection
- App preferences

---

## Data Handling

Local-first approach using AsyncStorage.

Expense object structure:

```
{
  id,
  title,
  amount,
  category,
  date,
  note,
  imageUri
}
```

All storage logic is centralized in:
```
services/storageService.js
```

---

## Login System

Features:
- User registration
- Login validation
- Session persistence
- Auto-login if session exists
- Logout from Settings

Auth data stored securely using SecureStore or AsyncStorage.

---

## Expense Management

Users can:
- Add new expense
- Edit existing expense
- Delete expense
- View expense list
- Filter by date and category
- Attach receipt image
- View total spending

---

## Analytics

Analytics screen shows:
- Total spending (weekly/monthly)
- Category-wise breakdown
- Spending trends

Tracked events:
- appOpened
- loginSuccess
- expenseAdded
- expenseDeleted

Implemented via:
```
services/analyticsService.js
```

Can be extended to Firebase Analytics.

---

## Settings Screen

Options:
- Change currency
- Toggle dark mode
- Clear all data
- Logout
- App version info

---

## Custom Hooks

- useAuth()
- useExpenses()

Provides reusable logic for cleaner components.

---

## Utilities

### dateUtils.js
- Format dates
- Calculate ranges

### formatUtils.js
- Currency formatting
- Number helpers

### constants.js
- Categories
- Theme colors
- Default values

---

## Learning Outcomes

This project demonstrates:
- Scalable React Native architecture
- Clean folder organization
- camelCase naming standards
- Context-based state management
- Offline data persistence
- Expo ecosystem integration
- Real-world app structure

---

## Future Improvements

- Cloud sync (Firebase / Supabase)
- Push notifications
- Budget limits
- Export data (CSV/PDF)
- Biometric authentication
- Multi-device sync
