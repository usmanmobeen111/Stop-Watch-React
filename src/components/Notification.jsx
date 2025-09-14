import { motion, AnimatePresence } from 'framer-motion';

const Notification = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50"
        >
          {message}
          <button onClick={onClose} className="ml-2 text-white hover:text-gray-200">×</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
