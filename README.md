# gatsby-source-tribe-events

Gatsby source plugin to add WordPress Events Calendar nodes created from Events Calendar endpoints:

- events
- venues
- organizers
- categories
- tags

## Dependencies

axios

## Installation

`npm install --save gatsby-source-tribe-events`

## Examples of usage

In your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-tribe-events",
      options: {
        // baseUrl should include the protocol (https or http)
        baseUrl: "https://mysite.tld",

        // maxEvents is optional, default: 10, max: 50
        maxEvents: 10
      }
    }
  ]
};
```

## How to query for data

```graphql
allTribeEvents {
    edges {
      node {
        id
        title
        slug
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

## ToDo

- Create relationships between nodes
- Create nodes for all events (more than 50)
