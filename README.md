# Input Month Polyfill

This package enables the use of inputs with month type in browsers that does not support it nativelly.

## What it does

It **hides** every month input, then add right after each one a DOM with events to handle user interaction. 

When the user set a month and year with this polyfill, it automatically sets the correspondent value to the original month input, using the same value pattern that is expected from a month input (yyyy-mm).

It means, **you don't need to track what this package is doing. Just keep following and sending your forms as if it was not even there**.

## Usage


Download it with your package manager:

```bash
$ yarn add input-month-polyfill
OR
$ npm i -S input-month-polyfill
```

Then add it to the end of your body:

```html
<script src="./node_modules/input-month-polyfill/dist/input-month-polyfill.min.js"></script>
```

Or import it to your node app:

```js
import 'input-month-polyfill/dist/input-month-polyfill.min';
```

## UI

Your users can use keyboard or mouse to interact with this package. Only keyboard arrows are allowed to change its value. 

Left and right arrows are both used to change from month to year selection, vice-versa.

Up and down arrow are used to go to the next or previous month/year.

## Internationalization

In order to use translated versions of this package, you are able to set the attribute `data-lang` with the prefered language. If not present, **en** is the default language.

Currently only **en** and **pt-BR** are available. Please, **contribute** with other languages!

```html
<input type="month" data-lang="pt-BR">
```

## Styling

The following are the classes used within this package. You can write your own CSS to override our default options.
| CSS Class Name            | Description                                               |
| :---:                     | :---:                                                     |
| .imp--container           | The entire package                                        |
| .imp--input               | Text input that shows month and year                      |
| .imp--viewers             | Viewport that holds both month and year UI controllers    |
| .imp--month--viewer       | Month UI controller                                       |
| .imp--year--viewer        | Year UI controleler                                       |
| .imp--button              | Every button within the package (except next/prev)        |
| .imp--month--button       | Each button with month name at month viewer               |
| .imp--year--button        | Each button with year number at year viewer               |
| .imp--viewer--controls    | Block that holds prev and next year buttons               |
| .imp--year--button--prev  | The prev button from year viewer                          |
| .imp--year--button--next  | The next button from year viewer                          |