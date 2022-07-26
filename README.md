This is an **opinionated boiletplate skeleton** for a new SvelteKit project.

Out of the box you get **TypeScript**, **SCSS**, **Tailwind** support, **node-adapter** for SSR builds, basic **authentication example** and working **tests**.

## Gotchas

##### Why are headings not selectable?

##### Why are SVGs the wrong color?

##### Why is progress element not positioned correctly?

##### Where can I change the reduced motion options?

All can be fixed by editing `src/styles/sanitize.scss`. Or you can delete it!

##### Some tailwind styles are not available?

In `src/styles/index.scss`, the `@tailwind base;` directive has been commented out to prevent default styling of components. As the tailwind website says, they are opinionated, and they are against my opinion 😠 Feel free to add it back if you need it.
