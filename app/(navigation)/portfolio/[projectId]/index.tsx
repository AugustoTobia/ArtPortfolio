"use client"
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'

import { IProjectParams } from '@/app/common/types'

import SizedImage from 'components/SizedImage/SizedImage'

import { entries } from '../entries'
import { useModalContext } from '../../ModalContext'
import { useTranslation } from 'next-i18next';

const ProjectComponent: FC<IProjectParams> = ({ params }) => {
	const router = useRouter();
	const { openModal } = useModalContext();
	const { t } = useTranslation();

	const currentEntry = entries.find(entry => entry.projectId === params.projectId)
	if (!currentEntry) {
		router.push('/portfolio');
	}

	return (
		<div className='flex justify-center flex-col items-center w-full min-h-[90vh]'>
			<h1 className='text-center uppercase w-full font-black text-grey-1 text-[2rem]'>
				{currentEntry?.title && t(currentEntry.title)}
			</h1>
			<div className='h-full flex justify-center gap-2 flex-wrap w-full'>
				{currentEntry && currentEntry.image.map(img => {
					return <SizedImage
						key={img.alt}
						source={img.source}
						alt={img.alt}
						onClick={() => openModal(img.source, img.alt)}
					/>
				}
				)}
			</div>
			<p className='text-center text-grey-1 w-1/2 py-4'>
				{currentEntry?.description && t(currentEntry.description)}
			</p>
		</div >
	)
}

export default ProjectComponent