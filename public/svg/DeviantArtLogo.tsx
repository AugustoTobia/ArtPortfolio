import React, { FC } from "react"
import { ISvgProps } from "@/app/common/types";

const DeviantArtLogo: FC<ISvgProps> = ({ fillColor }) => {

	return (
		<svg className='w-full h-full' fill={fillColor} viewBox="0 0 100 166.61" width="1501" height="2500">
			<path d="M100 0H71.32l-3.06 3.04-14.59 27.85-4.26 2.46H0v41.62h26.4l2.75 2.75L0 133.36v33.25l28.7-.01 3.07-3.05 14.62-27.86 4.17-2.41H100v-41.6H73.52L70.84 89 100 33.33"  />
		</svg>
	)
}

export default DeviantArtLogo;