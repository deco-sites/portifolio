import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 425,
  site: "portifolio",
  domains: ["portifolio.deco.site"],
});