import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ setIsOpen }) => {
  return createPortal(
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-10 px-2">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white px-3">
        <div className="w-full">
          <div className="m-8 max-w-[400px] mx-auto">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-extrabold">Lorem, ipsum.</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                praesentium rem provident placeat exercitationem dicta, ut
                minima nihil corrupti rerum!
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 bg-white border rounded-full w-full font-semibold hover:bg-black hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
