"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const theme: SiteTheme = { styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/design-a-simple-high-contrast-logo-for-p-1760693333025-d42b9d54.jpg"
          buttonText="Order Now"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How To Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to Pizzeria Roma"
          subtitle="Fresh Handmade Pizza"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>

      <div id="about" data-section="about">
        <CtaAbout
          title="About Pizzeria Roma"
          descriptions={["We serve the best pizzas in town.", "Enjoy dine-in and takeout options.", "A warm, family-friendly restaurant experience."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Our tokenomics ensures fair and equitable distribution of our resources."
          kpiItems={[
            { value: "1M", description: "Total Pizzas Sold", longDescription: "This reflects our sales in the last year.", icon: Globe },
            { value: "500K", description: "Happy Customers", longDescription: "We've served a large number of customers this year.", icon: Globe },
            { value: "10K", description: "Tokens Distributed", longDescription: "A fair share for all our loyal customers.", icon: Globe }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/design-a-simple-high-contrast-logo-for-p-1760693333025-d42b9d54.jpg"
          logoText="Pizzeria Roma"
          items={[
            { label: "Privacy Policy", onClick: () => console.log('Privacy Policy Clicked') },
            { label: "Terms of Service", onClick: () => console.log('Terms of Service Clicked') },
            { label: "Contact Us", onClick: () => console.log('Contact Us Clicked') },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
