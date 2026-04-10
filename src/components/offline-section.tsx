import HeaderSection from "./shared/header-section"

const OfflineSection = () => {
  return (
    <section className="relative bg-green-light px-4 sm:px-8 py-20">
      <HeaderSection
        title="OFFLINE MODE"
        subtitle="What I do in my free time when I'm not coding?"
				className="ml-auto mr-0 text-right"
      />
    </section>
  )
}

export default OfflineSection
