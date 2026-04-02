import Faq from '@/components/sections/faq';
import FeaturesAccordion from '@/components/sections/features-accordion';
import FeaturesGrid from '@/components/sections/features-grid';
import FeaturesSlider from '@/components/sections/features-slider';
import FeatureLarge from '@/components/sections/feature-large';
import FeaturesList from '@/components/sections/features-list';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import PricingPlans from '@/components/sections/pricing-plans-stripe';
import Process from '@/components/sections/process';
import Reviews from '@/components/sections/reviews';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import Video from '@/components/sections/video';

export default function Page() {
	return (
		<>
			<Hero />
			<Partners />
			<FeaturesGrid />
			<Video />
			<FeaturesSlider />
			<FeatureLarge />
			<FeaturesAccordion />
			<Process />
			<Reviews />
			<FeaturesList />
			<Testimonials />
			<Stats />
			<PricingPlans />
			<Faq />
		</>
	);
}
