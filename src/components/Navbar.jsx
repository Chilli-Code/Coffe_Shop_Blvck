import PropTypes from 'prop-types';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({ sidebar, setSidebar }) => {
    // Función para alternar el estado de sidebar
    const toggleSidebar = () => {
        setSidebar(prevSidebar => !prevSidebar);
    };

    return (
        <nav className="absolute top-0 left-0 w-full pt-10 text-white z-[9999]">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* Sección Logo */}
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}
                        className="text-2xl font-semibold uppercase">
                        <span className="text-primary">Coders</span>Coffee.
                    </motion.h1>
                    {/* Hamburger Menu Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 1.2,
                        }}
                        onClick={toggleSidebar} // Llama a la función toggleSidebar al hacer clic
                    >
                        <GiHamburgerMenu className="text-3xl cursor-pointer" />
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

// Definición de PropTypes
Navbar.propTypes = {
    setSidebar: PropTypes.func.isRequired,
};

export default Navbar;
