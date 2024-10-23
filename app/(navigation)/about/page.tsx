"use client"
import Image from 'next/image';
import React from 'react'
import ProfilePicture from 'public/images/profile-pic.jpg'
import SocialMediaBar, { defaultMediaArray } from 'components/SocialMediaBar/SocialMediaBar';
import 'app/i18next/i18n';
import resolveConfig from 'tailwindcss/resolveConfig'
import config from "tailwind.config";
import { useTranslation } from 'next-i18next';
import { useMultilineTranslation } from '@/app/common/utils';

const TheArtist = () => {
	const { t } = useTranslation();

	const fullConfig = resolveConfig(config);
	const colors = fullConfig.theme?.colors as unknown as { [key: string]: string }; //tailwind creates a conflict whith TS when using custon colors programmatically


	const contactTitle = 'uppercase font-black text-grey-1 text-center'
	return (
		<div className='flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start '>
			<h1 className='text-grey-1 text-3xl uppercase font-black order-1 lg:hidden'>
				{t('about.contactData.name')}
			</h1>
			<div
				className='
					flex
					flex-col
					text-justify
					w-full lg:w-2/4
					h-full
					pb-5 lg:py-10
					px-5 lg:px-20
				'
			>
				<h1 className='text-grey-1 text-3xl uppercase font-black hidden lg:block'>
					{t('about.contactData.name')}
				</h1>
				<div className='overflow-hidden'>
					{useMultilineTranslation('about.description')}
				</div>
			</div>
			<div className='w-full lg:w-1/4 flex flex-col px-5 items-center justify-center'>
				<div className='border-4 w-full max-w-[300px] lg:max-w-none lg:w-full border-grey-1 aspect-square rounded-full overflow-hidden '>
					<Image
						key={'some'}
						src={ProfilePicture}
						alt={'profile picture'}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						placeholder='blur'
					/>
				</div>
				<div className='w-full flex flex-col mt-2 space-y-2 items-center'>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<h2 className={contactTitle}>{t('about.contactTitles.email')}</h2><p>{t('about.contactData.email')}</p>
						<h2 className={contactTitle}>{t('about.contactTitles.phone')}</h2><p>{t('about.contactData.phone')}</p>
					</div>
					<div>
						<h2 className={contactTitle}>{t('about.contactTitles.media')}</h2>
						<SocialMediaBar className='mx-auto w-1/2' fillColor={colors.grey[1]} mediaArray={defaultMediaArray} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TheArtist;