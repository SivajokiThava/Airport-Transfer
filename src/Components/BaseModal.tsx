// components/Modal.tsx
import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-2xl",
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-0 sm:p-4 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center">
        <div
          className={`relative w-full ${maxWidth} mx-auto bg-white rounded-none sm:rounded-lg 
            min-h-screen sm:min-h-0 
            p-4 sm:p-6 
            shadow-lg`}
        >
          {/* Close button - Fixed position on mobile, absolute on desktop */}
          <button
            onClick={onClose}
            className="fixed sm:absolute right-4 top-4 z-10 
              bg-white sm:bg-transparent rounded-full p-1
              text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content wrapper */}
          <div className="mt-8 sm:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
