"use client"
import Link from "next/link";
import './i18next/i18n';

import resolveConfig from 'tailwindcss/resolveConfig'
import config from "../tailwind.config";

import AtLogo from "@/public/svg/AtLogoWeb";
import { useTranslation } from 'next-i18next';
import ArtworkSlider from "./components/ArtworkSlider/ArtworkSlider";
import SocialMediaBar, { defaultMediaArray } from "./components/SocialMediaBar/SocialMediaBar";
import { imageArray } from "./components/ArtworkSlider/sliderImages";

export default function Home() {
	const { t } = useTranslation();

	const headerLinkStyles = 'uppercase text-grey-1 hover:font-black lg:my-auto text-center'
	const fullConfig = resolveConfig(config);
	const colors = fullConfig.theme?.colors as unknown as { [key: string]: string }; //tailwind creates a conflict whith TS when using custon colors programmatically

	return (
		<main className="bg-grey-base">
			<div className="flex min-h-screen flex-col items-center justify-start relative">
				<div
					className="
						flex
						items-center
						justify-between
						bg-grey-base
						bg-opacity-80
						py-2
						px-4
						absolute
						z-50
						flex-col lg:flex-row
						w-1/2 lg:w-full
						h-[300px] lg:h-[3rem]
						inset-1/2 lg:inset-auto lg:bottom-0
						-translate-x-1/2 lg:translate-x-0
						-translate-y-1/2 lg:translate-y-0
						gap-y-6 lg:gap-0
						"
				>
					<div className="
					flex
					h-full
					flex-col lg:flex-row
					items-center
					gap-y-2 lg:gap-y-0 lg:gap-x-6
					">
						<div className='w-1/2 flex lg:h-full lg:w-auto'>
							<AtLogo fillColor={colors.grey[1]} />
						</div>
						<Link className={headerLinkStyles} href={'/about'}>
							{t('landing.about')}
						</Link>
						<Link className={headerLinkStyles} href={'/portfolio'}>
							{t('landing.portfolio')}
						</Link>
					</div>
					<SocialMediaBar
						mediaArray={defaultMediaArray}
						className="h-8 w-full justify-center lg:h-4/5 lg:w-auto"
						fillColor="#4c5b5c"
					/>
				</div>
				<ArtworkSlider imageArray={imageArray} />
			</div>
		</main>
	);
}
