"use client"
import { createContext, useContext, useState } from 'react'
import { IModalContextProps } from '../common/types';
import { StaticImageData } from 'next/image';

export const ModalContext = createContext<IModalContextProps | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [imageCloseup, setImageCloseup] = useState<{src: StaticImageData, alt:string}>();
	const [isModalOpen, setModal] = useState<boolean>(false);

	const handleOpenModal = (src: StaticImageData, alt: string) => {
		setImageCloseup({src, alt})
		setModal(true)
	}

	return (
		<ModalContext.Provider
			value={{
				openModal: handleOpenModal,
				closeModal: () => setModal(false),
				imageCloseup,
				isModalOpen
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => {
	const modalContext = useContext(ModalContext);

	if (!modalContext) {
		throw new Error(
			'useModalContext has to be used within <modalContext.Provider>',
		);
	}

	return modalContext;
};