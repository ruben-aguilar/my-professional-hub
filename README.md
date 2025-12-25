# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

### Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds the site with Vite and publishes the `dist` folder to GitHub Pages.

1. Push to `main` (or run the workflow manually) to trigger the deployment pipeline.
2. The workflow uploads the generated static assets and deploys them with `actions/deploy-pages`.
3. The first time you run it, enable Pages in your repo settings and point it at the `github-pages` environment.

The build uses the `VITE_PUBLIC_BASE_PATH` environment variable to align Vite's `base` option with the repository name. By default it resolves to `/${repo-name}/`, but you can override it by creating a repository variable named `GH_PAGES_BASE_PATH` (for example set it to `/` when serving a custom domain at the root). If you need to preview a production build locally, run:

```sh
VITE_PUBLIC_BASE_PATH=/my-professional-hub/ npm run build && npm run preview
```

If you are using a custom domain, add a `public/CNAME` file containing that domain (for example `raguilar.dev`) so GitHub Pages keeps the mapping consistent.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
