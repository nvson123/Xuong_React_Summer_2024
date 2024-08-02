import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { IProduct } from '../../types/Product';


const SizeSelection: React.FC<{
  sizes: string[],
  selectedSize: string,
  setSelectedSize: (size: string) => void
}> = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <div className="mt-4">

      <div className="flex items-center gap-6 mt-2">
        <h2 className="text-lg font-medium">Size:</h2>
        <div className="flex gap-4">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              className={`w-10 h-10 flex items-center justify-center rounded border-2 ${selectedSize === size
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-transparent text-black border-gray-400'
                } font-medium text-sm`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColour, setSelectedColour] = useState<string>('');

  const fetchProductData = useCallback(async () => {
    try {
      const response = await axios.get<IProduct>(`http://localhost:3000/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      setError('Error fetching the product data');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <p className="text-gray-600">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link> &gt;{' '}
        <Link to={`/category/${product.category}`} className="text-blue-600 hover:underline">{product.category}</Link> &gt;{' '}
        <span>{product.name}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-2">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
          </div>
          <div className="grid grid-cols-4 gap-2 max-h-72 overflow-y-auto">
            {product.images?.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`${product.name} ${index}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600">${product.price}</p>

          <div className="mt-4">
            <h2 className="text-lg font-medium">Rating</h2>
            <div className="flex items-center gap-4">
              <div className="text-yellow-500">
                {'⭐'.repeat(Math.round(product.rating || 5))}
              </div>
              <div className="text-sm text-black opacity-50">
                ({product.reviews || '150 Reviews'})
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 border border-black opacity-50 transform rotate-90"></div>
                <div className="text-sm text-[#00ff66] opacity-60">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-36 overflow-y-auto mt-4">
            <p>{product.description}</p>
          </div>

          <SizeSelection
            sizes={product.sizes || []}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />


          <div className="flex gap-2 mt-2">
            <p className="mt-3 text-xm font-medium">Color:</p>
            {['lightblue', 'darktan', 'grey',].map(color => (
              <button
                key={color}
                className={`w-10 h-10 rounded-full border-2 border-gray-400 ${selectedColour === color ? 'ring-2 ring-blue-500' : ''
                  }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColour(color)}
                aria-label={color} // Cung cấp thông tin cho các công cụ hỗ trợ
              >
                {/* Chữ ở đây đã được loại bỏ */}
              </button>
            ))}
          </div>
          <div className="mt-4">

            <div className="flex items-center gap-6">
              <h2 className="text-lg font-medium">Price</h2>
              <div className="flex items-center border border-gray-200 rounded">
                <button
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  className="w-8 h-8 bg-gray-200 border-r border-gray-300 flex items-center justify-center text-xl font-bold text-gray-600 rounded-l"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min={1}
                  className="w-16 h-8 text-center text-lg border-none outline-none appearance-none"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-8 h-8 bg-red-600 border-l border-gray-300 flex items-center justify-center text-xl font-bold text-white rounded-r"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Buy Now</button>

          <div className="mt-6 max-w-md border border-gray-300 rounded p-4">
            <h2 className="text-lg font-medium">Free Delivery</h2>
            <p className="text-sm">Enter your postal code for Delivery Availability</p>
          </div>

          <div className="mt-4 max-w-md border border-gray-300 rounded p-4">
            <h2 className="text-lg font-medium">Return Delivery</h2>
            <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
