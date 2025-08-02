import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว',
  description: 'นโยบายความเป็นส่วนตัวของ Choles-X',
};


const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-24 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <section className="space-y-6">
        <p>
          Powerberry operates this store and website to provide you with a curated shopping experience. This Privacy Policy describes how we collect, use, and disclose your personal information when you use our services.
        </p>

        <h2 className="text-2xl font-semibold">Personal Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Contact details like name, address, phone number, and email</li>
          <li>Financial information including payment methods and transaction details</li>
          <li>Account details and preferences</li>
          <li>Device and usage data</li>
          <li>Communication history</li>
        </ul>

        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>To provide and improve the Services</li>
          <li>For marketing and promotional communication</li>
          <li>To prevent fraud and ensure security</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold">Disclosure of Information</h2>
        <p>
          Your personal information may be disclosed to Shopify, third-party service providers, marketing partners, and legal authorities when required.
        </p>

        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <ul className="list-disc list-inside">
          <li>Access and know what data we hold</li>
          <li>Request deletion or correction</li>
          <li>Receive a copy or transfer your data</li>
          <li>Manage marketing preferences</li>
        </ul>

        <p>
          For more details on how Shopify processes your data, visit: <a href="https://privacy.shopify.com/en" className="text-blue-600 underline">Shopify Privacy Portal</a>
        </p>

        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>
          For privacy inquiries, email: <a href="mailto:c6k.n1ck@gmail.com" className="text-blue-600 underline">c6k.n1ck@gmail.com</a><br />
          Address: 3 Ekkachai 125 Alley, TH-10, 10150, TH
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;