import Image from "next/image";
import Link from "next/link";

type MobileNavProps = {
  toggled: boolean;
  toggle: (open: boolean) => void;
};

const MobileNav: React.FC<MobileNavProps> = ({toggled, toggle}) => {
  return (
    <nav className={`${toggled ? 'fixed' : 'hidden'} w-[75%] max-w-[410px] h-[400px] top-0 right-0 overflow-hidden z-20`}>
      <div className="bg-[#F39C12] w-[800px] h-[800px] absolute left-0 top-0 rounded-full -translate-y-[50%] translate-x-3 z-[21]"></div>
      <div className="bg-[#B9832E] w-[800px] h-[800px] absolute left-0 top-0 rounded-full -translate-y-[50%] z-10"></div>
      <div className="z-30 absolute top-0 right-0 pr-[5%]">
        <div className="flex flex-row items-center justify-end pt-6 pb-3">
          <button onClick={() => toggle(false)} className="cursor-pointer">
            <Image src="/close.svg" alt="Close Button" width={48} height={48} />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 pr-4">
          <li><Link prefetch href="/" className="text-[4vw] md:text-xl uppercase text-white!" onClick={() => toggle(false)}>Home</Link></li>
          <li><Link prefetch href="/all-products" className="text-[4vw] md:text-xl uppercase text-white!" onClick={() => toggle(false)}>Shop</Link></li>
          <li><Link prefetch href="/" className="text-[4vw] md:text-xl uppercase text-white!" onClick={() => toggle(false)}>News</Link></li>
          <li><Link prefetch href="/about-us" className="text-[4vw] md:text-xl uppercase text-white!" onClick={() => toggle(false)}>About</Link></li>
          <li><Link prefetch href="/blog" className="text-[4vw] md:text-xl uppercase text-white!" onClick={() => toggle(false)}>Blog</Link></li>
          <li><Link prefetch href="/contact-us" className="text-[4vw] md:text-xl uppercase text-white!" onClick={() => toggle(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default MobileNav