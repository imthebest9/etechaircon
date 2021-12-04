/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Aircon Chemical Overhaul",
    title: "Aircon Chemical Overhaul",
    text:
      "Unit is disassembled and each part is carefully inspected, cleaned and replaced if defective. The aim is to restore the unit to it’s original working condition. We Recommend overhaul if aircon performs poorly or erratically, if chemical cleaning is ineffective in restoring performance or unit has not been washed for a number of years.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "General Aircon Servicing",
    title: "General Aircon Servicing",
    text:
      "Cleaning of the air-conditioner’s front panel, filters, fan coil and drain pipe with water, as well as checking whether that air-conditioning unit is in working order. We recommend general aircon servicing once a month for commercial units and once every 3 months for home air-conditioning. Regular servicing reduces the need for frequent chemical cleaning or overhauls.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "One Time FCU Cleaning",
    title: "One Time FCU Cleaning",
    text:
      "We offer both a one-time general aircon servicing or yearly maintenance contract at an affordable price.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Aircon Gas Top Up",
    title: "Aircon Gas Top Up",
    text:
      "When it comes to aircon gas top up, you ought to know that there exist two types of top-ups in Singapore. We have the R22 and R40 refrigerants. The R22 is mainly reserved for use in old units. The R40 is for use in the newer generation models. The technician gets to determine the refrigerant to use after having checked the air conditioner in use in your home or business premise. Lack of refrigerant often comes around when you have leaky pipes or when there is a gas leak in your air conditioner unit. Leakage forces the air conditioner to work harder than normal for it to continue supplying your home with cool air.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="What do we do?"
          title="Meet the services we provide"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
