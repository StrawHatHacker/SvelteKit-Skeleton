This is an **opinionated boiletplate skeleton** for a new SvelteKit project.

Out of the box you get **TypeScript**, **SCSS**, **Tailwind** support, **node-adapter** for SSR builds, basic **authentication example**, **mongoose** and working **tests**.

## Wait a minute...

...in order to run this properly, you have to create a `.env` file at the root of your and add your mongoDB connection string. Example:

```
MONGO_URI="mongodb://..."
```

If you don't want to use a mongo DB, you are free to use anything else. Just make sure to edit the `src/hooks.ts` for the initial connection and edit your models in `src/lib/models/` folder.

## Deployment

This skeleton provides a Dockerfile for easy deployment. Install docker, then:

```bash
docker build svelte-app .
```

```bash
docker run -p 3000:3000 svelte-app
```

## Gotchas

##### Why are headings not selectable?

##### Why are SVGs the wrong color?

##### Why is progress element not positioned correctly?

##### Where can I change the reduced motion options?

- All can be fixed by editing `src/styles/sanitize.scss`. Or you can delete it!

##### Just cloned and runned it but Log in and Sign up are not working

- Of course they are not working. You need a v4.4 or higher mongoDB deployment and connect to it, [see here](https://github.com/StrawHatHacker/SvelteKit-Skeleton#wait-a-minute).
