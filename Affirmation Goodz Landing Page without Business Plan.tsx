
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Logo = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32">
    <circle cx="100" cy="100" r="95" fill="#3B82F6" />
    <text x="100" y="90" textAnchor="middle" fill="white" fontSize="60" fontWeight="bold">AG</text>
    <text x="100" y="130" textAnchor="middle" fill="white" fontSize="20">AFFIRMATION</text>
    <text x="100" y="155" textAnchor="middle" fill="white" fontSize="20">GOODZ</text>
    <path d="M60 170 Q 100 190 140 170" fill="none" stroke="white" strokeWidth="5" />
  </svg>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-teal-100 p-8">
      <header className="flex items-center justify-between mb-12">
        <Logo />
        <h1 className="text-4xl font-bold text-teal-600">Affirmation Goodz</h1>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-teal-700">Supporting mental health, one meaningful item at a time</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our e-commerce shop is dedicated to raising awareness and empowering those in the mental health and social work communities. We create affirming, uplifting products like t-shirts, tote bags, and artwork designed to inspire, spark conversations, and break the stigma around mental health.
          </p>
          <p className="text-lg text-gray-700">
            Our items honor therapists, social workers, the faith-based community, and advocates, serving as reminders of the powerful, positive impact they make every day. Join us in spreading compassion, resilience, and understanding—one product, one message at a time.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold text-teal-600">Mission Statement</h3>
            </CardHeader>
            <CardContent>
              <p>Affirmation Goodz is committed to promoting mental health awareness and support through meaningful, inspiring products that empower individuals and communities to embrace compassion, resilience, and understanding.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold text-teal-600">Vision Statement</h3>
            </CardHeader>
            <CardContent>
              <p>We envision a world where mental health is prioritized, stigma is eliminated, and every individual feels supported and empowered to seek help and share their experiences openly.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2024 Affirmation Goodz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
