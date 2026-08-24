import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 mb-8">
          <Leaf className="h-6 w-6 text-green-600 dark:text-green-500" />
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">PlantSense</span>
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Empowering Agriculture Through Artificial Intelligence.
        </p>

        <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <span>Made by AASTU Software Engineering Students</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
