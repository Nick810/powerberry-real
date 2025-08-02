import Link from "next/link"

type LinkProps = {
  path: string
  subPath: string | undefined 
}

const Breadcrumb: React.FC<LinkProps> = ({ path, subPath = '' }) => {
  return (
    <nav className="my-4 container">
      <ul className="flex flex-row items-start gap-3 text-sm">
        <li>
          <Link href="/" className="underline">home</Link>
        </li>
        <li>
          <span className="lazy-d text-xl rotate-10 block">{`>`}</span>
        </li>
        {
          !subPath ?
          <li>{ path }</li>
          :
          <>
            <li>
              <Link href={`/collections/${path}`} className="underline">{ path } </Link>
            </li>
            <li>
              <span className="lazy-d text-xl rotate-[350deg] block">{`>`}</span>
            </li>
            <li>
              { subPath.toLowerCase() }
            </li>
          </>
        }
      </ul>
    </nav>
  )
}
export default Breadcrumb