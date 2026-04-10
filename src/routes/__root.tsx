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
        // integrity: "sha384-xxxx",
        // crossOrigin: "anonymous",
        // referrerPolicy: "no-referrer",
        // media: "all",
        // type: "text/css",
        // onLoad: "this.onload=null;this.rel='stylesheet'",
        // onError: "console.error('Failed to load font stylesheet')",
        // as: "style",
        // defer: true,
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
        <div className="bg-typography w-full sm:pt-6 pb-24">
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
