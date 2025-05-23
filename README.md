# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

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
pnpm dev

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
pnpm build

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
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

1. MainLayout - The main wrapper component that provides consistent layout
2. Hero - Hero section component (likely contains banner/header content)
3. HomeHotDeals - Section for displaying hot deals
4. BestSellers - Currently commented out, could be used for best-selling products

Project structure:
/components
  /home
    - Hero.vue
    - HotDeals.vue
    - BestSellers.vue
  /Layout
    - MainLayout.vue

1. Installation:
   - Use `npm install` to install dependencies
   
2. Development:
   - Run `npm run dev` to start dev server
   - Access at `http://localhost:3000`

3. Production:
   - Build: `npm run build`
   - Preview: `npm run preview`

- Each component is imported using the `~` alias (Nuxt.js feature)
- Components are automatically registered in the template section
- The layout follows a modular structure for easy maintenance