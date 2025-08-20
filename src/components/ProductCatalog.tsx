import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

const ProductCatalog = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Pandinus imperator",
      commonName: "Emperador Africano",
      price: 2500,
      originalPrice: 3200,
      rating: 5,
      image: "🦂",
      rarity: "Legendario",
      size: "20-25cm",
      venom: "Bajo",
      origin: "Ghana, Togo"
    },
    {
      id: 2,
      name: "Heterometrus spinifer",
      commonName: "Gigante Malayo",
      price: 1800,
      originalPrice: 2400,
      rating: 4.8,
      image: "🦂",
      rarity: "Épico",
      size: "18-22cm",
      venom: "Medio",
      origin: "Malasia, Tailandia"
    },
    {
      id: 3,
      name: "Leiurus quinquestriatus",
      commonName: "Cazador Dorado",
      price: 4500,
      originalPrice: 5800,
      rating: 5,
      image: "🦂",
      rarity: "Mítico",
      size: "8-12cm",
      venom: "Extremo",
      origin: "Desierto del Sahara"
    },
    {
      id: 4,
      name: "Androctonus australis",
      commonName: "Escorpión Amarillo",
      price: 3200,
      originalPrice: 4000,
      rating: 4.9,
      image: "🦂",
      rarity: "Legendario",
      size: "10-15cm",
      venom: "Alto",
      origin: "Norte de África"
    },
    {
      id: 5,
      name: "Hottentotta tamulus",
      commonName: "Escorpión Rojo",
      price: 2800,
      originalPrice: 3500,
      rating: 4.7,
      image: "🦂",
      rarity: "Épico",
      size: "12-16cm",
      venom: "Alto",
      origin: "India, Pakistán"
    },
    {
      id: 6,
      name: "Parabuthus transvaalicus",
      commonName: "Kalahari Ferrari",
      price: 5200,
      originalPrice: 6800,
      rating: 5,
      image: "🦂",
      rarity: "Mítico",
      size: "14-18cm",
      venom: "Extremo",
      origin: "Sudáfrica, Botswana"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Mítico": return "from-purple-500 to-pink-500";
      case "Legendario": return "from-amber-500 to-orange-500";
      case "Épico": return "from-blue-500 to-cyan-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              COLECCIÓN
            </span>
            <br />
            <span className="text-white">PREMIUM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Especímenes únicos seleccionados por expertos. Cada escorpión viene con certificado de autenticidad.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-amber-500/20 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              {/* Rarity Badge */}
              <div className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${getRarityColor(product.rarity)} px-3 py-1 rounded-full text-xs font-bold text-white`}>
                {product.rarity}
              </div>

              {/* Favorite Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full backdrop-blur-sm"
              >
                <Heart className="w-5 h-5 text-white hover:text-red-500 transition-colors" />
              </motion.button>

              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-amber-900/20 to-orange-900/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={hoveredProduct === product.id ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-8xl filter drop-shadow-2xl"
                >
                  {product.image}
                </motion.div>
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-amber-500 rounded-full text-black hover:bg-amber-400 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-amber-400 font-medium mb-4">{product.commonName}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="text-gray-400">
                    <span className="text-white">Tamaño:</span> {product.size}
                  </div>
                  <div className="text-gray-400">
                    <span className="text-white">Veneno:</span> {product.venom}
                  </div>
                  <div className="text-gray-400 col-span-2">
                    <span className="text-white">Origen:</span> {product.origin}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-400">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold px-4 py-2 rounded-full transition-all duration-300"
                  >
                    Comprar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold px-8 py-4 rounded-full transition-all duration-300"
          >
            Ver Más Especies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalog;