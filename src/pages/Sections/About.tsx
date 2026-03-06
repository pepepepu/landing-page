import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Text } from "../../components";
import { theme } from "../../styles/Theme/theme";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image-reveal",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.05 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".about-text-reveal",
        { opacity: 0, y: 40 },
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
        ".about-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <Box
      ref={sectionRef}
      id={"about"}
      minHeight={"100dvh"}
      width={"100%"}
      background={theme.colors.mossGreenDark}
      display={"flex"}
      flexDirection={isMobile ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={isMobile ? "10dvh 5dvw" : "10dvh 8dvw"}
      boxSizing={"border-box"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        width={isMobile ? "100%" : "35dvw"}
        height={isMobile ? "50dvh" : "80dvh"}
        position={"relative"}
        style={{ marginBottom: isMobile ? "4rem" : "0" }}
      >
        <div
          className="about-image-reveal"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "4px",
          }}
        />
        <Box
          className="about-text-reveal"
          position={"absolute"}
          bottom={isMobile ? "-3dvh" : "-5dvh"}
          right={isMobile ? "0" : "-4dvw"}
          background={theme.colors.offWhite}
          padding={"2rem"}
          style={{
            borderRadius: "4px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        >
          <Text
            fontFamily={'"Bona Nova SC"'}
            fontWeight={"700"}
            color={theme.colors.mossGreenDark}
            fontSize={"3rem"}
            lineHeight={1}
            style={{ display: "block" }}
          >
            12+
          </Text>
          <Text
            fontFamily={'"Lato", sans-serif'}
            fontWeight={"700"}
            color={theme.colors.charcoal}
            fontSize={"0.8rem"}
            style={{ letterSpacing: "2px", textTransform: "uppercase" }}
          >
            Anos de Experiência
          </Text>
        </Box>
      </Box>

      <Box
        width={isMobile ? "100%" : "45dvw"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Text
          className="about-text-reveal"
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"700"}
          color={theme.colors.agedGold}
          fontSize={"0.9rem"}
          style={{
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          A Médica
        </Text>

        <Text
          className="about-text-reveal"
          fontFamily={"Bona Nova SC"}
          fontWeight={"700"}
          color={theme.colors.offWhite}
          fontSize={isMobile ? "10dvw" : "4.5dvw"}
          lineHeight={1}
          style={{ marginBottom: "2rem" }}
        >
          A Ciência a favor <br /> da sua Essência.
        </Text>

        <div
          className="about-line"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(244, 241, 234, 0.2)",
            marginBottom: "3rem",
          }}
        />

        <Text
          className="about-text-reveal"
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"300"}
          color={theme.colors.offWhite}
          fontSize={"1.15rem"}
          lineHeight={1.8}
          style={{ marginBottom: "1.5rem" }}
        >
          A minha trajectória é guiada pela procura incessante da perfeição
          anatómica aliada à subtileza. Acredito que a verdadeira beleza não
          reside na transformação radical, mas na restauração cuidadosa e no
          realce dos traços que tornam cada pessoa única.
        </Text>

        <Text
          className="about-text-reveal"
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"300"}
          color={theme.colors.offWhite}
          fontSize={"1.15rem"}
          lineHeight={1.8}
          style={{ marginBottom: "3rem" }}
        >
          Com especialização nas instituições mais prestigiadas do mundo, trago
          para o consultório os protocolos mais avançados, garantindo segurança
          absoluta e resultados que transcendem o tempo.
        </Text>

        <Box
          className="about-text-reveal"
          display={"flex"}
          width={"100%"}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={isMobile ? "flex-start" : "flex-end"}
          gap={isMobile ? "2rem" : "3rem"}
        >
          <Box>
            <Text
              fontFamily={'"Lato", sans-serif'}
              fontWeight={"700"}
              color={theme.colors.agedGold}
              fontSize={"0.85rem"}
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Credenciais
            </Text>
            <Text
              fontFamily={'"Lato", sans-serif'}
              fontWeight={"400"}
              color={theme.colors.offWhite}
              fontSize={"1rem"}
              style={{ display: "block" }}
            >
              CRM 123456-SP <br /> RQE 78901
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily={'"Lato", sans-serif'}
              fontWeight={"700"}
              color={theme.colors.agedGold}
              fontSize={"0.85rem"}
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Formação
            </Text>
            <Text
              fontFamily={'"Lato", sans-serif'}
              fontWeight={"400"}
              color={theme.colors.offWhite}
              fontSize={"1rem"}
              style={{ display: "block" }}
            >
              Fellowship em estética
              <br />
              avançada por Harvard.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
