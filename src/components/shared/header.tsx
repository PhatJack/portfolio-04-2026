import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Link, linkOptions } from "@tanstack/react-router"

const MENU_ITEMS = [
  linkOptions({
    label: "Home",
    to: "/",
  }),
  linkOptions({
    to: "/about",
    label: "About",
  }),
  linkOptions({
    to: "/projects",
    label: "Projects",
  }),
  linkOptions({
    to: "/contact",
    label: "Contact",
  }),
]

const Header = () => {
  return (
    <header className="grid w-full place-items-center border-b-2 border-border shadow-shadow">
      <div className="container">
        <div className="flex w-full items-center justify-between py-4">
          <h1 className="text-2xl uppercase">
            <i>JACKPHAT.EXE</i>
          </h1>
          <nav>
            <ul className="flex items-center gap-4">
              {MENU_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    {...item}
                    to={item.to}
                    className={cn(
                      "border-2 border-transparent bg-transparent px-4 py-2 uppercase shadow-none transition-all hover:border-border hover:bg-main hover:shadow-shadow [&.active]:border-border [&.active]:bg-main [&.active]:shadow-shadow"
                    )}
                    activeOptions={{
                      exact: true,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="bg-bold-yellow">Let's talk</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
