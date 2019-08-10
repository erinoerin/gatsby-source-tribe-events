const axios = require("axios");

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { baseUrl, maxEvents = 10 } = options;

  const resultEvents = await tribeGetResults(baseUrl, "events", maxEvents);
  tribeCreateNode(resultEvents.data.events, "TribeEvents");

  const resultVenues = await tribeGetResults(baseUrl, "venues", 50);
  tribeCreateNode(resultVenues.data.venues, "TribeVenues");

  const resultOrganizers = await tribeGetResults(baseUrl, "organizers", 50);
  tribeCreateNode(resultOrganizers.data.organizers, "TribeOrganizers");

  const resultCategories = await tribeGetResults(baseUrl, "categories", 50);
  tribeCreateNode(resultCategories.data.categories, "TribeCategories");

  const resultTags = await tribeGetResults(baseUrl, "tags", 50);
  tribeCreateNode(resultTags.data.tags, "TribeTags");

  async function tribeGetResults(baseUrl, endPoint, perPage) {
    result = await axios({
      method: "GET",
      url: baseUrl + "/wp-json/tribe/events/v1/" + endPoint,
      params: {
        per_page: perPage
      }
    }).catch(error => {
      console.error(error.message);
    });

    return result;
  }

  function tribeCreateNode(result, tribeType) {
    /* result should equal result.data.tags */
    result.forEach(r => {
      const node = {
        ...r,
        id: createNodeId(`${tribeType}-${r.id}`),
        internal: {
          type: tribeType,
          contentDigest: createContentDigest(r)
        }
      };
      actions.createNode(node);
    });
  }
};
