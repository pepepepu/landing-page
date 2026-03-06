import { Box } from "../../components";
import { theme } from "../../styles/Theme/theme";
import { About } from "../Sections/About";
import { Clinic } from "../Sections/Clinic";
import { Contact } from "../Sections/Contact";
import { Hero } from "../Sections/Hero";
import { Treatments } from "../Sections/Treatments";

function Home() {
  return (
    <Box width={"100%"} background={theme.colors.offWhite}>
      <Hero />
      <About />
      <Treatments />
      <Clinic />
      <Contact />
    </Box>
  );
}

export default Home;
