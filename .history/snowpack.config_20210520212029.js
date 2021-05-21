/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh', // HMR
    '@snowpack/plugin-dotenv', // .env 파일 사용 목적 
    [
      '@snowpack/plugin-typescript', // 타입스크립트 to 자바스크립트 
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  installOptions: {
    polyfillNode: true, // 모듈 설치와 관련된 옵션, 소스에서 path같은 Node.js 모듈을 사용할 경우 필요하다. 
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 3000,
  },
  buildOptions: {
    /* ... */
    sourcemap: true,
  },
};
