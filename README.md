# Table
Show table with data virtualization.


## Build with
- Next.js
- React.js
- Tailwind CSS
- Shadcn
- Typescript

## Notes
- For simplicity the simplest solution was used (components, folder structure), also the config is minimal and not production ready.
- Typescript, eslint, prettier, and nextjs config not optimized for production level.
- About the cache, there is 3 kind of caching:
    - page cache that handles automatically by nextjs.
    - request cache, which is not configured.
    - image cache that Next.js offers when using `next/image` component. <br>
- Minimal error handling.
- No Responsive UI.
- Tests not included.

## Environment Variables
In order to run the project, you need to set environment variables. and simplest way to do it is to create a `.env` file in the root of the project and add the following variables:
- `PUBLIC_API_URL`: The url of the api.
- `PUBLIC_RAPIDAPI_KEY`: The api key.
- `PUBLIC_RAPIDAPI_HOST`: The api host.

**This variables must be set otherwise the app will crash.**

## Install Packages
npm:
```bash
npm i
```

pnpm:
```bash
pnpm i
```

## Run - Development
npm:
```bash
npm run dev
```

pnpm:
```bash
pnpm dev
```

## Run - Production
npm:
```bash
npm run build
```
then run:
```bash
npm run start
```

<hr />

pnpm:
```bash
pnpm build
```
then run:
```bash
pnpm start
```


## Extra Notes
- for connecting the app to api, you can use `fetchApi` function from `src/apis/fetchApi.ts` file. Which get the url as first parameters and options as second parameters. This also get a generic type T and if the response is successful it returns the data as T otherwise it throws an error (error boundary catches this error).
- fetchApi function only returns the data, but it's possible to change it and also return the error if needed.
- fetchApi returns a `Promise` so the component must be `async`.