import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header></Header>
      <main>
        <SubscriptionForm></SubscriptionForm>
        <FeaturedSection></FeaturedSection>
        <Testimonials></Testimonials>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
