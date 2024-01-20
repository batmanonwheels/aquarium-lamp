//import

interface FrontLayerProps {
	fish: string[];
	backgrounds: string[];
}

const FrontLayer = ({ fish }: FrontLayerProps) => {
	return (
		<div id='front' className='absolute overflow-hidden inset-0 z-20'>
			{fish.map((f, i) => (
				<img
					className={`h-16 absolute top-[calc(15lvh-$rem)]`}
					src={f}
					alt={'fish' + i}
					key={i}
				/>
			))}
		</div>
	);
};

export default FrontLayer;
