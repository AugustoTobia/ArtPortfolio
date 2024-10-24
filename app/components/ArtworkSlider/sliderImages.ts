import laMuerte from 'public/images/muerte-preview.webp'
import laTorre from 'public/images/torre-preview.webp'
import elLoco from 'public/images/loco-preview.webp'
import persecucion from 'public/images/persecucion.webp'
import laInvocacion from 'public/images/la-invocacion.webp'
import grifo from 'public/images/grifo.webp'
import mute from 'public/images/mute.webp'
import { SliderImage } from "@/app/common/types";

export const imageArray: SliderImage[] = [
	{
		src: laMuerte,
		alt: 'entries.death.title',
	},
	{
		src: laTorre,
		alt: 'entries.chase.title',
	}, {
		src: elLoco,
		alt: 'entries.invocation.title',
	}, {
		src: persecucion,
		alt: 'entries.fool.title',
	}, {
		src: laInvocacion,
		alt: 'entries.tower.title',
	}, {
		src: grifo,
		alt: 'entries.gryph.title',
	}, {
		src: mute,
		alt: 'entries.muted.title',
	},
]