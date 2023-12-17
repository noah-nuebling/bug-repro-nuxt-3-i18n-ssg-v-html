# Readme

Bug: In Nuxt 3 i18n, using `v-html` with `$t` is broken for `SSG`.

Use this repo to reproduce the bug.

## Reproduction steps

0. Checkout this repo to your computer (I couldn't get it to work on Stackblitz)
    ```bash
    git clone git@github.com:noah-nuebling/bug-repro-nuxt-3-i18n-ssg-v-html.git
    ```
2. Render and serve the site statically
    ```bash
    pnpm install; pnpm generate; npx serve .output/public/
    ```
3. View the site by opening `http://localhost:3000/` in your browser.
4. Click the "Make German" button. The text on the page will switch to German, and the url will change to `http://localhost:3000/de-DE`. In the background this will set a cookie that your language preference is German.
5. Open the base url `http://localhost:3000/` again. This will now redirect you to `http://localhost:3000/de-DE`, because of the cookie. But the text on the page will remain English instead of changing to German.

## Notes

- This issue seems to not only occur with the cookie, but also when the user is redirected to the German site because of their browser language.
- This issue only occurs if you use 
    ```html
    <p v-html="$t(<some-key>)"></p>
    ``` 
    If you use
    ```html
    <p>{{ $t(<some-key>) }}</p>`
    ```
    then the issue doesn't occur.
