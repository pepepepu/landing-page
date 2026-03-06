import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Text } from "../../components";
import { theme } from "../../styles/Theme/theme";

gsap.registerPlugin(ScrollTrigger);

const clinicImages = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop", // Recepção Minimalista e Elegante
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop", // Detalhe de Arquitetura Sensorial e Texturas Naturais
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop", // Sala de Atendimento com Alta Tecnologia e Conforto
];

export function Clinic() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
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
        ".clinic-text-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );

      const images = gsap.utils.toArray(".clinic-image");
      images.forEach((img: any) => {
        gsap.fromTo(
          img,
          { clipPath: "inset(20% 0% 20% 0%)", scale: 1.1 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          },
        );
      });

      if (!isMobile && textContainerRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: textContainerRef.current,
          pinSpacing: false,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <Box
      ref={sectionRef}
      id={"clinic"}
      width={"100%"}
      background={theme.colors.offWhite}
      padding={isMobile ? "10dvh 6dvw" : "15dvh 8dvw"}
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={isMobile ? "column" : "row"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      position={"relative"}
    >
      <Box
        ref={textContainerRef}
        width={isMobile ? "100%" : "40%"}
        height={isMobile ? "auto" : "70dvh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        style={{
          position: isMobile ? "relative" : "absolute",
          top: isMobile ? "auto" : "15dvh",
          marginBottom: isMobile ? "4rem" : "0",
        }}
      >
        <Text
          className="clinic-text-reveal"
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"700"}
          color={theme.colors.agedGold}
          fontSize={"0.85rem"}
          style={{
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          A Clínica
        </Text>

        <Text
          className="clinic-text-reveal"
          fontFamily={'"Bona Nova SC"'}
          fontWeight={"700"}
          color={theme.colors.mossGreenDark}
          fontSize={isMobile ? "12dvw" : "4.5dvw"}
          lineHeight={0.9}
          style={{ marginBottom: "2rem" }}
        >
          Um Refúgio <br /> de Bem-Estar.
        </Text>

        <Text
          className="clinic-text-reveal"
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"300"}
          color={theme.colors.charcoal}
          fontSize={"1.15rem"}
          lineHeight={1.7}
          style={{ marginBottom: "2rem", maxWidth: "400px" }}
        >
          Cada detalhe do nosso espaço foi rigorosamente pensado para
          proporcionar uma experiência de conforto absoluto, discrição e
          exclusividade.
        </Text>

        <Text
          className="clinic-text-reveal"
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"300"}
          color={theme.colors.charcoal}
          fontSize={"1.15rem"}
          lineHeight={1.7}
          style={{ maxWidth: "400px" }}
        >
          Aliamos uma arquitetura sensorial à tecnologia médica mais avançada do
          mercado, criando o ambiente perfeito para a sua jornada estética.
        </Text>
      </Box>

      <Box
        width={isMobile ? "100%" : "50%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"10dvh"}
        style={{ marginLeft: isMobile ? "0" : "50%" }}
      >
        {clinicImages.map((src, index) => (
          <Box
            key={index}
            width={"100%"}
            height={isMobile ? "50dvh" : "80dvh"}
            style={{ overflow: "hidden", borderRadius: "4px" }}
          >
            <div
              className="clinic-image"
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformOrigin: "center center",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
