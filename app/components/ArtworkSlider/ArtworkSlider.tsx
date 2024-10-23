'use client'
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';

import { IArtowrkSlider } from "@/app/common/types";



const ArtworkSlider: FC<IArtowrkSlider> = ({ imageArray }) => {
	const [currentIndex, setIndex] = useState<number>(0)
	const { t } = useTranslation();

	useEffect(() => {
		setTimeout(() => {
			setIndex(prevIndex => {
				const newIndex = prevIndex + 1;
				if (newIndex >= imageArray.length) {
					return 0
				}
				return newIndex;
			})
		}, 4000)

	}, [currentIndex])

	return (
		<div className="flex w-screen h-screen relative overflow-hidden z-0">
			{imageArray.map((image, i) => {
				return (
					<Image
						src={image.src}
						style={{
							objectFit: 'cover',
							objectPosition: '50% 30%',
						}}
						fill
						key={image.alt}
						alt={t(image.alt)}
						quality={100}
						loading='eager'
						className={`absolute
							transition-opacity
							duration-1000
							shadow-sm
							bg-black
							ease-in-out
							${i === currentIndex ? 'opacity-100' : 'opacity-0'}
							`}
					/>
				)
			})}
		</div>
	)
}

export default ArtworkSlider;