//import

interface BackLayerProps {
	fish: string[];
	backgrounds: string[];
}

const BackLayer = ({ backgrounds }: BackLayerProps) => {
	return (
		<div
			id='back'
			className='absolute overflow-hidden inset-0 bg-[#0F1035] z-0 sm:object-cover'
		>
			<img
				className='h-full w-full sm:object-top overflow-hidden'
				src={backgrounds[1]}
				alt={backgrounds[1]}
			/>
		</div>
	);
};

export default BackLayer;
