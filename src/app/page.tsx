"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of white t-shirts hanging neatly on black hangers in a minimalist indoor closet setting." },
  { "id": "product-shirt1", "url": "https://images.pexels.com/photos/34277460/pexels-photo-34277460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Elderly man running a marathon in a colorful shirt on a city road." },
  { "id": "product-shirt2", "url": "https://images.pexels.com/photos/5711232/pexels-photo-5711232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A joyful couple sharing a breakfast meal with pancakes, coffee, and smiles in their modern kitchen." },
  { "id": "product-shirt3", "url": "https://images.pexels.com/photos/34292168/pexels-photo-34292168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Girl with Long Hair Lying in the Grass, Hong Kong" },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/6787008/pexels-photo-6787008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two models showcasing white t-shirts on a pink background, front and back views." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/brand/apple-tshirt-logo.svg"
          brandName="Apple T-Shirts"
          navItems={[{
            name: "Home",
            id: "hero"
          }, {
            name: "Products",
            id: "product"
          }, {
            name: "Contact",
            id: "contact"
          }]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Discover Quality T-Shirts"
            description="Explore our unique collection of Apple-themed t-shirts designed for quality and comfort."
            imageSrc="https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{
              text: "Shop Now",
              href: "product"
            }, {
              text: "Learn More",
              href: "about"
            }]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[{
              id: "1",
              name: "Red Apple Tee",
              price: "$25",
              imageSrc: "https://images.pexels.com/photos/34277460/pexels-photo-34277460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }, {
              id: "2",
              name: "Blue Apple Tee",
              price: "$25",
              imageSrc: "https://images.pexels.com/photos/5711232/pexels-photo-5711232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }, {
              id: "3",
              name: "Green Apple Tee",
              price: "$25",
              imageSrc: "https://images.pexels.com/photos/34292168/pexels-photo-34292168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }]}
            title="Featured Products"
            className="bg-blue-50"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay in Touch"
            title="Join our newsletter"
            description="Get the latest updates and exclusive deals on our Apple t-shirts."
            imageSrc="https://images.pexels.com/photos/6787008/pexels-photo-6787008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            onSubmit={(email) => console.log(email)}
            className="bg-blue-50"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[{
              title: "Shop",
              items: [{ label: "Men", href: "men" }, { label: "Women", href: "women" }]
            }, {
              title: "Company",
              items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }]
            }]}
            logoSrc="/brand/apple-tshirt-logo.svg"
            copyrightText="© 2025 Apple T-Shirts"
            className="bg-blue-50"
            logoClassName="text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
