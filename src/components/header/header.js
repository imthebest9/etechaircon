/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import styled from "styled-components";
import { AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} sx={styles.logo} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        <Flex sx={styles.icons}>
          <SocialIcons href="https://www.facebook.com/profile.php?id=100057442029669">
            <AiOutlineFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.link/qtbue9">
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
        </Flex>
        {/* <MobileDrawer /> */}
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#e1e4e8",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "#e1e4e8",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
  icons: {
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    mx:"auto"
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mx:"auto"
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
