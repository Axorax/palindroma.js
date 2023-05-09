<p align="center"><img src="https://raw.githubusercontent.com/Axorax/palindroma.js/main/palindroma.js.svg"></p>

<p align="center">Check and find nearest palindrome</p>

## ⚙️ Installation

```js
npm i palindroma
```

## 📘 Usage

#### → Import

```js
// commonjs
const palindroma = require("palindroma");

// ES6
import palindroma from "palindroma";
```

#### → Check for palindrome

```js
import palindroma from "palindroma";

palindroma.check(999);     // Number (output: True)
palindroma.check('madam'); // String (output: True)
```

#### → Find nearest palindrome for a number

```js
import palindroma from "palindroma";

palindroma.nearest(98);   // output: 99
palindroma.nearest('98'); // output: 99

palindroma.nearest('awd'); // output: undefined
```

---

[Support me on Patreon](https://www.patreon.com/axorax) — 
[Check out my socials](https://github.com/axorax/socials)