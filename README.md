# Contentful Wedding Site

Welcome to the **Contentful Wedding Site**, a single-page React application powered by **Next.js** and **Contentful** as a headless CMS.

![The homepage of the Wedding Site](/public/images/wedding-site-template.jpg 'The homepage of the Wedding Site')

---

## What is Contentful?

[Contentful](https://www.contentful.com/) is a content infrastructure platform designed for digital teams. Unlike traditional CMSs, Contentful integrates seamlessly with modern software stacks. It offers a centralized hub for structured content, robust management, delivery APIs, and a customizable web app, enabling developers and content creators to accelerate their workflows.

---

## Features

- **Composable Content**: Flexible content modeling for diverse content types.
- **Localization Ready**: Easily manage content for multiple languages.
- **SEO Optimized**: Built with best practices for search engine optimization.
- **Server-Side Rendering**: Leverage Next.js for enhanced performance and SEO benefits[^1].
- **Optimized Data Management**: Utilize React Query for efficient data handling[^2].
- **Enhanced Developer Experience**: TypeScript support for type safety and improved developer workflows[^3].

---

## Getting Started

To get started, please follow the guidelines outlined below:

- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contentful API & GraphQL](#contentful-api--graphql)
- [Deployment](#deployment)

---

### Environment Variables

To authenticate requests to the Contentful APIs, you need to set the following environment variables:

- **Your Space ID**: [Find Space ID](https://www.contentful.com/help/find-space-id/)
- **Contentful Delivery API Token**: [API Documentation](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- **Contentful Preview API Token**: [API Documentation](https://www.contentful.com/developers/docs/references/content-preview-api/)

For Mailchimp integration to store or update contacts for a specific audience, please add:

- **Mailchimp API Key**: [About API Keys](https://mailchimp.com/help/about-api-keys/)
- **Mailchimp API Server**: [API Fundamentals](https://mailchimp.com/developer/marketing/docs/fundamentals/)
- **Mailchimp Audience ID**: [Find Audience ID](https://mailchimp.com/help/find-audience-id/)

After gathering the necessary values, rename the `.env.example` file to `.env` and populate it with your keys.

---

### Dependencies

Install the necessary dependencies by running:

```bash
yarn install
```

---

### Running the Starter Template in Development Mode

To run the application in development mode, use:

```bash
yarn dev
```

The Starter Template will be accessible at `http://localhost:3000`. All required dependencies are installed in the `node_modules` directory, and you can access additional tools via npm scripts.

---

## Development

### Node Version

It's recommended to use the Node version specified in the `.nvmrc` file. To easily switch between Node versions, consider using [nvm](https://github.com/nvm-sh/nvm).

#### Pre-commit Hook

Before a commit is allowed, the TypeScript compiler (`tsc`) must succeed, and the `lint-staged` script will be executed. This ensures that ESLint and Prettier rules are enforced on staged files. 

The `tsc` command is executed separately from `lint-staged` because it checks all files, which is crucial for maintaining type integrity.

#### Pre-push Hook

The same tasks (TypeScript compilation and linting) are enforced for the pre-push hook.

### Contentful API & GraphQL

This project leverages Contentful's [GraphQL API](https://www.contentful.com/developers/docs/references/graphql/). API calls to the Contentful GraphQL endpoint are handled via React Query's `queryClient`.

---

## Deployment

You can deploy the Starter Template to your preferred hosting provider. This application offers integrations with **Vercel** and **Netlify** for easy deployment. Both options come pre-configured with the GitHub repository and necessary environment variables.

| Vercel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Netlify                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcontentful%2Ftemplate-marketing-webapp-nextjs&env=CONTENTFUL_SPACE_ID,CONTENTFUL_ACCESS_TOKEN,CONTENTFUL_PREVIEW_ACCESS_TOKEN&envDescription=API%20Keys%20needed%20for%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Fcontentful%2Ftemplate-marketing-webapp-nextjs%23environment-variables) | [![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fcontentful%2Ftemplate-marketing-webapp-nextjs#CONTENTFUL_SPACE_ID=&CONTENTFUL_ACCESS_TOKEN=&CONTENTFUL_PREVIEW_ACCESS_TOKEN=) |
| [Environment Variables Documentation](https://vercel.com/docs/concepts/projects/environment-variables)                                                                                                                                                                                                                                                                                                                                                                                              | [Environment Variables Documentation](https://docs.netlify.com/environment-variables/overview/)                                                                                                                                                                                                                                                            |

Make sure to configure the necessary [environment variables](#environment-variables) in your hosting provider's settings.

### Live Demo

You can view a live example of the application at the following link: [Live Demo](https://wedding-site-template.vercel.app/)


---

### Content Preview & Live Preview

Once your Starter Template is deployed, you can update the Content Preview URL in your Contentful space settings. Follow our guide for more details: [Setup Content Preview](https://www.contentful.com/help/setup-content-preview/?utm_source=github.com-preview-guide&utm_medium=referral&utm_campaign=template-marketing-webapp-nextjs).

For live previews, basic field tagging for inspector mode and live updates are implemented. Custom components will require additional instructions, which can be found in our [guide](https://www.contentful.com/developers/docs/tutorials/general/live-preview/).

---

## Author

**Anthony Guido**

- GitHub: [@anthonyguidomadrid](https://github.com/anthonyguidomadrid/)
- LinkedIn: [@anthony-guido](https://www.linkedin.com/in/anthony-guido/)

---

## License

Copyright © 2024 [Anthony Guido](https://github.com/anthonyguidomadrid/).

---

### Footnotes
[^1]: [Next.js Documentation](https://nextjs.org/docs/getting-started)  
[^2]: [React Query](https://tanstack.com/query/v4/docs/overview)  
[^3]: [TypeScript](https://www.typescriptlang.org/) 
