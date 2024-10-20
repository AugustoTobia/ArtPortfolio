"use client"
import Image from 'next/image';
import React from 'react'
import ProfilePicture from 'public/images/profile-pic.jpg'
import IgBlack from 'public/svg/InstagramBlack'
import SocialMediaBar from 'components/SocialMediaBar/SocialMediaBar';
import ArtStation from 'public/svg/artStation';
import DeviantArtLogo from 'public/svg/DeviantArtLogo';
import 'app/i18next/i18n';
import resolveConfig from 'tailwindcss/resolveConfig'
import config from "tailwind.config";
import { useTranslation } from 'next-i18next';

const mediaArray = [
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/tobia_ilustra/',
		svg: IgBlack,
	},
	{
		name: 'ArtStation',
		link: 'https://www.artstation.com/tobia-ilustra',
		svg: ArtStation,
	},
	{
		name: 'DeviantArt',
		link: 'https://www.deviantart.com/tobia-ilustra',
		svg: DeviantArtLogo,
	},
]

const TheArtist = () => {
	const { t } = useTranslation();

	const fullConfig = resolveConfig(config);
	const colors = fullConfig.theme?.colors as unknown as {[key:string]:string}; //tailwind creates a conflict whith TS when using custon colors programmatically


	const contactTitle = 'uppercase font-black text-grey-1 text-center'
	return (
		<div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
			<h1 className='text-grey-1 text-3xl uppercase font-black order-1 lg:hidden'>
				Augusto Tobia
			</h1>
			<div
				className='
					flex
					flex-col
					items-center
					text-justify
					border-4
					border-black
					w-full lg:w-[45%]
					h-full
					py-5 lg:py-10
					px-5 lg:px-20
				'
			>
				<h1 className='text-grey-1 text-3xl uppercase font-black hidden lg:block'>
					Augusto Tobia
				</h1>
				<p className='overflow-hidden'>
					{t('about.description')}
				</p>
			</div>
			<div className='w-full lg:w-[45%] flex flex-col px-5 items-center justify-center'>
				<div className='border-4 w-full lg:w-2/3 border-grey-1 aspect-square rounded-full overflow-hidden '>
					<Image
						key={'some'}
						src={ProfilePicture}
						alt={'profile picture'}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						placeholder='blur'
					/>
				</div>
				<div className='w-full flex flex-col my-2 items-center'>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<h2 className={contactTitle}>{t('about.contactTitles.email')}</h2><p>augustotobia@gmail.com </p>
						<h2 className={contactTitle}>{t('about.contactTitles.phone')}</h2><p>+54 9 341 743 4926</p>
					</div>
					<div>
						<h2 className={contactTitle}>{t('about.contactTitles.media')}</h2>
						<SocialMediaBar className='h-10 my-2 mx-auto w-1/2' fillColor={colors.grey[1]} mediaArray={mediaArray} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TheArtist;