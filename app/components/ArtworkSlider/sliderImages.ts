import laMuerte from 'public/images/muerte-preview.png'
import laTorre from 'public/images/torre-preview.png'
import elLoco from 'public/images/loco-preview.png'
import persecucion from 'public/images/persecucion.jpg'
import laInvocacion from 'public/images/la-invocacion.jpg'
import grifo from 'public/images/grifo.jpg'
import mute from 'public/images/mute.jpg'
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