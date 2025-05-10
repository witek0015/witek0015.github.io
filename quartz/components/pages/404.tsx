import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint" style="text-align: center;">
      <h1 style="text-align: center;"> 404</h1>
      <img
      src="https://witek0015.github.io/dimea-lore/static/404.png"
      alt="Nie znaleziono strony"
      style="
      max-width: 300px;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      border: 2px solid var(--dark);
  "
  />
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
