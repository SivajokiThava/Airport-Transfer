import React from "react";
import Button from "../Components/Button";

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PriceModal: React.FC<PriceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md mx-auto overflow-hidden">
        {/* Modal Header */}
        <div className="relative flex items-center justify-center p-4 border-b">
          <h2 className="text-xl font-bold text-center">Price List</h2>
          <button
            onClick={onClose}
            className="absolute right-4 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Operator</th>
                <th className="py-2">Vehicle Type</th>
                <th className="py-2">Price</th>
                <th className="py-2">Tax</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Operator 1</td>
                <td className="py-2">Sedan</td>
                <td className="py-2">$50</td>
                <td className="py-2">$5</td>
                <td className="py-2">$55</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Operator 2</td>
                <td className="py-2">SUV</td>
                <td className="py-2">$70</td>
                <td className="py-2">$7</td>
                <td className="py-2">$77</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="p-4 flex justify-center">
          <Button>Select</Button>
        </div>
      </div>
    </div>
  );
};

export default PriceModal;
