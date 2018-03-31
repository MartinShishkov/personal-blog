module.exports = {
  siteMetadata: {
    title: 'sharkDeveloper',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
        resolve: "gatsby-plugin-typescript",
        options: {
          transpileOnly: true, // default
          compilerOptions: {
            target: `es6`,
            jsx: `react`,
          }, // default
        },
    },
    {
        resolve: `gatsby-plugin-react-css-modules`,
        options: {
          // *.css files are included by default.
          // To support another syntax (e.g. SCSS),
          // add `postcss-scss` to your project's devDependencies
          // and add the following option here:
          filetypes: {
            ".scss": { syntax: `postcss-scss` },
          },
          
          generateScopedName: "[local]_[hash:base64:5]",
          // Exclude global styles from the plugin using a RegExp:
          exclude: `\/global\/`
        },
        //localIdentName: "[local]--[hash:base64:5]",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {            
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-116707890-1",
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is optional
            anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
        },
    },
  ],
};
