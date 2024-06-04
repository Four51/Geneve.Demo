/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  devIndicators: {
    autoPrerender: true
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["src"]
  }
}
