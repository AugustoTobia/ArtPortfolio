import React, { FC } from "react"

const Loader: FC = () => {
	return (
		<div className="rounded-full
		w-full
		h-full
		aspect-square
		max-w-[200px]
		max-h-[200px]
		border-8
		border-grey-1
		mx-auto
		relative
		"
		>
			<div
				className="
				absolute
				top-[10px]
				left-[8px]
				w-[90%]
				h-[90%]
				rounded-full
				bg-grey-1
				animation-delay-2000
				animate-[inflate_3000ms_cubic-bezier(0.6,_1,_1,_1)_infinite]

			"
			/>
			<div
				className="
				absolute
				top-[10px]
				left-[8px]
				w-[90%]
				h-[90%]
				rounded-full
				bg-[#5c6b6c]
				animation-delay-1000
				animate-[inflate_3000ms_cubic-bezier(0.6,_1,_1,_1)_infinite]
			"
			/>
			<div
				className="
				absolute
				top-[10px]
				left-[8px]
				w-[90%]
				h-[90%]
				rounded-full
				bg-[#6c7b7c]
				animate-[inflate_3000ms_cubic-bezier(0.6,_1,_1,_1)_infinite]
				"
			/>
		</div>
	)
}

export default Loader;