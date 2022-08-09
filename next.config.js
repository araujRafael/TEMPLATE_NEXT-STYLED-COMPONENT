/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap",
      "https://fonts.google.com/share?selection.family=JetBrains%20Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800%7CPoppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300",
    ],
  },
};
