"use client"
import Link from "next/link";
import './i18next/i18n';

import resolveConfig from 'tailwindcss/resolveConfig'
import config from "../tailwind.config";

import AtLogo from "@/public/svg/AtLogoWeb";
import { useTranslation } from 'next-i18next';

export default function Home() {
	const { t, i18n } = useTranslation();

	const headerLinkStyles = 'uppercase text-grey-1 hover:font-black'
	const fullConfig = resolveConfig(config);
	const colors = fullConfig.theme?.colors as unknown as {[key:string]:string}; //tailwind creates a conflict whith TS when using custon colors programmatically

	return (
		<main className="bg-grey-base">
			<div className="flex min-h-screen flex-col items-center justify-start p-24">
				<div className="w-[10rem]">
					<AtLogo fillColor={colors.grey[1]} />
				</div>
				<h1 className="text-[5rem] text-grey-1">{t('landing.welcome')}</h1>
				<Link className={headerLinkStyles} href={'/about'}>{t('landing.about')}</Link>
				<Link className={headerLinkStyles} href={'/portfolio'} as={'/portfolio'}>{t('landing.portfolio')}</Link>
			</div>
		</main>
	);
}
