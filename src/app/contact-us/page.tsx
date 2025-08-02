import ContactForm from '@/components/contact/form';
import { Metadata } from 'next';
// import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ติดต่อเรา',
  description: 'ติดต่อทีมงานของเราเพื่อสอบถาม ขอความช่วยเหลือ หรือให้ข้อเสนอแนะ'
}

const Contact: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'ติดต่อเรา',
    description: 'ติดต่อทีมงานของเราเพื่อสอบถาม ขอความช่วยเหลือ หรือให้ข้อเสนอแนะ',
    url: `https://${process.env.NEXT_PUBLIC_URL}/contact`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+099-236-4256',
        contactType: 'customer service',
        email: 'contact@choles-x-thailand.com',
        areaServed: 'TH',
        availableLanguage: ['Thai']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3 ซอยเอกชัย 125 แขวงบางบอนใต้ เขตบางบอน',
      addressLocality: 'กรุงเทพมหานคร',
      postalCode: '10150',
      addressCountry: 'TH'
    }
  }

  return (
    <>
      <main className="container flex items-center justify-center pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Image src="/powerberry-logo.svg" alt="" width={100} height={100} className='apple'/>
        <div className="w-full space-y-8 mt-12">
          <div>
            <h1 className="text-center text-5xl font-extrabold text-[#125144]">
              ติดต่อเรา
            </h1>

          <div className="mt-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#247464] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-[#247464]">ที่อยู่</p>
                  <p className="text-[#247464]">3 ถนนเอกชัยซอย 125 แขวงบางบอนใต้ เขตบางบอน</p>
                  <p className="text-[#247464]">กรุงเทพมหานคร 10150</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#247464] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-[#247464]">อีเมล</p>
                  <a href="mailto:contact@choles-x-thailand.com" className="text-blue-600 hover:underline">
                    contact@choles-x-thailand.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#247464] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium text-[#247464]">โทรศัพท์</p>
                  <a href="tel:+66992364256" className="text-blue-600 hover:underline">
                    099-236-4256
                  </a>
                </div>
              </div>
            </div>
          </div>


          </div>

          <div className="py-2 border-gray-300 border-t"></div>

          <p className="mt-2 text-sm text-[#4B724D]">
            เรายินดีรับฟังจากคุณ! กรอกแบบฟอร์มด้านล่างเพื่อติดต่อเรา
          </p>

          <ContactForm />

        </div>
      </main>
    </>
  );
};

export default Contact;