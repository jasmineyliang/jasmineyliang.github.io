// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jasmineyliang', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 20, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jasmineyliang/ml-perceptron-proj', 'jasmineyliang/ml-svm-proj'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      // header: 'My Projects',
      // // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Jasmine Liang',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'jypliang',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://jasmineyliang.github.io',
    phone: '',
    email: 'yupinl@umich.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'MATLAB',
    'MySQL',
    'HTML',
    'CSS',
    'MySQL',
  ],
  experiences: [
    {
      company: 'Iowa State University',
      position: 'Graduate Researcher in Machine Learning',
      from: 'September 2019',
      to: 'Present',
      // companyLink: 'www.iastate.edu',
    },
    {
      company: 'National Olympics Center, Taiwan',
      position: 'Data Analytics',
      from: 'January 2018',
      to: 'August 2019',
      // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Iowa State University',
      degree: 'PhD in Computer Science and Biomechanics',
      from: '2019',
      to: '2024',
    },
    {
      institution: 'University of Michigan',
      degree: 'DPT in Biomechanics and Medical Image',
      from: '2021',
      to: '2017',
    },
  ],
  publications: [
    {
      title: 'Striding into Clarity: Wearable Sensor-Driven Estimation of Knee Adduction Moment, Unveiling the Black Box with Sequence-Based Neural Networks and Explainable Artificial Intelligence',
      conferenceName: 'AAAI 2024 SSS on Clinical FMs',
      // journalName: 'Journal Name',
      authors: 'Jasmine Y. Liang, Hongyi Bian, Wensheng Zhang, Carl K. Chang, Li-Shan Chou',
      link: 'https://openreview.net/pdf?id=lWsDWnre2l',
      description:
        'Our study, leveraging wearable sensors and advanced AI/ML algorithms, accurately predicts knee adduction moment outcomes, with attention weight trends, advanced clinical practice in knee osteoarthritis management.',
    },
    {
      title: 'Assessment of Gait Balance Control Using Inertial Measurement Units — A Narrative Review',
      // conferenceName: 'Conference Name',
      journalName: 'World Scientific Annual Review of Biomechanics',
      authors: 'Jasmine Y. Liang, Li-Shan Chou',
      link: 'https://www.worldscientific.com/doi/epdf/10.1142/S2810958923300068',
      description:
        'This narrative review examines the use of inertial measurement units (IMUs) for assessing gait balance control.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  // enablePWA: false,
};

export default CONFIG;
