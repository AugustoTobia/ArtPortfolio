"use client"
import React, { FC, Suspense, useState } from 'react'
import Image from 'next/image'
import Loader from 'components/Loader/Loader';
import { ISizedImageProps } from '@/app/common/types';

const SizedImage: FC<ISizedImageProps> = ({ alt, source, onClick }) => {
	const [ratio, setRatio] = useState<number | null>(null)
	const [loaded, setLoaded] = useState(false)

	const size = ratio && ratio < 1 ? 'w-[80vw] aspect-[4/3]' : ' aspect-[3/5] h-[60vh]'
	const showImage = loaded ? 'visible' : 'hidden'

	console.log(loaded);

	return (
		<div className={`relative ${size} cursor-pointer flex items-center`} onClick={onClick}>
			<Image
				src={source}
				alt={alt}
				fill
				placeholder='blur'
				style={{
					objectFit: 'contain',
				}}
				priority
				className={`${showImage}`}
				sizes="80vw"
				onLoad={({ target }) => {
					const { naturalWidth, naturalHeight } = target as HTMLImageElement
					setRatio(naturalHeight / naturalWidth)
					setLoaded(true)
				}
				}
			/>
			{!loaded && <Loader />}
		</div>
	)
}

export default SizedImage