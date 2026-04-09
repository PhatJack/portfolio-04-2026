const Footer = () => {
  return (
    <footer className="relative flex min-h-120 w-full flex-col justify-between overflow-hidden border-t-4 border-border bg-bold-yellow p-8">
      <div className="w-full">
        <h2 className="leading-none font-black tracking-tighter text-black uppercase text-[10vw]">
          JACKPHAT.EXE
        </h2>
      </div>
      <div className="mt-12 flex flex-col items-end justify-between gap-12 md:flex-row">
        <div className="font-headline flex flex-col gap-4 text-2xl font-black text-black md:text-3xl">
          <a
            className="transition-transform duration-100 hover:-rotate-2 hover:italic hover:underline"
            href="https://www.instagram.com/sep_neit.tahp/"
            target="_blank"
          >
            INSTAGRAM
          </a>
          <a
            className="transition-transform duration-100 hover:-rotate-2 hover:italic hover:underline"
            href="https://www.linkedin.com/in/phat-nguyen-tien/"
          >
            LINKEDLN
          </a>
          <a
            className="transition-transform duration-100 hover:-rotate-2 hover:italic hover:underline"
            href="https://x.com/jackphat693"
            target="_blank"
          >
            X
          </a>
          <a
            className="transition-transform duration-100 hover:-rotate-2 hover:italic hover:underline"
            href="mailto:tienphat.ng693@gmail.com"
            target="_blank"
          >
            EMAIL
          </a>
        </div>
        <div className="max-w-xs text-right">
          <p className="font-space-grotesk leading-tight font-black text-black uppercase">
            ©{new Date().getFullYear()} NON-CONFORMIST CURATIONS / ALL ERRORS
            INTENDED
          </p>
          <p className="font-label mt-4 text-xs font-bold text-black uppercase opacity-70">
            Built with love from JackPhat 💗
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
