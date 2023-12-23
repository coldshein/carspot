import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { ICars } from "@/types";


interface ICarDetail {
  isOpen: boolean;
  closeModal: () => void;
  car: ICars;
}

const CarDetails = ({ isOpen, closeModal, car }: ICarDetail) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;