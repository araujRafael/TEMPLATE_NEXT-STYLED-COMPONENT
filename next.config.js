/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap",
    ],
  },
};
