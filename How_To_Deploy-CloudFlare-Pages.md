**Your project was likely created as a Worker instead of a Pages project.** Workers get `*.workers.dev` domains, while Pages projects get `*.pages.dev` domains. Here's how to fix it:

## Why this happened

When you create a project from the dashboard, if you select **"Create Worker"** instead of **"Pages"**, it deploys as a Worker and gets a `workers.dev` subdomain. Cloudflare has also been unifying Pages into Workers, so some new deployments may default to `workers.dev`.

## How to get a `pages.dev` domain

1. Go to the **[dash.cloudflare](https://dash.cloudflare.com)**
2. Go to the **Workers & Pages** page in the dashboard
3. Click **Create APP** → Look at `Looking to deploy Pages? Get started and select the` **[Pages](https://dash.cloudflare.com/uid/workers-and-pages/create/pages)** tab
4. Choose **"Connect to Git"** and select your GitHub repo
5. Configure your build settings (build command, output directory)
6. Deploy — your project will get a `<project-name>.pages.dev` subdomain

## Even better: use a custom domain

For a production site, it's recommended to use a **custom domain** instead of `pages.dev` or `workers.dev`. You can add one after deploying:

1. Open your Pages project → **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter your domain (it must have its DNS managed by Cloudflare)

Would you like me to help you create a new Pages project from your GitHub repo, or set up a custom domain for an existing project?