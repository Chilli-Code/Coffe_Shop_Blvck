import { motion } from "framer-motion";
import Coffe1 from "../../assets/coffee/coffee1.png";
import Coffe3 from "../../assets/coffee/coffee3.png";

const servicesData = [
    {
        id: 1,
        image: Coffe1,
        title: "Black Coffee",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        image: Coffe1,
        title: "Hot Coffee",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        image: Coffe3,
        title: "Cold Coffee",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
        },
    },
};

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
        },
    },
};

const Services = () => {
    return (
        <div className="container my-16 space-y-4">
            {/* Sección de cabecera */}
            <div className="text-center max-w-lg mx-auto space-y-2">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "string",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className="text-3xl font-bold text-lightGray"
                >
                    Fresh and <span className="text-primaryDark">Tasty Coffee</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "string",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.6,
                    }}
                    className="text-sm opacity-50"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quis. Odio qui quam sapiente similique sit ut, voluptates at libero rem quia consequuntur ad exercitationem!
                </motion.p>
            </div>
            {/* Sección de tarjetas */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
                {servicesData.map((service) => (
                    <motion.div
                        variants={cardVariants}
                        key={service.id}
                        className="text-center p-4 space-y-6"
                    >
                        <motion.img
                            src={service.image}
                            alt={service.title}
                            className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
                        />
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-primary">{service.title}</h1>
                            <p className="text-darkGray">{service.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
