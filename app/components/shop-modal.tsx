import React from "react";
import { Link } from "react-router";

interface ShopModalProps {
  tokopedia: string;
  shopee: string;
  onClose: () => void; // Function to close the modal
}

const ShopModal: React.FC<ShopModalProps> = ({
  tokopedia,
  shopee,
  onClose,
}) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-[theme(--modal-background)]"
    >
      <div className="bg-[theme(--color-secondary)] p-6 rounded-4xl border-[2.5px] border-gray-600 w-3xl h-36 mx-5 sm:mx-0 sm:h-60">
        <section className="flex justify-evenly items-center w-full h-full">
          <Link className="w-1/2" to={tokopedia} target="_blank">
            <img
              className="w-[2000px] hover:scale-105"
              src="/logos/tokopedia-logo.png"
              alt="Tokopedia Logo"
            />
          </Link>
          <Link className="w-1/2" to={shopee} target="_blank">
            <img
              className="hover:scale-105"
              src="/logos/shopee-logo.png"
              alt="Shopee Logo"
            />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ShopModal;
