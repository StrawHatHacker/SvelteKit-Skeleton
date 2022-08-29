import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {

    // This function runs alongside +page.svelte, 
    // which means it runs on the server during server-side rendering and 
    // in the browser during client-side navigation.
    // https://kit.svelte.dev/docs/routing#page-page-js
    console.log('2. This is executed on the server and the client');

    // Passing data to +page.svelte
    return { ...data };
}

// export const prerender = true;
// export const hydrate = true;
// export const router = true;