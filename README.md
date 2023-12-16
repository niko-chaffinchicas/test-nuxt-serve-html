# Nuxt 3 Serving HTML

Just a fun little tinker to show that Nuxt can serve HTML directly from its server routes.
There's some considerations you'll want to take that will likely be specific to your project.

## Where to put the HTML

The HTML files in this example are just placed in the `public` folder, but that
folder is still accessible starting from the root path. So this `public/test-page.html`
file is also going to be accessible/served at `{host}/test-page.html`. If you _don't_
want your HTML files accessible in this way, you'll want to place them somewhere else.

# Nuxt 3 Minimalist Starter (Boilerplate)

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
