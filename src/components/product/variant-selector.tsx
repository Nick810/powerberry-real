import { useEffect, useState } from "react";
import ColorSwatch from "../color-swatch";

interface Variant {
  id: string;
  title: string; // "Black / S"
  availableForSale: boolean;
  priceV2: { amount: string };
}

interface Props {
  variants: Variant[]
  colorMap: Record<string, string>
  onSelect: (variant: Variant) => void;
}

const VariantSelector: React.FC<Props> = ({ variants, onSelect, colorMap }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const colors = [...new Set(variants.map(v => v.title.split(" / ")[0]))];
  const sizes = [...new Set(variants.map(v => v.title.split(" / ")[1]))]; 

  
  
  useEffect(() => {
    if (selectedColor && selectedSize) {
      const match = variants.find(v => v.title === `${selectedColor} / ${selectedSize}`);
      if (match) onSelect(match);
    }
  }, [selectedColor, selectedSize, variants, onSelect]);

  return (
    <div className="space-y-4 mt-6">
      {/* Color Selection */}
      <div>
        <h3 className="text-2xl mb-4!">Colors</h3>
        <div className="flex flex-wrap space-x-3">
          {colors.map((color, index) => {
            const bgColor = colorMap[color.toLowerCase()]; 
            
            return (
              <button
                key={`${color}-${index}`}
                onClick={() => setSelectedColor(color)}
                className={`cursor-pointer  ${
                  selectedColor === color ? '' : 'border-gray-300'
                }`}
              >
                <ColorSwatch bgColor={bgColor} color={color} selected={selectedColor === color}  />
              </button>
            )
          })}
        </div>
      </div>


      {/* Size Selection */}
      <div>
        <h3 className="text-2xl mb-2!">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size, index) => (
            <button
              key={`${size}-${index}`}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition cursor-pointer ${
                selectedSize === size ? 'bg-[#F1AC4E] text-black border-black' : 'bg-[#F2E1CA] text-[#333]'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default VariantSelector;