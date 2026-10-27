import PreviewBanner from "@/components/PreviewBanner";
import Hero from "@/components/Hero";
import LocationBadge from "@/components/LocationBadge";
import PackagesGrid from "@/components/PackagesGrid";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PreviewBanner />
      <Hero />
      <LocationBadge />
      <PackagesGrid />
      <Gallery />
      <Footer />
    </main>
  );
}
