import { useModalContext } from '@/app/(navigation)/ModalContext';
import Image from 'next/image';
import React, { FC } from 'react'

const ImageModal: FC = () => {
	const {isModalOpen, imageCloseup, closeModal} = useModalContext()

	return (
		<div className={`${isModalOpen ? 'flex' : 'hidden'} bg-[#000d] w-full h-full absolute flex-grow cursor-pointer z-[100]`} onClick={closeModal}>
			<div className='fixed w-full h-full overflow-hidden '>
				{imageCloseup && <Image
					src={imageCloseup.src}
					alt={imageCloseup.alt}
					fill
					placeholder='blur'
					style={{
						objectFit: 'contain',
						padding: '2vh 2vw'
					}}
					priority
				/>}
			</div>
		</div>
	)
}

export default ImageModal;