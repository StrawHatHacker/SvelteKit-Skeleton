This is an **opinionated boiletplate skeleton** for a new SvelteKit project.

Out of the box you get **TypeScript**, **Tailwind** with **daisyUI**, Font-Awesome icons, **node-adapter** for SSR builds, basic **authentication example** with **mongoose** and working **tests**.

## But wait a minute...

...in order to run this for development or production, you have to create a `.env` file at the root of your and add your mongoDB connection string. Example:

```
MONGO_URI="mongodb://..."
PUBLIC_ENVIRONMENT="DEV"
```

Refer to `.env.example`.

If you don't want to use a mongo DB, you are free to use anything else. Just make sure to edit the `src/hooks.ts` for the initial connection and edit your models in `src/lib/models/` folder.

## Deployment

This skeleton provides a Dockerfile for easy deployment. Install docker, then:

```bash
docker build -t svelte-app .
```

```bash
docker run -p 3000:3000 svelte-app
```

## Gotchas

##### Where can I change the reduced motion options?

- In `src/styles/index.css`.

##### Just cloned and tried to run it but Log in and Sign up are not working

- You need a MongoDB v4.4 or higher deployed service.
