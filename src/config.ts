// Site-wide settings. Home page text and links live in src/data/home.json.

export const site = {
  name: "Sheriff Alimi",
  url: "https://sheriffalimi.com",
  description:
    "Sheriff Alimi invests in, writes about and builds technology across Africa.",

  // "plain" or "adire". Switch and redeploy to change the whole look.
  theme: (process.env.SITE_THEME as "plain" | "adire") ?? "adire",
};
