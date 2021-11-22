/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/wallet',
    icon: 'FormsIcon',
    name: 'Wallet',
  },
  {
    path: '/app/vaults',
    icon: 'CardsIcon',
    name: 'Valuts',
  },
  {
    path: '/app/Labs',
    icon: 'ChartsIcon',
    name: 'Labs',
  },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  {
    path: '/app/settings',
    icon: 'PagesIcon',
    name: 'Settings',
    // routes: [
    //   // submenu
    //   // {
    //   //   path: '/login',
    //   //   name: 'Login',
    //   // },
    //   // {
    //   //   path: '/create-account',
    //   //   name: 'Connect Wallet',
    //   // },
    //   // {
    //   //   path: '/forgot-password',
    //   //   name: 'Forgot password',
    //   // },
    //   // {
    //   //   path: '/app/404',
    //   //   name: '404',
    //   // },
    //   // {
    //   //   path: '/app/blank',
    //   //   name: 'Blank',
    //   // },
    // ],
  },
]

export default routes
