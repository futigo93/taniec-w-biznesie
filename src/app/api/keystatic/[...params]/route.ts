import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

const hasGitHubCredentials =
  Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID) &&
  Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET) &&
  Boolean(process.env.KEYSTATIC_SECRET);

// Keystatic's GitHub-mode route handler throws as soon as this module loads
// (not just when someone hits the route) if these env vars are missing
// outside local dev - which took down the *entire site's* build the first
// time this deployed without them configured on Vercel, not just /keystatic.
// Fail soft instead: without the env vars, /keystatic just returns 503 and
// the rest of the site keeps building and serving normally.
export const { GET, POST } = hasGitHubCredentials
  ? makeRouteHandler({ config })
  : {
      GET: async () => unconfiguredResponse(),
      POST: async () => unconfiguredResponse(),
    };

function unconfiguredResponse() {
  return new Response(
    "Keystatic is not configured on this environment (missing KEYSTATIC_GITHUB_CLIENT_ID / KEYSTATIC_GITHUB_CLIENT_SECRET / KEYSTATIC_SECRET env vars).",
    { status: 503 },
  );
}
