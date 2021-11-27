import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import { appName } from '../constants';



function Seo({ title, description, meta, }) {
  const metaDescription = description;
  const defaultTitle = appName;
  const twitter = null;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}

      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}

      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitter || '',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default hot(module)(Seo);
