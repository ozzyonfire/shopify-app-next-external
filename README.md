# Shopify App Template - Next.js App Router

This is a template for building a [Shopify app](https://shopify.dev/apps/getting-started) using Next.js and Typescript. It contains the basics for building a Shopify app on Next.js using the app router and server components.

Rather than cloning this repo, you can use your preferred package manager and the Shopify CLI with [these steps](#installing-the-template).

### Installing the template

This template can be installed using your preferred package manager:

Using pnpm (recommended):

```shell
pnpx @shopify/create-app@latest --template https://github.com/ozzyonfire/shopify-next-app-external.git
```

Using yarn:

```shell
yarn create @shopify/app --template https://github.com/ozzyonfire/shopify-next-app-external.git
```

Using npx:

```shell
npx @shopify/create-app@latest --template https://github.com/ozzyonfire/shopify-next-app-external.git
```

This will clone the template and install the required dependencies.

## Shopify External Apps - Helpful links

- [Authorization Code Grant (OAuth)]https://shopify.dev/docs/apps/auth/get-access-tokens/authorization-code-grant

### OAuth

OAuth is handled using the `/api/auth` and `/api/auth/callback` routes. The app is setup to use both online and offline tokens, by default.

_Note that in order to use the `/api/graphql` route out of the box, you need to use **online** tokens._

### Environment Variables

There are a couple environment variables you need to set up in order for the app to run. Create a file called `.env` in the root directory (or the root of your Next.js app) and add the following lines;

```bash
DATABASE_URL= # database connection string - for connecting to prisma
```

The first two variables are automatically populated by the Shopify CLI.

### Application Storage

This template uses Prisma to store and manage sessions. For more information on how to set up Prisma, see the [Prisma documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres).

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/apps/getting-started)
- [App authentication](https://shopify.dev/apps/auth)
- [Shopify CLI](https://shopify.dev/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-node/tree/main/docs)
