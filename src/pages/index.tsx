import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ReelSection from '@/components/reel-section';

// import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
// import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
// import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import PricingTable from '@/components/pricing-table';
// import ListSection from '@/components/list-section';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Peace, on blockchain" description="World peace as a service, on blockchain" />
      <Header />

      <SocialProof />
      <VideoSection />
      <FeatureSection />
      <PricingTable />
      <ReelSection />
      <Footer />
    </Page>
  );
}
