export default defineAppConfig({
  profile: {
    name: 'Jonas Wolber',
    job: 'PhD Student in Medical Informatics',
    email: 'jwolber@ukaachen.de',
    picture: 'https://www.ukaachen.de/fileadmin/_processed_/1/c/csm_Wolber_Jonas_1733b_aef900aa21.jpg',
  },
  socials: {
    github: 'https://github.com/Prgrmmrjns',
    linkedin: 'https://www.linkedin.com/in/jonas-wolber-582b0a1b1/',
  },
  seo: {
    title: 'Jonas Wolber Blog',
    description: 'Jonas Wolber Blog',
    url: 'https://jonaswolber.nuxt.space/en/about',
  },
  ui: {
    colors: {
      primary: 'teal',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/icon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})