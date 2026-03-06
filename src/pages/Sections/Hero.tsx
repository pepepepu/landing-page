import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box, Text } from "../../components";
import { theme } from "../../styles/Theme/theme";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".image-wrapper",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          scale: 1.1,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1.6,
          ease: "power4.inOut",
        },
      )
        .fromTo(
          ".title-line",
          { y: "110%", rotation: 2 },
          {
            y: "0%",
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=1.0",
        )
        .fromTo(
          ".fade-element",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.15 },
          "-=0.8",
        )
        .fromTo(
          ".floating-card",
          {
            opacity: 0,
            x: isMobile ? 0 : -30,
            y: isMobile ? 20 : 0,
            backdropFilter: "blur(0px)",
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            backdropFilter: "blur(12px)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  const handleMouseEnterButton = () => {
    if (isMobile) return;
    gsap.to(arrowRef.current, { x: 5, duration: 0.3, ease: "power2.out" });
    gsap.to(lineRef.current, {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out",
      transformOrigin: "left center",
    });
  };

  const handleMouseLeaveButton = () => {
    if (isMobile) return;
    gsap.to(arrowRef.current, { x: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(lineRef.current, {
      scaleX: 0.3,
      duration: 0.3,
      ease: "power2.in",
      transformOrigin: "left center",
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100dvh",
        position: "relative",
        backgroundColor: theme.colors.offWhite,
        overflow: "hidden",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: isMobile ? "flex-start" : "space-between",
        padding: isMobile ? "12dvh 6dvw 8dvh 6dvw" : "0 8dvw",
        boxSizing: "border-box",
      }}
    >
      <Box
        position={"absolute"}
        top={isMobile ? "4dvh" : "5dvh"}
        left={isMobile ? "6dvw" : "8dvw"}
        zIndex={10}
        className="fade-element"
      >
        <Text
          fontFamily={'"Lato", sans-serif'}
          fontWeight={"700"}
          color={theme.colors.charcoal}
          fontSize={"0.85rem"}
          style={{ letterSpacing: "4px", textTransform: "uppercase" }}
        >
          Dra. Camila Albuquerque
        </Text>
      </Box>

      {!isMobile && (
        <Box
          position={"absolute"}
          top={"5dvh"}
          right={"8dvw"}
          zIndex={10}
          className="fade-element"
        >
          <Text
            fontFamily={'"Lato", sans-serif'}
            fontWeight={"400"}
            color={theme.colors.charcoal}
            fontSize={"0.85rem"}
            style={{ letterSpacing: "2px" }}
          >
            CRM 123456-SP | RQE 78901
          </Text>
        </Box>
      )}

      <Box
        width={isMobile ? "100%" : "45dvw"}
        position={"relative"}
        zIndex={10}
        style={{
          marginTop: isMobile ? "0dvh" : "10dvh",
          marginBottom: isMobile ? "3rem" : "0",
        }}
      >
        <Box style={{ marginBottom: isMobile ? "1.5rem" : "2rem" }}>
          <div
            style={{
              overflow: "hidden",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            <Text
              className="title-line"
              fontFamily={"Bona Nova SC"}
              fontWeight={"700"}
              color={theme.colors.mossGreenDark}
              fontSize={isMobile ? "10dvw" : "7dvw"}
              lineHeight={0.9}
              style={{ display: "block", textTransform: "uppercase" }}
            >
              Refinamento
            </Text>
          </div>
          <br />
          <div
            style={{
              overflow: "hidden",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            <Text
              className="title-line"
              fontFamily={"Bona Nova SC"}
              fontWeight={"700"}
              color={theme.colors.mossGreenDark}
              fontSize={isMobile ? "10dvw" : "7dvw"}
              lineHeight={0.9}
              style={{
                display: "block",
                textTransform: "uppercase",
                marginLeft: isMobile ? "0" : "4dvw",
              }}
            >
              Estético
            </Text>
          </div>
          <br />
          <div
            style={{
              overflow: "hidden",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            <Text
              className="title-line"
              fontFamily={"Bona Nova SC"}
              fontWeight={"700"}
              color={theme.colors.agedGold}
              fontSize={isMobile ? "10dvw" : "7dvw"}
              lineHeight={0.9}
              style={{ display: "block", textTransform: "uppercase" }}
            >
              Absoluto.
            </Text>
          </div>
        </Box>

        <Box
          className="fade-element"
          width={isMobile ? "100%" : "30dvw"}
          style={{ marginLeft: isMobile ? "0" : "4dvw" }}
        >
          <Text
            fontFamily={'"Lato", sans-serif'}
            fontWeight={"300"}
            color={theme.colors.charcoal}
            fontSize={isMobile ? "1rem" : "1.15rem"}
            lineHeight={1.7}
          >
            A união perfeita entre a vanguarda da medicina dermatológica e a
            valorização sutil da sua identidade visual. Uma experiência
            projetada para resultados extraordinariamente naturais.
          </Text>

          <Box
            style={{
              marginTop: isMobile ? "2rem" : "3rem",
              cursor: "pointer",
              display: "inline-block",
            }}
            onMouseEnter={handleMouseEnterButton}
            onMouseLeave={handleMouseLeaveButton}
          >
            <Box display={"flex"} alignItems={"center"} gap={"15px"}>
              <Text
                fontFamily={'"Lato", sans-serif'}
                fontWeight={"700"}
                color={theme.colors.mossGreenDark}
                fontSize={"1rem"}
                style={{ letterSpacing: "2px", textTransform: "uppercase" }}
              >
                Inicie sua Jornada
              </Text>
              <span
                ref={arrowRef}
                style={{
                  color: theme.colors.mossGreenDark,
                  fontSize: "1.5rem",
                  display: "inline-block",
                  lineHeight: 1,
                }}
              >
                ⟶
              </span>
            </Box>
            <div
              ref={lineRef}
              style={{
                height: "2px",
                width: "100%",
                backgroundColor: theme.colors.agedGold,
                marginTop: "8px",
                transform: "scaleX(0.3)",
                transformOrigin: "left center",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        width={isMobile ? "100%" : "35dvw"}
        height={isMobile ? "45dvh" : "75dvh"}
        position={"relative"}
      >
        <div
          className="image-wrapper"
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "transform",
            }}
          />
        </div>

        <Box
          className="floating-card"
          position={"absolute"}
          bottom={isMobile ? "-20px" : "10dvh"}
          left={isMobile ? "20px" : "-8dvw"}
          right={isMobile ? "20px" : "auto"}
          zIndex={20}
          padding={"1.5rem 2rem"}
          style={{
            backgroundColor: "rgba(244, 241, 234, 0.9)",
            border: `1px solid rgba(120, 114, 82, 0.2)`,
            borderRadius: "4px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <Text
            fontFamily={'"Bona Nova SC"'}
            fontWeight={"700"}
            color={theme.colors.mossGreenDark}
            fontSize={"2rem"}
            lineHeight={1}
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            +5.000
          </Text>
          <Text
            fontFamily={'"Lato", sans-serif'}
            fontWeight={"400"}
            color={theme.colors.charcoal}
            fontSize={"0.85rem"}
            lineHeight={1.4}
            style={{ display: "block", maxWidth: isMobile ? "100%" : "180px" }}
          >
            Procedimentos realizados com extrema precisão e segurança.
          </Text>
        </Box>
      </Box>
    </div>
  );
}
