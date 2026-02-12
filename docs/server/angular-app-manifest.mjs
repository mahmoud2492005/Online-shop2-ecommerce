
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Online-shop2-ecommerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Online-shop2-ecommerce/landing",
    "route": "/Online-shop2-ecommerce"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/login"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/register"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/forgotPassword"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/landing"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJPVMTXW.js"
    ],
    "route": "/Online-shop2-ecommerce/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OWJEDAPA.js"
    ],
    "route": "/Online-shop2-ecommerce/products"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/brands"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/categories"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RTSUQYNU.js"
    ],
    "route": "/Online-shop2-ecommerce/details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RTSUQYNU.js"
    ],
    "route": "/Online-shop2-ecommerce/details/*/*"
  },
  {
    "renderMode": 0,
    "route": "/Online-shop2-ecommerce/checkout/*"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/services"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/about"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/contact"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/FavoriteProducts"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/allorders"
  },
  {
    "renderMode": 2,
    "route": "/Online-shop2-ecommerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 37752, hash: '709b9520f96a5387a45fa34abe1120b886b402bea876d5c7d79863379d971471', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18456, hash: '6cea24c3aa69d7fca54cecf8e6adfa353f91407b727efc3b30886f3d7104106f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'FavoriteProducts/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/FavoriteProducts_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'forgotPassword/index.html': {size: 51055, hash: 'c51e2af90f997cf9a146ce2ccdd55c7dba814c6bf2daa5e81b83e0fb5428d29b', text: () => import('./assets-chunks/forgotPassword_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 68545, hash: 'c64991faa9c5bcc89cac3fc096ad1ede165c4ff35b853aaf83733b7411104162', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 67266, hash: 'eac8fe3090d72980476bf9afdc8c34e4d8e710606906f873067cab909c0a0498', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 309, hash: 'c4e20de5f5b9587f7e46a6aa8a8eae9ba9548b427a0528c249c93311dc124da4', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 43928, hash: '9789858302a6c93bc92d824304f095a537c0e98ffb2fb670b6d69e310d09f009', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 201666, hash: 'e3db97f90657561d939050599838e279637523d2a47370aa3673e43beb665035', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'styles-PRBMD5XJ.css': {size: 203785, hash: 'I59gzMAbUJo', text: () => import('./assets-chunks/styles-PRBMD5XJ_css.mjs').then(m => m.default)}
  },
};
