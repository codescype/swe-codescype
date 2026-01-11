import {
  mdiMoonNew,
  mdiDeveloperBoard,
  mdiTools,
  // mdiBriefcase,
  // mdiOfficeBuilding,
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
      icon: mdiPhone,
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
        value: 'codescype@gmail.com',
        icon: mdiEmail,
        link: 'mailto:codescype@gmail.com'
      },

      {
        title: 'Location',
        value: 'Lekki, Lagos, Nigeria',
        icon: mdiMapMarker
      }
    ],

    social: [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/codescype',
        imgSrc: '/svg/icons/social/linkedin.svg'
      },
      {
        title: 'Github',
        link: 'https://www.github.com/codescype',
        imgSrc: '/svg/icons/tools-and-techs/github.svg'
      },
      {
        title: 'Facebook',
        link: 'https://www.facebook.com/codescype',
        imgSrc: '/svg/icons/social/facebook.svg'
      },
      {
        title: 'Twitter',
        link: 'https://www.twitter.com/codescype',
        imgSrc: '/svg/icons/social/twitter.svg'
      }
    ]
  },

  toolsAndTechs: {
    languages: [
      {
        name: 'PHP',
        imgSrc: '/svg/icons/languages/php.svg'
      },
      {
        name: 'Python',
        imgSrc: '/svg/icons/languages/python.svg'
      },
      {
        name: 'JavaScript',
        imgSrc: '/svg/icons/languages/javascript.svg'
      },
      {
        name: 'TypeScript',
        imgSrc: '/svg/icons/languages/typescript.svg'
      },
      {
        name: 'Dart',
        imgSrc: '/svg/icons/languages/dart.jpg'
      },
      {
        name: 'Rust',
        imgSrc: '/svg/icons/languages/rust.svg'
      },
    ],
    others: [
      {
        name: 'ClickUp',
        imgSrc: '/svg/icons/tools-and-techs/clickup.svg'
      },
      {
        name: 'GitHub',
        imgSrc: '/svg/icons/tools-and-techs/github.svg'
      },
      {
        name: 'Figma',
        imgSrc: '/svg/icons/tools-and-techs/figma.svg'
      },
      {
        name: 'HTML',
        imgSrc: '/svg/icons/tools-and-techs/html5.svg'
      },
      {
        name: 'CSS',
        imgSrc: '/svg/icons/tools-and-techs/css3.svg'
      },
      {
        name: 'Vue',
        imgSrc: '/svg/icons/tools-and-techs/vue.svg'
      },
      {
        name: 'React',
        imgSrc: '/svg/icons/tools-and-techs/react.svg'
      },
      {
        name: 'Nuxt',
        imgSrc: '/svg/icons/tools-and-techs/nuxt.svg'
      },
      {
        name: 'Next.js',
        imgSrc: '/svg/icons/tools-and-techs/nextjs.svg'
      },
      {
        name: 'React Native',
        imgSrc: '/svg/icons/tools-and-techs/react.svg'
      },
      {
        name: 'Flutter',
        imgSrc: '/svg/icons/tools-and-techs/flutter.svg'
      },
      {
        name: 'Laravel',
        imgSrc: '/svg/icons/tools-and-techs/laravel.svg'
      },
      {
        name: 'Node JS',
        imgSrc: '/svg/icons/tools-and-techs/nodejs.png'
      },
      {
        name: 'Mongo DB',
        imgSrc: '/svg/icons/tools-and-techs/mongodb.svg'
      },
      {
        name: 'PostgreSQL',
        imgSrc: '/svg/icons/tools-and-techs/postgresql.svg'
      },
      {
        name: 'Netlify',
        imgSrc: '/svg/icons/tools-and-techs/netlify.svg'
      },
      {
        name: 'Firebase',
        imgSrc: '/svg/icons/tools-and-techs/firebase.png'
      },
      {
        name: 'GCP',
        imgSrc: '/svg/icons/tools-and-techs/gcp.svg'
      },
      {
        name: 'AWS',
        imgSrc: '/svg/icons/tools-and-techs/aws.svg'
      },
      {
        name: 'OpenAI',
        imgSrc: '/svg/icons/tools-and-techs/openai.svg'
      },

    ]
  }
})

export const getters = {
  canGoToNextRoute: (state) => {
    return state.currentRoute + 1 < state.routes.length
  },

  canGoToPreviousRoute: (state) => {
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
