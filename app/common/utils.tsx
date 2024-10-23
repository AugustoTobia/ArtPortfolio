'use client'
import React from 'react';
import { useTranslation } from 'next-i18next';


export const fillGrid = () => {

	return (
		<div>utils</div>
	)
}


export const useMultilineTranslation = (key: string) => {
	const { t } = useTranslation();
	const items = t(key).split('\n')

	return (
		<>
			{items.map((item, i) => <p key={i}><br/>{item}</p>)}
		</>
	)
}