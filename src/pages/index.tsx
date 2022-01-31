import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Peace, on blockchain" description="World peace as a service, on blockchain" />
      <Header />
      <main>
        <SocialProof />
        {/* <CasesSection /> */}
        {/* <ListSection /> */}
        <VideoSection />
        <FeatureSection />
        {/* <PricingTable /> */}
      </main>
      {/* <Footer /> */}
    </Page>
  );
}
