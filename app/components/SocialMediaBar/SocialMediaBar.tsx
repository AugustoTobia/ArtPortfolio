import React, { FC } from 'react'
import { ISocialMediaBarProps } from '@/app/common/types';
import IgBlack from 'public/svg/InstagramBlack'
import ArtStation from 'public/svg/artStation';
import DeviantArtLogo from 'public/svg/DeviantArtLogo';

export const defaultMediaArray = [
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

const SocialMediaBar: FC<ISocialMediaBarProps> = ({ className, mediaArray, fillColor }) => {
	const totalItems = mediaArray.length
	const finalLenght = totalItems > 5 ? 5 : totalItems;

	return (
		<div className={className + ` flex h-20 space-x-2`}>
			{mediaArray.map(item => {
				return (
					<a key={item.name} href={item.link} className={`w-[${100 / finalLenght}%]`}>
						{item.svg({fillColor})}
					</a>
				)
			})}
		</div>)
}

export default SocialMediaBar;