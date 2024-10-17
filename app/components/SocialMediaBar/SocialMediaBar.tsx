import React, { FC } from 'react'
import { ISocialMediaBarProps } from '@/app/common/types';

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