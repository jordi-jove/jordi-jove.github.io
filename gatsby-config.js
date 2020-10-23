module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    // siteUrl: `https://jordi-jove.github.io/`,
    siteUrl: `https://jordi-jove.github.io/devfolio/`,
    // Your Name
    name: 'Jordi Jove',
    // Main Site Title
    title: `Jordi Jove | Developer`,
    // Description that goes under your name in main bio
    description: `DEVELOPER`,
    // Optional: Twitter account handle
    author: `@Jordi54955704`,
    // Optional: Github account URL
    github: `https://github.com/jordi-jove`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/jordijove/`,
    // Content of the About Me section
    about: `Hi. My name is Jordi and I'm a developer living in Berlin.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Carbon tutorial',
        description:
          'Completed a tutorial for the open source design system of IBM',
        link: 'https://carbon-tutorial-jordi-jove.eu-gb.mybluemix.net',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'TBD',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    /*experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],*/
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description: 'JavaScript (ES6+), React, Node.js',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description: 'Amazon Web Services (AWS), CI / CD, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
