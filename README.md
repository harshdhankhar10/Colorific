
## 🌈 Colorific Magic - Add Color to Your Console Logs!

# Description
Colorific Magic is a lightweight and customizable Node.js library that adds beautiful, customizable colors and styles to your console logs. Whether you're debugging or just want to make your terminal outputs pop, Colorific gives you full control over color schemes and styles to brighten up your development workflow.

# Features
🎨 Color-Coded Logs: Different styles for success, danger, info, and more.
🌟 Custom Styles: Customize text color, background, borders, shadows, and more.
💡 Simple API: Easy-to-use static methods for different log types.
🚀 Lightweight and Fast: Minimal footprint, easy integration.

# Table of contents
- [Usage](#usage)
  - [Success Messages](#success-messages)
  - [Danger/Error Messages](#dangerdanger-messages)
  - [Info Messages](#info-messages)
  - [Warning Messages](#warning-messages)
  - [Debugging Messages](#debugging-messages)
  - [Success with Borders](#success-with-borders)
  - [Neutral Messages](#neutral-messages)
  - [Custom Styles](#custom-styles)
  - [Gradient Text](#gradient-text-webkit-based-browsers)
  - [Shadowed Text](#shadowed-text)
  - [Rainbow Text](#rainbow-text)
  - [Background Variations](#background-variations)
  - [Fancy Styles](#fancy-styles)
- [License](#license)
- [Contributing](#contributing)

## Installation

To install the Colorific Magic library, use npm:

```bash
npm install colorific-magic
```

Or, if you prefer yarn:

```bash
yarn add colorific-magic
```

## Usage

Import the `log` class from the `colorific-magic` package and start using its methods to style your console logs.

```js
const { log } = require('colorific-magic');
```

### Success Messages

```js
log.success('Operation was successful!');
log.successLight('Light green success message');
log.successBg('Success message with green background');
```

- **`success(msg: string)`**: Logs a success message in green with bold font.
- **`successLight(msg: string)`**: Logs a success message in light green with bold font.
- **`successBg(msg: string)`**: Logs a success message with a green background and white text.

### Danger/Error Messages

```js
log.danger('An error occurred!');
log.dangerBg('Error message with red background');
log.dangerOutline('Error message with red outline');
```

- **`danger(msg: string)`**: Logs an error message in red with bold font.
- **`dangerBg(msg: string)`**: Logs an error message with a red background and white text.
- **`dangerOutline(msg: string)`**: Logs an error message with a red border.

### Info Messages

```js
log.info('This is an informational message.');
log.infoLight('Yellow info message on black background');
log.infoBlue('Informational message in blue');
```

- **`info(msg: string)`**: Logs an informational message with black text on a yellow background.
- **`infoLight(msg: string)`**: Logs an informational message with yellow text on a black background.
- **`infoBlue(msg: string)`**: Logs an informational message in blue with bold font.

### Warning Messages

```js
log.warning('This is a warning!');
log.warningBg('Warning message with orange background');
log.warningOutline('Warning message with orange outline');
```

- **`warning(msg: string)`**: Logs a warning message in orange with bold font.
- **`warningBg(msg: string)`**: Logs a warning message with an orange background and white text.
- **`warningOutline(msg: string)`**: Logs a warning message with an orange border.

### Debugging Messages

```js
log.debug('Debugging message in blueviolet');
log.debugBg('Debugging message with blueviolet background');
log.debugShadow('Debugging message with shadow');
```

- **`debug(msg: string)`**: Logs a debugging message in blueviolet with bold font.
- **`debugBg(msg: string)`**: Logs a debugging message with a blueviolet background and white text.
- **`debugShadow(msg: string)`**: Logs a debugging message with a shadow effect.

### Success with Borders

```js
log.successWithBorder('Success message with border');
log.successBgWithBorder('Success message with green background and border');
```

- **`successWithBorder(msg: string)`**: Logs a success message with a green border.
- **`successBgWithBorder(msg: string)`**: Logs a success message with a green background and a dark green border.

### Neutral Messages

```js
log.neutral('This is a neutral message.');
log.neutralBg('Neutral message with gray background');
log.neutralShadow('Neutral message with shadow');
```

- **`neutral(msg: string)`**: Logs a neutral message in gray.
- **`neutralBg(msg: string)`**: Logs a neutral message with a gray background and white text.
- **`neutralShadow(msg: string)`**: Logs a neutral message with a shadow effect.

### Custom Styles

```js
log.custom('Custom styled message', 'pink', 'black');
log.bold('This is a bold message');
log.italic('This is an italic message');
log.underline('This is an underlined message');
log.strikethrough('This is a strikethrough message');
```

- **`custom(msg: string, color: string, bgColor: string)`**: Logs a message with custom text and background colors.
- **`bold(msg: string)`**: Logs a bold message in black.
- **`italic(msg: string)`**: Logs an italic message in blue.
- **`underline(msg: string)`**: Logs an underlined message in purple with bold font.
- **`strikethrough(msg: string)`**: Logs a message with a strikethrough effect in red with bold font.

### Gradient Text (WebKit-based browsers)

```js
log.gradientText('This text has a gradient color!');
```

- **`gradientText(msg: string)`**: Logs a message with a gradient text color effect.

### Shadowed Text

```js
log.shadowText('This text has a shadow effect.');
```

- **`shadowText(msg: string)`**: Logs a message with a shadow effect.

### Rainbow Text

```js
log.rainbowText('Rainbow-colored text');
```

- **`rainbowText(msg: string)`**: Logs a message with rainbow-colored text.

### Background Variations

```js
log.darkBg('Text on a dark background');
log.lightBg('Text on a light background');
log.blueBg('Text with a blue background');
```

- **`darkBg(msg: string)`**: Logs a message with white text on a black background.
- **`lightBg(msg: string)`**: Logs a message with black text on a white background.
- **`blueBg(msg: string)`**: Logs a message with white text on a blue background.

### Fancy Styles

```js
log.fancyShadow('Fancy message with shadow');
log.fancyBorder('Fancy message with dashed border');
log.fancyBgWithShadow('Fancy message with dark background and shadow');
```

- **`fancyShadow(msg: string)`**: Logs a message with magenta text and shadow effect.
- **`fancyBorder(msg: string)`**: Logs a message with a purple dashed border.
- **`fancyBgWithShadow(msg: string)`**: Logs a message with a dark blue background and shadow effect.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions to the Colorific Magic library! Feel free to submit pull requests or open issues for improvements, bug fixes, or feature requests.

For detailed guidelines on contributing, please refer to the [CONTRIBUTING](CONTRIBUTING.md) file.

