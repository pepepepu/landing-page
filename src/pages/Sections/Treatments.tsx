import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Text } from "../../components";
import { theme } from "../../styles/Theme/theme";

gsap.registerPlugin(ScrollTrigger);

const treatmentsData = [
  {
    title: "Harmonização Facial",
    description:
      "Equilíbrio e proporção respeitando a arquitetura única do seu rosto, para um contorno naturalmente elegante.",
    imgUrl:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Bioestimuladores",
    description:
      "Protocolos avançados para firmeza, elasticidade e poupança de colágeno a longo prazo.",
    imgUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Tecnologias a Laser",
    description:
      "Lasers de última geração para uma textura de pele impecável, tratando manchas, poros e flacidez.",
    imgUrl:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Preenchimento Labial",
    description:
      "Contorno, hidratação profunda e volume sob medida, com extrema sutileza e sofisticação.",
    imgUrl:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Treatments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
        ".treatments-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".treatment-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );

      if (imagesWrapperRef.current && !isMobile) {
        gsap.fromTo(
          imagesWrapperRef.current,
          { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex && isMobile ? -1 : index);
  };

  return (
    <Box
      ref={sectionRef}
      id={"treatments"}
      minHeight={"100dvh"}
      width={"100%"}
      background={theme.colors.charcoal}
      padding={isMobile ? "10dvh 6dvw" : "15dvh 8dvw"}
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={isMobile ? "column" : "row"}
      justifyContent={"space-between"}
      alignItems={"stretch"}
    >
      <Box
        width={isMobile ? "100%" : "45%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Text
          className="treatments-header"
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
          Nossa Especialidade
        </Text>

        <Text
          className="treatments-header"
          fontFamily={'"Bona Nova SC"'}
          fontWeight={"700"}
          color={theme.colors.offWhite}
          fontSize={isMobile ? "12dvw" : "4.5dvw"}
          lineHeight={1}
        >
          Protocolos de
          <br />
          Excelência.
        </Text>

        <Box width={"100%"}>
          {treatmentsData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <Box
                key={index}
                className="treatment-item"
                onClick={() => toggleAccordion(index)}
                style={{
                  borderBottom: `1px solid rgba(244, 241, 234, 0.15)`,
                  padding: "2rem 0",
                  cursor: "pointer",
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text
                    fontFamily={'"Bona Nova SC"'}
                    fontWeight={"400"}
                    color={
                      isActive ? theme.colors.agedGold : theme.colors.offWhite
                    }
                    fontSize={isMobile ? "1.8rem" : "2.2rem"}
                    style={{ transition: "color 0.4s ease" }}
                  >
                    {item.title}
                  </Text>
                  <Box
                    style={{
                      transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.4s ease",
                      color: isActive
                        ? theme.colors.agedGold
                        : theme.colors.offWhite,
                      fontSize: "2rem",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </Box>
                </Box>

                <Box
                  style={{
                    height: isActive ? "auto" : 0,
                    overflow: "hidden",
                    opacity: isActive ? 1 : 0,
                    transition: "all 0.4s ease-in-out",
                    marginTop: isActive ? ".5rem" : 0,
                  }}
                >
                  <Text
                    fontFamily={'"Lato", sans-serif'}
                    fontWeight={"300"}
                    color={theme.colors.offWhite}
                    fontSize={"1.1rem"}
                    lineHeight={1.6}
                    style={{ opacity: 0.8 }}
                  >
                    {item.description}
                  </Text>

                  {isMobile && (
                    <Box
                      style={{
                        width: "100%",
                        height: "250px",
                        marginTop: "2rem",
                        backgroundImage: `url(${item.imgUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "4px",
                      }}
                    />
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {!isMobile && (
        <Box
          width={"45%"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box
            ref={imagesWrapperRef}
            width={"100%"}
            height={"75dvh"}
            position={"relative"}
            style={{ borderRadius: "4px", overflow: "hidden" }}
          >
            {treatmentsData.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${item.imgUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? "scale(1)" : "scale(1.05)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
