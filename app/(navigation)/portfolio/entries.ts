
import laMuerte from 'public/images/la-muerte.png'
import laTorre from 'public/images/la-torre.png'
import elLoco from 'public/images/el-loco.png'
import persecucion from 'public/images/persecucion.jpg'
import laInvocacion from 'public/images/la-invocacion.jpg'
import grifo from 'public/images/grifo.jpg'
import mute from 'public/images/mute.jpg'
import { PortafolioEntryList } from '@/app/common/types'

export const entries: PortafolioEntryList[] = [
	{
		image: [{ source: laMuerte, alt: 'a' }, { source: elLoco, alt: 'b' }, { source: laTorre, alt: 'c' }],
		title: 'entries.death.title',
		description: 'entries.death.description',
		projectId: '1'
	},

	{
		image: [{ source: persecucion, alt: 'a' },],
		title: 'entries.chase.title',
		description: 'entries.chase.description',
		projectId: '2'

	},
	{
		image: [{ source: laInvocacion, alt: 'a' }],
		title: 'entries.invocation.title',
		description:  'entries.invocation.description',
		projectId: '3'

	},
	{
		image: [{ source: elLoco, alt: 'a' }],
		title: 'entries.fool.title',
		description: 'entries.fool.description',
		projectId: '4'

	},

	{
		image: [{ source: laTorre, alt: 'a' }],
		title: 'entries.tower.title',
		description: 'entries.tower.description',
		projectId: '5'

	},
	{
		image: [{ source: grifo, alt: 'a' }],
		title: 'entries.gryph.title',
		description: 'entries.gryph.description',
		projectId: '6'

	},
	{
		image: [{ source: mute, alt: 'a' }],
		title: 'entries.muted.title',
		description: 'entries.muted.description',
		projectId: '7'

	},
]