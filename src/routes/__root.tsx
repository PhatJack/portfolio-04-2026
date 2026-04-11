import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import appCss from "../styles.css?url"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "jackphat.dev",
      },
      {
        name: "description",
        content:
          "Jack Phat's personal portfolio showcasing projects, skills, and career highlights.",
      },
      {
        property: "og:title",
        content: "jackphat.dev",
      },
      {
        property: "og:description",
        content:
          "Jack Phat's personal portfolio showcasing projects, skills, and career highlights.",
      },
      {
        property: "og:image",
        content: "/projects/1.png",
      },
      {
        property: "og:image:alt",
        content: "Portfolio preview of Jack Phat",
      },
      // ✅ Twitter Card
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "jackphat.dev",
      },
      {
        name: "twitter:description",
        content:
          "Jack Phat's personal portfolio website showcasing his skills, projects, and career highlights as a software engineer.",
      },
      {
        name: "twitter:image",
        content: "/projects/1.png",
      },
      {
        name: "twitter:image:alt",
        content: "Portfolio preview of Jack Phat",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Space+Grotesk:wght@300..700&family=Syne:wght@400..800&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="bg-typography w-full pb-24 sm:pt-6">
          <div className="container mx-auto size-full">
            <div className="relative border-4 border-border bg-off-white shadow-shadow">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
