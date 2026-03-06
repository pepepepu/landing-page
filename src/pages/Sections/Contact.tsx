import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Text } from "../../components";
import { theme } from "../../styles/Theme/theme";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".footer-reveal",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      backgroundColor: theme.colors.offWhite,
      color: theme.colors.mossGreenDark,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: theme.colors.agedGold,
      color: theme.colors.offWhite,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <Box
      ref={sectionRef}
      id={"contact"}
      minHeight={"100dvh"}
      width={"100%"}
      background={theme.colors.mossGreenDark}
      padding={isMobile ? "10dvh 6dvw 5dvh 6dvw" : "15dvh 8dvw 5dvh 8dvw"}
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      position={"relative"}
    >
      <Box
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={isMobile ? "flex-start" : "center"}
        style={{ flexGrow: 1 }}
      >
        <Box
          width={isMobile ? "100%" : "50%"}
          marginBottom={isMobile ? "4rem" : "0"}
        >
          <Text
            className="contact-reveal"
            fontFamily={'"Lato", sans-serif'}
            fontWeight={"700"}
            color={theme.colors.agedGold}
            fontSize={"0.85rem"}
            style={{
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "2rem",
              display: "block",
            }}
          >
            Dê o Primeiro Passo
          </Text>

          <Text
            className="contact-reveal"
            fontFamily={'"Bona Nova SC"'}
            fontWeight={"700"}
            color={theme.colors.offWhite}
            fontSize={isMobile ? "12dvw" : "5.5dvw"}
            lineHeight={0.9}
            style={{ display: "block", marginBottom: "2rem" }}
          >
            Pronta para
            <br />
            revelar a sua
            <br />
            melhor versão?
          </Text>

          <button
            ref={buttonRef}
            className="contact-reveal"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: theme.colors.agedGold,
              color: theme.colors.offWhite,
              padding: "1.2rem 3rem",
              border: "none",
              borderRadius: "4px",
              fontFamily: '"Lato", sans-serif',
              fontSize: "1.1rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginTop: "2rem",
              display: "inline-block",
              willChange: "transform, background-color, color",
            }}
          >
            Agendar via WhatsApp
          </button>
        </Box>

        <Box
          width={isMobile ? "100%" : "35%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"3rem"}
        >
          <Box className="contact-reveal">
            <Text
              fontFamily={'"Lato", sans-serif'}
              fontWeight={"700"}
              color={theme.colors.agedGold}
              fontSize={"0.85rem"}
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              A Clínica
            </Text>
            <Text
              fontFamily={'"Lato", sans-serif'}
              fontWeight={"300"}
              color={theme.colors.offWhite}
              fontSize={"1.1rem"}
              lineHeight={1.6}
              style={{ display: "block" }}
            >
              Av. das Nações Unidas, 14401
              <br />
              Torre Tarumã, Conjunto 1201
              <br />
              Vila Gertrudes, São Paulo - SP
            </Text>
          </Box>

          <Box className="contact-reveal">
            <Text
              fontFamily={'"Lato", sans-serif'}
              fontWeight={"700"}
              color={theme.colors.agedGold}
              fontSize={"0.85rem"}
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Conecte-se
            </Text>
            <a
              href="#"
              style={{
                fontFamily: '"Lato", sans-serif',
                fontWeight: 300,
                color: theme.colors.offWhite,
                fontSize: "1.1rem",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Instagram ↗
            </a>
            <a
              href="#"
              style={{
                fontFamily: '"Lato", sans-serif',
                fontWeight: 300,
                color: theme.colors.offWhite,
                fontSize: "1.1rem",
                textDecoration: "none",
                display: "block",
              }}
            >
              LinkedIn ↗
            </a>
          </Box>
        </Box>
      </Box>

      <Box
        className="footer-reveal"
        width={"100%"}
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={isMobile ? "flex-start" : "center"}
        style={{
          borderTop: `1px solid rgba(244, 241, 234, 0.1)`,
          paddingTop: "2rem",
          marginTop: "4rem",
        }}
        gap={isMobile ? "1rem" : "0"}
      >
        <Text
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"300"}
          color={theme.colors.offWhite}
          fontSize={"0.85rem"}
          style={{ opacity: 0.6 }}
        >
          © {new Date().getFullYear()} Dra. Camila Albuquerque. Todos os
          direitos reservados.
        </Text>

        <Text
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"300"}
          color={theme.colors.offWhite}
          fontSize={"0.85rem"}
          style={{ opacity: 0.6 }}
        >
          CRM 123456-SP | RQE 78901
        </Text>
      </Box>
    </Box>
  );
}
