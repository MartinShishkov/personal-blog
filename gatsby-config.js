module.exports = {
  siteMetadata: {
    title: 'Sharkdeveloper',
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
    
          // Exclude global styles from the plugin using a RegExp:
          exclude: `\/global\/`,
        },
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
  ],
};
