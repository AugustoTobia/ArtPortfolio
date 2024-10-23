"use client";
import React, { FC } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Divider from 'components/divider/divider'
import { changeLanguage } from 'i18next';
import { useTranslation } from 'next-i18next';
import AtLogo from '@/public/svg/AtLogoWeb';
import resolveConfig from 'tailwindcss/resolveConfig'
import config from "tailwind.config";

const Header: FC = () => {
	const currentPath = usePathname()
	const { t, i18n } = useTranslation();

	const onLangChange = (lang: string) => {
		changeLanguage(lang, (err, t) => {
			if (err) return console.log('something went wrong on the translation loading', err);
			t('key');
		})
	}

	const linkList = [
		{
			href: '/',
			text: t('header.home')
		},
		{
			href: '/about',
			text: t('header.about')
		},
		{
			href: '/portfolio',
			text: t('header.portfolio')
		}
	]

	const fullConfig = resolveConfig(config);
	const colors = fullConfig.theme?.colors as unknown as { [key: string]: string }; //tailwind creates a conflict whith TS when using custon colors programmatically

	return (
		<div className='fixed w-full bg-grey-base z-[30] h-[50px]'>
			<div className='flex'>
				<div className='flex items-center justify-center space-x-4 mx-auto'>
					<div className='h-full w-10 ml-[2%] p-1'>
						<Link
							href='/'
						>
							<AtLogo fillColor={colors.black} />
						</Link>
					</div>
					{linkList.map((link) => {
						const isActive = currentPath.startsWith(link.href) && link.href !== '/'
						return <Link
							key={link.href}
							className={
								`${isActive && 'font-black'}
								uppercase
								text-nowrap
								text-sm lg:text-lg
								text-grey-1
								hover:font-black
								`
							}
							href={link.href}
						>
							{link.text}
						</Link>
					})}
				</div>
				<div className='mr-[5%]'>
					<button
						className={`
							uppercase
							text-sm
							text-grey-1
							hover:font-black
							${i18n.resolvedLanguage === 'es' && 'font-black'}
						`}
						value={'es'}
						onClick={(e) => onLangChange(e.currentTarget.value)}>
						es
					</button>
					|
					<button
						className={`
							uppercase
							text-sm
							text-grey-1
							hover:font-black
							${i18n.resolvedLanguage === 'en' && 'font-black'}
						`}
						value={'en'}
						onClick={(e) => onLangChange(e.currentTarget.value)}>
						en
					</button>
				</div>
			</div>
			<Divider />
		</div>
	)
}

export default Header
