interface ProductDrawerProps {
  data: {
    title: string
    details: string | undefined
    html?: boolean
  } 
}

const ProductDrawer: React.FC<ProductDrawerProps> = ({ data }) => {
  return (
    <div className="border-b-2 border-[#333] py-4 cursor-pointer">
      {
        data.html && data.details ?
        <div
          className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-[#333] prose-p-mb-16!"
          dangerouslySetInnerHTML={{ __html: data.details }}
        />
        :
        <>
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-2xl mb-4!">{ data.title}</h4>
          </div>
          <p className="block">{ data.details }</p>
        </>
      }
    </div>
  )
}
export default ProductDrawer