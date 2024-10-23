import { entries } from '../entries'
import ProjectComponent from '.'
import { IProjectParams } from '@/app/common/types'
import { FC } from 'react'

export function generateStaticParams() {
	return entries.map(entry => ({ projectId: entry.projectId }))
}

const ProjectPage: FC<IProjectParams> = ({ params }) => {

	return (<ProjectComponent params={{ projectId: params.projectId }} />)
}

export default ProjectPage;