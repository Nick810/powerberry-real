// import localFont from "next/font/local";
import Image from "next/image"
import Link from "next/link"

// const headerFont = localFont({
//   src: '../fonts/ashford-bold-webfont.woff2',
//   weight: '700',
//   variable: '--font-header',
//   display: 'swap',
// });

const Footer = () => {
  return (
    <footer className="text-[#333] mt-24 pb-12">
      <div className="flex w-full container">
        <div className="w-4/5 flex flex-col gap-12">
          <ul className="flex flex-col items-start gap-4">
            <li><Link href="/" className="text-md uppercase">Home</Link></li>
            <li><Link href="/collections/all-products" className="text-md uppercase">Shop</Link></li>
            <li><Link href="/" className="text-md uppercase">News</Link></li>
            <li><Link href="/about-us" className="text-md uppercase">About</Link></li>
            <li><Link href="/blog" className="text-md uppercase">Blog</Link></li>
            <li><Link href="/contact-us" className="text-md uppercase">Contact</Link></li>
          </ul>
          <div>
            <p className="text-sm mb-4!">&copy; { new Date().getFullYear() } Powerberry </p>
            <ul className="flex flex-rcol text-xs gap-8">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms of Service</Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-end gap-4 w-1/5 pr-4">
          <Image src="/facebook.svg" alt="" width={32} height={32} />
          <Image src="/instagram.svg" alt="" width={32} height={32} />
        </div>
        <p className="text-xs">S<br />o<br />c<br />i<br />a<br />l<br />s</p>
      </div>
        {/* STILL NEED TO FIX SVG SIZE  */}
        {/* <div className="relative w-full mt-12">
          <h2 
            className={`${headerFont.variable} inset-x-0 text-[18.5vw] scale-y-125 text-[#333]!`}
            style={{ fontFamily: 'var(--font-header)'}}>
            POWERBERRY
          </h2>
        </div> */}
    </footer>
  )
}
export default Footer