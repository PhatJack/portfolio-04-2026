import { Button } from "../ui/button"
import { Link, linkOptions } from "@tanstack/react-router"

const MENU_ITEMS = linkOptions([
  {
    label: "Home",
    to: "/",
    activeOptions: { exact: true },
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/projects",
    label: "Projects",
  },
  {
    to: "/contact",
    label: "Contact",
  },
])

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
                    activeProps={{ className: "border-border bg-main" }}
                    className="border-2 border-transparent bg-transparent px-4 py-2 uppercase transition-all hover:border-border hover:bg-main"
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
