import {
  mdiMoonNew,
  mdiDeveloperBoard,
  mdiTools,
  // mdiBriefcase,
  // mdiOfficeBuilding,
  mdiContactPhone,
  mdiEmail,
  mdiPhone,
  mdiMapMarker
} from '@mdi/js'

export const state = () => ({
  routes: [
    {
      title: 'Home',
      icon: mdiMoonNew,
      link: '#home'
    },
    {
      title: 'What I do',
      icon: mdiDeveloperBoard,
      link: '#what-i-do'
    },
    {
      title: 'Tools and Techs',
      icon: mdiTools,
      link: '#tools-and-techs'
    },
    // {
    //   title: 'Projects',
    //   icon: mdiBriefcase,
    //   link: '#projects'
    // },
    {
      title: 'Contact',
      icon: mdiContactPhone,
      link: '#contact'
    }
  ],

  currentRoute: 0,

  appBarIsShown: false,

  navDrawerIsShown: false,

  contacts: {
    main: [
      {
        title: 'Phone',
        value: '+2348147678919',
        icon: mdiPhone
      },

      {
        title: 'Email',
        value: 'ayobamideleope79@gmail.com',
        icon: mdiEmail,
        link: 'mailto:ayobamideleope79@gmail.com'
      },

      {
        title: 'Location',
        value: 'Ibadan, Nigeria',
        icon: mdiMapMarker
      }
    ],

    social: [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ayobamideleope',
        imgSrc: '/svg/icons/social/linkedin.svg'
      },
      {
        title: 'Github',
        link: 'https://www.github.com/ayobamideleope',
        imgSrc: '/svg/icons/tools-and-techs/github.svg'
      },
      {
        title: 'Facebook',
        link: 'https://www.facebook.com/ayobamideleope',
        imgSrc: '/svg/icons/social/facebook.svg'
      },
      {
        title: 'Twitter',
        link: 'https://www.twitter.com/ayobamideleope',
        imgSrc: '/svg/icons/social/twitter.svg'
      }
    ]
  },

  toolsAndTechs: {
    languages: [
      {
        name: 'JavaScript',
        imgSrc: '/svg/icons/languages/javascript.svg'
      },
      {
        name: 'CSS',
        imgSrc: '/svg/icons/languages/css3.svg'
      },
      {
        name: 'Python',
        imgSrc: '/svg/icons/languages/python.svg'
      },
      {
        name: 'PHP',
        imgSrc: '/svg/icons/languages/php.svg'
      },
      {
        name: 'HTML',
        imgSrc: '/svg/icons/languages/html5.svg'
      },
      {
        name: 'MySQL',
        imgSrc: '/svg/icons/languages/mysql.svg'
      }
    ],
    others: [
      {
        name: 'Nuxt',
        imgSrc: '/svg/icons/tools-and-techs/nuxt.svg'
      },
      {
        name: 'TypeScript',
        imgSrc: '/svg/icons/tools-and-techs/typescript.svg'
      },
      {
        name: 'Adobe XD',
        imgSrc: '/svg/icons/tools-and-techs/adobe-xd.svg'
      },
      {
        name: 'GitHub',
        imgSrc: '/svg/icons/tools-and-techs/github.svg'
      },
      {
        name: 'Firebase',
        imgSrc: '/svg/icons/tools-and-techs/firebase.png'
      },
      {
        name: 'Vue',
        imgSrc: '/svg/icons/tools-and-techs/vue.svg'
      },
      {
        name: 'Figma',
        imgSrc: '/svg/icons/tools-and-techs/figma.svg'
      },
      {
        name: 'Linux',
        imgSrc: '/svg/icons/tools-and-techs/linux.svg'
      },
      {
        name: 'Adobe Illustrator',
        imgSrc: '/svg/icons/tools-and-techs/adobe-illustrator-cc.svg'
      },
      {
        name: 'Node JS',
        imgSrc: '/svg/icons/tools-and-techs/nodejs.svg'
      },
      {
        name: 'Laravel',
        imgSrc: '/svg/icons/tools-and-techs/laravel.svg'
      },
      {
        name: 'Flutter',
        imgSrc: '/svg/icons/tools-and-techs/flutter.svg'
      },
      {
        name: 'Netlify',
        imgSrc: '/svg/icons/tools-and-techs/netlify.svg'
      },
      {
        name: 'Sass',
        imgSrc: '/svg/icons/tools-and-techs/sass.svg'
      },
      {
        name: 'Photoshop',
        imgSrc: '/svg/icons/tools-and-techs/photoshop-cc.svg'
      },
      {
        name: 'InVision',
        imgSrc: '/svg/icons/tools-and-techs/invision.svg'
      },
      {
        name: 'Webpack',
        imgSrc: '/svg/icons/tools-and-techs/webpack.svg'
      },
      {
        name: 'Mongo DB',
        imgSrc: '/svg/icons/tools-and-techs/mongodb.svg'
      }
    ]
  }
})

export const getters = {
  canGoToNextRoute: state => {
    return state.currentRoute + 1 < state.routes.length
  },

  canGoToPreviousRoute: state => {
    return state.currentRoute > 0
  },

  nextRouteLink: (state, getters) => {
    if (!getters.canGoToNextRoute) return ''

    return state.routes[state.currentRoute + 1].link
  },

  previousRouteLink: (state, getters) => {
    if (!getters.canGoToPreviousRoute) return ''

    return state.routes[state.currentRoute - 1].link
  }
}

export const mutations = {
  setCurrentRoute: (state, index) => {
    // eslint-disable-next-line no-console
    console.info('currentRoute is to be set to: ' + index)
    state.currentRoute = index
    // console.info('index has been set')
  },

  setAppBarVisibility: (state, bool) => {
    // eslint-disable-next-line no-console
    console.info('appBarIsShown is to be set to: ' + bool)
    state.appBarIsShown = bool
    // console.info('bool has been set')
  },

  setNavDrawerVisibility: (state, bool) => {
    // eslint-disable-next-line no-console
    console.info('navDrawerIsShown is to be set to: ' + bool)
    state.navDrawerIsShown = bool
    // console.info('bool has been set')
  }
}

/* export const actions = {
  nuxtServerInit({ dispatch, getters, commit }, { app, req }) {
    console.log('[nuxtServerInit]')

    if (app.context.index.search) {
      commit('SET_SEARCH', app.context.index.search)
    }

    // if (!getters['user/isAuth']) {
    // return
    // const isUser = await dispatch('user/init')
    // console.log(['userIs', isUser])
    // }
    // const isUser = await dispatch('user/checkAuth')
  }
} */
