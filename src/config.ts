// Site-wide settings. Edit these, commit, and the site rebuilds.

export const site = {
  name: "Sheriff Alimi",
  url: "https://sheriffalimi.com",
  description:
    "Sheriff Alimi invests in, writes about and builds technology across Africa.",

  // "plain" or "adire". Switch and redeploy to change the whole look.
  theme: (process.env.SITE_THEME as "plain" | "adire") ?? "adire",

  // Links shown at the bottom of the home page.
  // Leave a value empty ("") to hide it.
  links: {
    email: "", // e.g. "hello@sheriffalimi.com"
    linkedin: "", // e.g. "https://www.linkedin.com/in/..."
    x: "", // e.g. "https://x.com/..."
    techSafari: "https://techsafari.beehiiv.com/authors/sheriff-alimi",
    nextCapital: "", // newsletter URL
  },
};
