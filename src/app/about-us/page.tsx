import About from '@/components/about-us/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เกี่ยวกับ Choles-X',
  description: 'เรียนรู้เกี่ยวกับ Choles-X อาหารเสริมเพื่อสุขภาพหัวใจ รับรองโดย อย. และ Halal ด้วยส่วนผสมจากธรรมชาติ 100%'
}

const Page = () => {
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "WebSite",
  //   "url": "https://www.example.com/",
  //   "potentialAction": {
  //     "@type": "SearchAction",
  //     "target": {
  //       "@type": "EntryPoint",
  //       "urlTemplate": `https://query.example.com/search?query={search_term_string}`
  //     },
  //     "query-input": "required name=search_term_string"
  //   }
  // }

  return (
    <main className="">
      <About />
    </main>
  )
}
export default Page