"use client"

import React, { FC } from 'react'
import 'app/i18next/i18n';

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer';
import ImageModal from 'components/imageModal/ImageModal';
import { ModalProvider } from './ModalContext';

const Layout: FC<Readonly<{
	children: React.ReactNode;
}>> = ({ children }) => {

	return (
		<div className='bg-grey-base relative flex flex-col justify-between h-full w-full min-h-screen'>
			<ModalProvider >
				<Header />
				<main className='p-[2%] bg-grey-base mt-[5%]'>
					{children}
				</main>
				<Footer />
				<ImageModal />
			</ModalProvider>
		</div >
	)
}

export default Layout