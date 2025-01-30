import { motion } from "framer-motion";

const Items = ({ id, text, onDelete }) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col"
    >
      <li className="relative text-gray-800 w-full px-4 py-2 rounded-md font-semibold mb-2 bg-white">
        {text}
        <button
          className="absolute rounded-sm right-3 bg-red-200"
          onClick={() => onDelete(id)}
        >
          ❌
        </button>
      </li>
    </motion.ul>
  );
};

export default Items;
