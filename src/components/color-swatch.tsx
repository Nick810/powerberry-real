interface Props {
  color: string
  selected: boolean
  bgColor: string
}

const ColorSwatch: React.FC<Props> = ({ color, selected, bgColor }) => {
  return (
    <div className="relative w-10 h-10">
      <div 
        className={`absolute top-[5px] right-[-7px] ${color} w-1 h-1 rounded-full border border-[#333]`}
        style={{ backgroundColor: bgColor }}></div>
      <div 
        className={`absolute top-[-10px] right-0 ${color} w-2.5 h-2.5 rounded-full border border-[#333]`}
        style={{ backgroundColor: bgColor }}></div>
      <div 
        className={`${color} w-10 h-10 rounded-full border-[#333] border ${selected ? 'border-2' : 'border'}`}
        style={{ backgroundColor: bgColor }}></div>
    </div>
  )
}
export default ColorSwatch