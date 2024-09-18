export class log {
    // Success Messages
    static success(msg: string) {
        console.log(`%c ${msg}`, 'color: green; font-weight: bold');
    }

    static successLight(msg: string) {
        console.log(`%c ${msg}`, 'color: lightgreen; font-weight: bold');
    }

    static successBg(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: green; padding: 2px; border-radius: 3px;');
    }

    // Danger/Error Messages
    static danger(msg: string) {
        console.log(`%c ${msg}`, 'color: red; font-weight: bold');
    }

    static dangerBg(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: red; padding: 2px; border-radius: 3px;');
    }

    static dangerOutline(msg: string) {
        console.log(`%c ${msg}`, 'color: red; border: 1px solid red; padding: 2px; border-radius: 3px;');
    }

    // Info Messages
    static info(msg: string) {
        console.log(`%c ${msg}`, 'color: black; background: yellow; padding: 2px');
    }

    static infoLight(msg: string) {
        console.log(`%c ${msg}`, 'color: yellow; background: black; padding: 2px');
    }

    static infoBlue(msg: string) {
        console.log(`%c ${msg}`, 'color: blue; font-weight: bold');
    }

    // Warning Messages
    static warning(msg: string) {
        console.log(`%c ${msg}`, 'color: orange; font-weight: bold');
    }

    static warningBg(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: orange; padding: 2px; border-radius: 3px;');
    }

    static warningOutline(msg: string) {
        console.log(`%c ${msg}`, 'color: orange; border: 1px solid orange; padding: 2px; border-radius: 3px;');
    }

    // Debugging Messages
    static debug(msg: string) {
        console.log(`%c ${msg}`, 'color: blueviolet; font-weight: bold');
    }

    static debugBg(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: blueviolet; padding: 2px; border-radius: 3px;');
    }

    static debugShadow(msg: string) {
        console.log(`%c ${msg}`, 'color: blueviolet; text-shadow: 1px 1px 2px violet; font-weight: bold');
    }

    // Success with Borders
    static successWithBorder(msg: string) {
        console.log(`%c ${msg}`, 'color: green; border: 1px solid green; padding: 2px; border-radius: 3px;');
    }

    static successBgWithBorder(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: green; border: 1px solid darkgreen; padding: 2px; border-radius: 3px;');
    }

    // Neutral Messages
    static neutral(msg: string) {
        console.log(`%c ${msg}`, 'color: gray');
    }

    static neutralBg(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: gray; padding: 2px; border-radius: 3px;');
    }

    static neutralShadow(msg: string) {
        console.log(`%c ${msg}`, 'color: gray; text-shadow: 1px 1px 2px black;');
    }

    // Custom Styles
    static custom(msg: string, color: string, bgColor: string) {
        console.log(`%c ${msg}`, `color: ${color}; background: ${bgColor}; padding: 2px; border-radius: 3px`);
    }

    static bold(msg: string) {
        console.log(`%c ${msg}`, 'font-weight: bold; color: black;');
    }

    static italic(msg: string) {
        console.log(`%c ${msg}`, 'font-style: italic; color: blue');
    }

    static underline(msg: string) {
        console.log(`%c ${msg}`, 'text-decoration: underline; color: purple; font-weight: bold');
    }

    static strikethrough(msg: string) {
        console.log(`%c ${msg}`, 'text-decoration: line-through; color: red; font-weight: bold');
    }

    // Gradient Text (WebKit-based browsers)
    static gradientText(msg: string) {
        console.log(`%c ${msg}`, 'background: linear-gradient(to right, red, yellow, green); color: white; -webkit-background-clip: text; font-weight: bold');
    }

    // Shadowed Text
    static shadowText(msg: string) {
        console.log(`%c ${msg}`, 'color: black; text-shadow: 2px 2px 5px gray; font-weight: bold');
    }

    // Rainbow Text
    static rainbowText(msg: string) {
        console.log(`%c ${msg}`, 'color: red; background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red); font-weight: bold; padding: 2px; border-radius: 3px;');
    }

    // Background Variations
    static darkBg(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: black; padding: 2px');
    }

    static lightBg(msg: string) {
        console.log(`%c ${msg}`, 'color: black; background: white; padding: 2px');
    }

    static blueBg(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: blue; padding: 2px; border-radius: 3px');
    }

    // Other Fancy Styles
    static fancyShadow(msg: string) {
        console.log(`%c ${msg}`, 'color: magenta; text-shadow: 2px 2px 4px black; font-size: 1.2em; font-weight: bold;');
    }

    static  fancyBorder(msg: string) {
        console.log(`%c ${msg}`, 'color: purple; border: 2px dashed purple; padding: 2px; border-radius: 5px;');
    }

    static fancyBgWithShadow(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background: darkblue; text-shadow: 2px 2px 5px black; padding: 2px; border-radius: 3px');
    }
}
