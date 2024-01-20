//import

interface MiddleLayerProps {
	fish: string[];
	backgrounds: string[];
}

const MiddleLayer = ({ backgrounds }: MiddleLayerProps) => {
	return (
		<div
			id='middle'
			className='absolute flex flex-row inset-0 z-10 justify-end'
		>
			{/* {fish.map((f, i) => (
				<img className='h-16' src={f} alt={'fish' + i} key={i} />
			))} */}
			<img
				className='filter blur-xs w-full object-cover object-center sm:object-none overflow-hidden shadow-blue-950 shadow-2xl'
				src={backgrounds[2]}
				alt={backgrounds[2]}
			/>
		</div>
	);
};

export default MiddleLayer;
