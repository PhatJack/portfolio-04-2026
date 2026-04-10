import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const AboutSection = () => {
  return (
    <Card className="w-full bg-sky-blue">
      <CardContent>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="relative aspect-3/4 w-full border-4 border-border sm:w-2/3 md:w-1/2 lg:w-[30%]">
            <img
              src="avt2.png"
              alt="Portrait of Jack Phat"
              className="relative z-10 h-full w-full object-cover"
            />
            <div className="absolute -bottom-2 -left-4 z-50 -rotate-10">
              <Badge className="bg-bold-yellow px-3 py-1 font-manrope text-sm shadow-shadow sm:px-4 sm:py-1.5 sm:text-base">
                EST 2003
              </Badge>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 xl:flex-row">
            <div className="flex w-full flex-col justify-between gap-4 font-manrope xl:w-3/5">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold uppercase sm:text-4xl">
                  Jack Phat
                </h2>
                <p className="text-base font-semibold text-gray-700 sm:text-xl">
                  tienphat.ng693@gmail.com
                </p>
                <p className="text-base leading-relaxed font-medium sm:text-lg">
                  I build{" "}
                  <span className="bg-soft-orange font-bold underline underline-offset-2">
                    hyper-tactile digital experiences
                  </span>{" "}
                  that push beyond conventional design. No templates. No boring
                  grids. Just pure, raw frontend architecture crafted to feel as
                  good as it looks. Every interaction is intentional, every
                  detail matters. Working from Vietnam, I collaborate with
                  clients and teams around the world to create bold, memorable
                  products.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <Button
                  size={"lg"}
                  className="text-lg font-semibold uppercase"
                  asChild
                >
                  <a
                    href="/NguyenTienPhat_CV.pdf"
                    target="_blank"
                    download={"/NguyenTienPhat_CV.pdf"}
                    rel="noopener noreferrer"
                  >
                    View my résumé
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 xl:w-2/5">
              <div className="flex aspect-square flex-col items-center justify-center border-4 border-border bg-soft-orange">
                <span className="font-manrope text-4xl font-bold sm:text-6xl lg:text-7xl">
                  1.5+
                </span>
                <p className="text-sm font-medium sm:text-lg lg:text-xl">
                  experiences
                </p>
              </div>
              <div className="flex aspect-square flex-col items-center justify-center border-4 border-border bg-coral-pink">
                <span className="font-manrope text-4xl font-bold sm:text-6xl lg:text-7xl">
                  2+
                </span>
                <p className="font-manrope text-sm font-medium sm:text-lg lg:text-xl">
                  clients
                </p>
              </div>
              <div className="flex aspect-square flex-col items-center justify-center border-4 border-border bg-soft-green">
                <span className="font-manrope text-4xl font-bold sm:text-6xl lg:text-7xl">
                  10+
                </span>
                <p className="font-manrope text-sm font-medium sm:text-lg lg:text-xl">
                  projects
                </p>
              </div>
              <div className="flex aspect-square flex-col items-center justify-center border-4 border-border bg-bold-yellow">
                <span className="font-manrope text-4xl font-bold sm:text-6xl lg:text-7xl">
                  8+
                </span>
                <p className="font-manrope text-sm font-medium sm:text-lg lg:text-xl">
                  github stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AboutSection
