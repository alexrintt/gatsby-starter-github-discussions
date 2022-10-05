import slugifyString from "slugify";
import config from "../../blog.config";

export function slugify(title: string, dateIso: string): string {
  const createdAt = new Date(dateIso);

  const [date, time] = createdAt.toISOString().split(/[T\.]/g);

  title = title.toLowerCase();

  const { slugPattern: pattern } = config;

  slugifyString.extend({ [`/`]: `-`, [`+`]: `plus` });

  const slug = pattern
    .replace(/{TITLE}/g, slugifyString(title))
    .replace(/{DATE}/g, date)
    .replace(/{DATE}/g, time);

  return slug;
}
