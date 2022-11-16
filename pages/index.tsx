import Head from "../components/Head";
import HomeClients from "../sections/HomeClients/HomeClients";
import HomeClientTestimonials from "../sections/HomeClientTestimonials/HomeClientTestimonials";
import HomeDesc from "../sections/HomeDesc/HomeDesc";
import HomeIntro from "../sections/HomeIntro/HomeIntro";
import HomeServices from "../sections/HomeServices/HomeServices";
import HomeTechnicalBenefits from "../sections/HomeTechnicalBenefits/HomeTechnicalBenefits";
import Layout from "../components/Layout";

export default function Home() {

  return (
    <>
        <Head title="Allume Consulting"/>
          <Layout>
            <main id="main" className="relative">
              <HomeIntro />
              <HomeDesc />
              <HomeClients />
              <HomeServices />
              <HomeClientTestimonials />
              <HomeTechnicalBenefits />
            </main>
          </Layout>
    </>
  );
}
