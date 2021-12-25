/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-thumb2.jpg";
import BannerImg2 from "assets/banner-2ndthumb.jpg";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import styled from "styled-components";
import { AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import Logo from "assets/logo2.svg";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Providing the finest Air Cleaning Service
          </Heading>
          <Text as="p" variant="heroSecondary">
            At EtechAircon, we make sure our team executes their duty over and
            above in order to fulfill the needs of our customers. For more
            information or general inquiries, click on the icons below to visit
            our facebook page or whatsapp us now!
          </Text>
          <Box>
            <SocialIcons href="https://www.facebook.com/profile.php?id=100057442029669">
              <AiOutlineFacebook size="6rem" />
            </SocialIcons>
            <SocialIcons href="https://wa.link/qtbue9">
              <AiOutlineWhatsApp size="6rem" />
            </SocialIcons>
          </Box>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
        <br />
        <br />
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg2} alt="banner2" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
      // backgroundImage: `url(${Logo})`,
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};

const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: black;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
