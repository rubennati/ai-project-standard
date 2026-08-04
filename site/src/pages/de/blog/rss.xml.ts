import type { APIRoute } from "astro";
import { feedForLocale } from "../../blog/rss.xml";

export const GET: APIRoute = ({ site }) => feedForLocale("de", site);
