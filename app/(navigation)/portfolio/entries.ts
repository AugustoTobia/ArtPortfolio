
import laMuerte from 'public/images/la-muerte.webp'
import laTorre from 'public/images/la-torre.webp'
import elLoco from 'public/images/el-loco.webp'
import persecucion from 'public/images/persecucion.webp'
import laInvocacion from 'public/images/la-invocacion.webp'
import grifo from 'public/images/grifo.webp'
import mute from 'public/images/mute.webp'
import koi from 'public/images/koi-fish.webp'
import emperatriz from 'public/images/la-emperatriz.webp'
import { PortafolioEntryList } from '@/app/common/types'
export const entries: PortafolioEntryList[] = [
	{
		image: [{ source: laMuerte, alt: 'entries.death.description' }, { source: elLoco, alt: 'b' }, { source: laTorre, alt: 'c' }],
		title: 'entries.death.title',
		description: 'entries.death.description',
		projectId: '1'
	},
	{
		image: [{ source: persecucion, alt: 'entries.chase.description' },],
		title: 'entries.chase.title',
		description: 'entries.chase.description',
		projectId: '2'
	},
	{
		image: [{ source: laInvocacion, alt: 'entries.invocation.description' }],
		title: 'entries.invocation.title',
		description: 'entries.invocation.description',
		projectId: '3'
	},
	{
		image: [{ source: elLoco, alt: 'entries.fool.description' }],
		title: 'entries.fool.title',
		description: 'entries.fool.description',
		projectId: '4'
	},
	{
		image: [{ source: laTorre, alt: 'entries.tower.description' }],
		title: 'entries.tower.title',
		description: 'entries.tower.description',
		projectId: '5'
	},
	{
		image: [{ source: grifo, alt: 'entries.gryph.description' }],
		title: 'entries.gryph.title',
		description: 'entries.gryph.description',
		projectId: '6'
	},
	{
		image: [{ source: mute, alt: 'entries.muted.description' }],
		title: 'entries.muted.title',
		description: 'entries.muted.description',
		projectId: '7'
	},
	{
		image: [{ source: koi, alt: 'entries.koi.description' }],
		title: 'entries.koi.title',
		description: 'entries.koi.description',
		projectId: '7'
	},
	{
		image: [{ source: emperatriz, alt: 'entries.empress.description' }],
		title: 'entries.empress.title',
		description: 'entries.empress.description',
		projectId: '7'
	},
]