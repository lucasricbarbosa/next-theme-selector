import { Header } from "@/components/header";
import { ThemeColorToggle } from "@/components/home/theme-selectors/theme-color-toggle";
import { ThemeSelectorContainer } from "@/components/home/theme-selectors/themeSelectorContainer";
import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="container max-w-5xl mx-auto px-5">{children}</div>;
}

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ThemeSelectorContainer />
        <ThemeColorToggle />
      </Container>
    </>
  );
};

export default Home;
