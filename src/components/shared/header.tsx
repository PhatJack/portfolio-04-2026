import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Link, linkOptions, useLocation } from "@tanstack/react-router"
import gsap from "gsap"
import { Menu, X } from "lucide-react"
import { useGSAP } from "@gsap/react"

const MENU_ITEMS = [
  linkOptions({ to: "/", hash: "", label: "Home" }),
  linkOptions({ to: "/", hash: "about", label: "About" }),
  linkOptions({ to: "/", hash: "projects", label: "Projects" }),
  linkOptions({ to: "/", hash: "contact", label: "Contact" }),
]

const Header = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)

  // GSAP animation
  useGSAP(() => {
    if (!menuRef.current) return

    if (open) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      )
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      })
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 grid w-full place-items-center border-b-4 border-border bg-off-white">
      <div className="container">
        <div className="flex w-full items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <div className="relative h-8 w-16 sm:h-12 sm:w-24">
            <img src="/logo.png" className="absolute inset-0 -translate-y-1" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {MENU_ITEMS.map((item) => (
                <li key={item.hash}>
                  <Link
                    {...item}
                    className={cn(
                      "border-2 border-transparent bg-transparent px-4 py-2 uppercase shadow-none transition-all hover:border-border hover:bg-main hover:shadow-shadow",
                      location.pathname === item.to &&
                        location.hash === item.hash &&
                        "border-border bg-main shadow-shadow"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden md:block">
            <Button className="bg-bold-yellow" variant={"reverse"}>
              Let's talk
            </Button>
          </div>

          {/* Mobile Toggle */}
          <Button
            className="md:hidden"
            variant={"neutral"}
            size={"icon"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="overflow-hidden md:hidden">
          <ul
            ref={menuRef}
            data-open={open}
            className="flex h-0 flex-col gap-3 px-4 data-open:pb-4 data-[open=false]:opacity-0 data-open:opacity-100"
          >
            {MENU_ITEMS.map((item) => (
              <li key={item.hash}>
                <Link
                  {...item}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-2 border-transparent px-4 py-2 uppercase transition-all hover:border-border hover:bg-main",
                    location.pathname === item.to &&
                      location.hash === item.hash &&
                      "border-border bg-main"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <Button className="w-full bg-bold-yellow" variant={"reverse"}>
              Let's talk
            </Button>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
