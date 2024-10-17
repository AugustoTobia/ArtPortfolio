import { StaticImageData } from "next/image";

export interface IProjectParams {
	params: {
		projectId: string
	}
};

export interface EntryImage {
	source: StaticImageData;
	alt: string;
};

export interface PortafolioEntryList {
	title: string;
	description: string;
	image: EntryImage[];
	projectId: string;
}

export interface IPortfolioEntry extends PortafolioEntryList {
	classname?: string;
};

export interface ISvgProps {
	fillColor: string;
}

export type ISocialMediaItem = {
	name: string;
	link: string;
	svg: any;
}

export interface ISocialMediaBarProps {
	mediaArray: ISocialMediaItem[];
	className: string;
	fillColor: string;
}

export interface IModalContextProps {
	openModal: (src: StaticImageData, alt: string) => void;
	closeModal: () => void;
	imageCloseup?: { src: StaticImageData, alt: string };
	isModalOpen: boolean;
}