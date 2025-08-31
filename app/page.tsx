import Footer from '@/components/Footer';
import GuideSection from '@/components/GuideSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PaymentInfo from '@/components/PaymentInfo';
import Testimonils from '@/components/Testimonils';
import React from 'react';
import SearComponent from '@/components/SearComponent';
import ShopCard from '@/components/customers/ShopCard';
import shops from '@/dummyshops.json';
import BackGroundHero from '@/components/BackGroundHero';

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-primary-1 text-white">
      <div className="flex flex-col gap-2">
        <div>
          <Navbar />
        </div>
        <section>
          <BackGroundHero>
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-5xl font-bold mb-4">Find Your Next Shear</h1>
              <p className="text-xl mb-8">
                Book appointments with the best barbers in your city.
              </p>
              <div className="w-full max-w-md">
                <SearComponent />
              </div>
            </div>
          </BackGroundHero>
        </section>
        <section id="shops" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Featured Shops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shops.map((shop) => (
                <ShopCard
                  key={shop.admin_id}
                  shopId={shop.admin_id}
                  shopName={shop.shop_name}
                  shopImage={shop.shop_image_url}
                  shopPhone={shop.shop_phone}
                  shopAdress={shop.shop_address}
                  adminId={shop.admin_id}
                  shopDescription={shop.shop_description}
                  shopEmail={shop.shop_email}
                  isOpened={shop.opened}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="about">
          <GuideSection />
          <div className="mt-10 items-center">
            <PaymentInfo />
          </div>
        </section>
      </div>
      <div>
        <Testimonils />
      </div>
      <Footer />
    </main>
  );
};

export default Page;