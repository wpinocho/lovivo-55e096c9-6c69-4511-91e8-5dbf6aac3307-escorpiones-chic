import { motion } from "framer-motion";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Inicio", "Catálogo", "Especies", "Cuidados", "Contacto"];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🦂</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                SCORPION ELITE
              </h1>
              <p className="text-xs text-gray-400">African Scorpions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#f59e0b",
                  textShadow: "0 0 10px #f59e0b"
                }}
                className="text-white hover:text-amber-400 transition-all duration-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 transition-colors"
            >
              <Search className="w-5 h-5 text-amber-400" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-amber-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                0
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 transition-colors"
            >
              <Menu className="w-5 h-5 text-amber-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;