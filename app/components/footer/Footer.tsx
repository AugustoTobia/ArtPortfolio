"use client"
import React, { FC } from 'react'
import Divider from 'components/divider/divider'
import { useTranslation } from 'next-i18next';

const Footer: FC = () => {
	const { t } = useTranslation()

	return (
		<div className='bg-grey-base w-full justify-self-end'>
			<Divider />
			<div
				className='
					flex
					items-center
					text-grey-1
					uppercase
					justify-center
					font-black
					text-sm
					w-full
					p-2
				'
			>
				<h2>
					{t("footer.contact")}
				</h2>
			</div>

		</div>
	)
}

export default Footer