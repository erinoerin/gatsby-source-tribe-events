# `gatsby-source-tribe-events`

Gets events from a WordPress site utilizing the Tribe Events plugin. This provides a work-around to challenges (as of August 2019) getting Tribe Events from the gatsby-source-wordpress plugin.

## Dependencies

axios

## Examples of usage

In your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-tribe-events",
      options: {
        baseURL: "https://mysite.tld",
        maxEvents: 10 // optional, default: 10, max: 50
      }
    }
  ]
};
```

## How to query for data

```js
allTribeEvent {
    edges {
      node {
        id
        title
        date
        all_day
        start_date
        end_date
        featured
        venue {
          venue
          url
          slug
          address
          city
          state
          zip
        }
        description
      }
    }
  }
```
