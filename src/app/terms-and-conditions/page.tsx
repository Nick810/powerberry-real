import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'ข้อกำหนดและเงื่อนไข',
  description: 'ข้อกำหนดและเงื่อนไขของ Choles-X"',
};

const TermsAndConditions: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-24 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
            Welcome to Powerberry! These Terms govern your use of our services powered by Shopify. By interacting with our store, you agree to these Terms and our Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Access and Account</h2>
          <p>
            You must be of legal age to use the Services and agree to provide accurate information. You’re responsible for safeguarding your account credentials.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Products and Orders</h2>
          <p>
            Product visuals may differ from actual items. We reserve the right to accept or decline any orders. All purchases are governed by our Refund Policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Prices and Billing</h2>
          <p>
            Prices are subject to change without notice. You agree to provide accurate payment details and are responsible for applicable fees and taxes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Shipping and Delivery</h2>
          <p>
            Delivery estimates are not guaranteed. Risk transfers to you once products leave our facility.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            All content is owned by Powerberry or its licensors. Unauthorized use of our materials is prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Third-Party Tools and Links</h2>
          <p>
            Optional tools and external links are provided as-is. We’re not responsible for third-party content or your interactions with it.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Shopify Relationship</h2>
          <p>
            Powerberry operates independently from Shopify, though Shopify powers the platform. Shopify is not responsible for any transactions or issues.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
          <p>
            Submitted feedback may be used without compensation and must not violate any laws or third-party rights.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Legal Terms</h2>
          <p>
            Use of the Services must be lawful. Any violation may result in termination of your account. We disclaim all warranties and limit our liability as allowed by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Questions? Email us at <a href="mailto:c6k.n1ck@gmail.com" className="text-blue-600 underline">c6k.n1ck@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;