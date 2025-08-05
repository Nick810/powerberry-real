import Image from "next/image";
import Link from "next/link";

type MobileNavProps = {
  toggled: boolean;
  toggle: (open: boolean) => void;
};

const MobileNav: React.FC<MobileNavProps> = ({toggled, toggle}) => {
  return (
    <nav className={`${toggled ? 'fixed' : 'hidden'} w-[50%] max-w-[410px] h-[400px] top-0 right-0 overflow-hidden z-20 border-l-2 border-b-2 border-[#333]`}>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md -z-10"></div>
      {/* <div className="bg-[#F39C12] w-[800px] h-[800px] absolute left-0 top-0 rounded-full -translate-y-[50%] translate-x-3 z-[21]"></div>
      <div className="bg-[#B9832E] w-[800px] h-[800px] absolute left-0 top-0 rounded-full -translate-y-[50%] z-10"></div> */}
      <div className="z-30 absolute top-0 left-0 pr-[5%] w-full">
        <div className="flex flex-row items-center justify-end pt-3 pb-3">
          <button onClick={() => toggle(false)} className="cursor-pointer">
            <Image src="/close.svg" alt="Close Button" width={48} height={48} />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 px-6">
          <li><Link prefetch href="/" className="text-md! uppercase text-black!" onClick={() => toggle(false)}>Home</Link></li>
          <li><Link prefetch href="/collections/all-products" className="text-md! uppercase text-black!" onClick={() => toggle(false)}>Shop</Link></li>
          <li><Link prefetch href="/" className="text-md! uppercase text-black!" onClick={() => toggle(false)}>News</Link></li>
          <li><Link prefetch href="/about-us" className="text-md! uppercase text-black!" onClick={() => toggle(false)}>About</Link></li>
          <li><Link prefetch href="/blog" className="text-md! uppercase text-black!" onClick={() => toggle(false)}>Blog</Link></li>
          <li><Link prefetch href="/contact-us" className="text-md! uppercase text-black!" onClick={() => toggle(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default MobileNav