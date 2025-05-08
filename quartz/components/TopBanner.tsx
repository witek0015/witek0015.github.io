import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const TopBanner: QuartzComponentConstructor = () => {
  function Banner({ fileData }: QuartzComponentProps) {
    const banner = fileData.frontmatter?.banner
    const styleData = fileData.frontmatter?.bannerStyle ?? {}

    const styles: React.CSSProperties = {
      width: "100%",
      objectFit: styleData.objectFit || "cover",
      objectPosition: styleData.objectPosition || "center",
      maxHeight: styleData.maxHeight || "400px",
      borderRadius: "12px",
      ...styleData, // override defaults if needed
    }

    if (!banner) return null

    return (
      <div className="top-banner">
        <img src={banner} alt="Banner" style={styles} />
      </div>
    )
  }

  return Banner
}

export default TopBanner
