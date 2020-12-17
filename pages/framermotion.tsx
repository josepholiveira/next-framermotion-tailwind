import { motion } from "framer-motion";
import Link from "next/link";

const FramermotionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img 
        src="/img/framermotion.svg" 
        alt="Next.js" 
        layoutId="framermotion-logo" 
      />

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 1}}
      >
        <Link href="/">
          <a className="bg-blue-500 text-gray-50 px-6 py-3 text-lg font-semibold rounded-l hover:bg-blue-400 transition">
            Voltar para a home
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

export default FramermotionPage;