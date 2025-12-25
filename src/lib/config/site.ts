export const siteConfig = {
    name: "apip-web Sveltekit shadcn blog starter",
    url: "https://apip-web.vercel.app/",
    ogImage: "https://sveltekit-blog-starter.netlify.app/images/blog-starter.jpg",
    description:
        "A blog starter built with SvelteKit, shadcn-svelte, Tailwind CSS, and MDsveX.",
    links: {
        twitter: "https://github.com/apip-web",
        github: "https://github.com/apip-web/sveltekit-shadcn-blog-starter",
    },
    keywords: `Svelte, SvelteKit, Tailwind CSS, Shadcn, MDsveX, Blog Starter`,
    nav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ]
};

export type SiteConfig = typeof siteConfig;
