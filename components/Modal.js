import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 w-[80%] max-w-[80%] max-h-[80%]">
      <div className="flex flex-col w-full flex-grow">
        <div className="bg-white rounded-lg shadow-lg w-full p-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Modal Title */}
          {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Modal Content */}
          <div className="max-h-[100%]">
            <Carousel>
              <div>
                <img
                  src="/images/flower.jpeg"
                  className="object-contain max-w-[50%]"
                />
              </div>
              <div>
                <img
                  src="/images/flower.jpeg"
                  className="object-contain max-w-[50%]"
                />
              </div>
              <div>
                <img
                  src="/images/flower.jpeg"
                  className="object-contain max-w-[50%]"
                />
              </div>
              <div>
                <img
                  src="/images/flower.jpeg"
                  className="object-contain  max-w-[50%]"
                />
              </div>
            </Carousel>
          </div>
          <div>
            <p>
              lorem
              iapsdpasdioopafopgijadhgjladhfjlkahjfhaohsdfoashdfoiuyhruioahsdjkghaiyufgieqghifyqet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
