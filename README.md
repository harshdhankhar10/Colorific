
# 🌈 Colorific Magic - Add Color to Your Console Logs!

[![npm version](https://badge.fury.io/js/colorific-magic.svg)](https://www.npmjs.com/package/colorific-magic)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/<your-username>/colorific-magic.svg?branch=main)](https://travis-ci.org/<your-username>/colorific-magic)

## Description

**Colorific Magic** is a lightweight and customizable Node.js library that adds beautiful, customizable colors and styles to your console logs. Whether you're debugging or just want to make your terminal outputs pop, Colorific gives you full control over color schemes and styles to brighten up your development workflow.

## Features

- 🎨 **Color-Coded Logs**: Different styles for success, danger, info, and more.
- 🌟 **Custom Styles**: Customize text color, background, borders, shadows, and more.
- 💡 **Simple API**: Easy-to-use static methods for different log types.
- 🚀 **Lightweight and Fast**: Minimal footprint, easy integration.

## Installation

You can install **Colorific Magic** via npm:

```bash
npm install colorific-magic
```

Or, using yarn:

```bash
yarn add colorific-magic
```

## Usage

After installing the package, you can import and use the `log` class to display styled console messages for success, danger, info, warnings, and more. Here's how:

### Basic Example

```javascript
const { log } = require('colorific-magic');

// Success log
log.success('Success! The operation was completed successfully.');

// Error log
log.danger('Error! Something went wrong.');

// Info log
log.info('FYI: This is an informational message.');

// Custom log with custom colors
log.custom('Custom styled message!', 'purple', 'yellow');
```

### Available Methods

#### 1. **`log.success(message)`**
Logs a success message in green.
```javascript
log.success('Operation completed successfully!');
```

#### 2. **`log.danger(message)`**
Logs a danger or error message in red.
```javascript
log.danger('Error! Failed to complete the operation.');
```

#### 3. **`log.info(message)`**
Logs an informational message with black text and a yellow background.
```javascript
log.info('This is some useful information.');
```

#### 4. **`log.warning(message)`**
Logs a warning message in orange.
```javascript
log.warning('Warning! This might cause issues.');
```

#### 5. **`log.custom(message, textColor, backgroundColor)`**
Logs a message with custom text and background colors.
```javascript
log.custom('Custom message with styling!', 'blue', 'white');
```

#### 6. **`log.notice(message)`**
Logs a notice message with blue text.
```javascript
log.notice('Notice: Please update your dependencies.');
```

#### 7. **`log.successWithBorder(message)`**
Logs a success message with a green border and background.
```javascript
log.successWithBorder('Success! Task completed with style.');
```

#### 8. **`log.errorWithShadow(message)`**
Logs an error message with a red shadow effect.
```javascript
log.errorWithShadow('Critical Error! System failure imminent.');
```

#### 9. **`log.gradient(message)`**
Logs a message with gradient text colors.
```javascript
log.gradient('Gradient: Beautiful rainbow message.');
```

#### 10. **`log.inverse(message)`**
Logs a message with inverse text and background colors.
```javascript
log.inverse('Inverted colors log message.');
```

### Advanced Example

```javascript
const { log } = require('colorific-magic');

// Display success with a border
log.successWithBorder('Success!');

// Display error with shadow
log.errorWithShadow('An error occurred.');

// Gradient log example
log.gradient('This message has a gradient!');

// Inverse color log
log.inverse('Inverted text and background color.');
```

### Customization

You can define custom styles for your logs by using any valid CSS colors (like `blue`, `green`, `#FF5733`, etc.). Feel free to add your own styles to the logs by using the `log.custom()` method.

## API

| Method                | Description                                      | Default Style                       |
|-----------------------|--------------------------------------------------|-------------------------------------|
| `log.success(msg)`     | Logs a success message                           | Green text                          |
| `log.danger(msg)`      | Logs a danger/error message                      | Red text                            |
| `log.info(msg)`        | Logs an informational message                    | Black text on a yellow background   |
| `log.warning(msg)`     | Logs a warning message                           | Orange text                         |
| `log.custom(msg, textColor, backgroundColor)` | Logs a custom message with user-defined colors | Customizable                         |
| `log.notice(msg)`      | Logs a notice message                            | Blue text                           |
| `log.successWithBorder(msg)` | Logs a success message with green border   | Green text with border              |
| `log.errorWithShadow(msg)`  | Logs an error message with a red shadow    | Red text with shadow                |
| `log.gradient(msg)`    | Logs a message with gradient text                | Gradient color                      |
| `log.inverse(msg)`     | Logs a message with inverted text and background | Inverted colors                     |

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. For major changes, open an issue to discuss what you would like to change.

## Support

If you encounter any issues, feel free to open an issue on GitHub or contact me directly via email.

## Author

- **Harsh** - [GitHub](https://github.com/<harshdhankhar10>)

