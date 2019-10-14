import { graphql, useStaticQuery } from "gatsby"

const useImages = () => {
  const images = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        women: file(relativePath: { eq: "women.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        men: file(relativePath: { eq: "men.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        rack: file(relativePath: { eq: "shoe-rack.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 350) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        about: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        calla_rose: file(relativePath: { eq: "products/calla-rose.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        clarkdale_arlo: file(
          relativePath: { eq: "products/clarkdale-arlo.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desert_boot: file(relativePath: { eq: "products/desert-boot.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        batcombe_lord: file(
          relativePath: { eq: "products/batcombe-lord.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        club_c_85: file(relativePath: { eq: "products/club-c-85.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        club_c_85_canvas: file(
          relativePath: { eq: "products/club-c-85-canvas.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        floatride_energy: file(
          relativePath: { eq: "products/floatride-energy.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        grace: file(relativePath: { eq: "products/grace.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        laina_violet: file(relativePath: { eq: "products/laina-violet.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        laureti_grace: file(
          relativePath: { eq: "products/laureti-grace.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        lite: file(relativePath: { eq: "products/lite.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        nano_2: file(relativePath: { eq: "products/nano-2.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        nano_6_covert: file(
          relativePath: { eq: "products/nano-6-covert.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        nano_8_flexweave: file(
          relativePath: { eq: "products/nano-8-flexweave.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        netley_whirl: file(relativePath: { eq: "products/netley-whirl.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        npc_uk: file(relativePath: { eq: "products/npc-uk.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pure_tone: file(relativePath: { eq: "products/pure-tone.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mila_myth: file(relativePath: { eq: "products/mila-myth.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        edward_walk: file(relativePath: { eq: "products/edward-walk.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        craft_albert: file(relativePath: { eq: "products/craft-albert.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        oliver_lace: file(relativePath: { eq: "products/oliver-lace.webp" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        clarkdale_gobi: file(
          relativePath: { eq: "products/clarkdale-gobi.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        orson_harbour: file(
          relativePath: { eq: "products/orson-harbour.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        batcombe_wing: file(
          relativePath: { eq: "products/batcombe-wing.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return images
}

export default useImages
