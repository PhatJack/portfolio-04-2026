import { Button } from "../ui/button"

const MENU_SOCIALS = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/sep_neit.tahp/",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/phat-nguyen-tien/",
  },
  {
    label: "X",
    href: "https://x.com/jackphat693",
  },
  {
    label: "GITHUB",
    href: "https://github.com/PhatJack",
  },
]

const Footer = () => {
  return (
    <footer className="relative flex min-h-110 w-full flex-col justify-between overflow-hidden border-t-4 border-border bg-bold-yellow p-6 sm:min-h-120 sm:p-8">
      <div className="w-full">
        <h2 className="text-[12vw] leading-none font-black tracking-tighter text-black uppercase md:text-[10vw]">
          JACKPHAT.EXE
        </h2>
      </div>
      <div className="mt-6 flex flex-col items-end justify-between gap-12 sm:mt-12 md:flex-row">
        <div className="flex w-full flex-col gap-4 text-2xl font-black text-black md:text-3xl">
          {MENU_SOCIALS.map((item) => (
            <div className="w-full text-left" key={item.label}>
              <a
                key={item.label}
                className="relative inline-block transition-transform duration-200 hover:-skew-x-2 hover:-skew-y-4"
                href={item.href}
                target="_blank"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-black transition-transform duration-200 hover:scale-x-100"></span>
              </a>
            </div>
          ))}
        </div>
        <div className="max-w-xs text-right">
          <Button
            className="mb-4 uppercase"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Scroll to top
          </Button>
          <p className="font-space-grotesk leading-tight font-black text-black uppercase">
            ©{new Date().getFullYear()} NON-CONFORMIST CURATIONS / ALL ERRORS
            INTENDED
          </p>
          <p className="mt-4 font-manrope text-sm font-bold tracking-wider text-black uppercase opacity-70">
            Built with love from JackPhat 💗
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
