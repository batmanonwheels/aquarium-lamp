import FrontLayer from './components/FrontLayer';
import MiddleLayer from './components/MiddleLayer';
import BackLayer from './components/BackLayer';

function App() {
	const leftFish = [
		'/images/fish/left/Fish1.png',
		'images/fish/left/Fish2.png',
		'images/fish/left/Fish3.png',
		'images/fish/left/Fish4.png',
		'images/fish/left/Fish5.png',
		'images/fish/left/Fish8.png',
		'images/fish/left/Fish9.png',
		'images/fish/left/Fish11.png',
		'images/fish/left/Fish14.png',
	];

	const rightFish = [
		'images/fish/right/Fish6.png',
		'images/fish/right/Fish7.png',
		'images/fish/right/Fish10.png',
		'images/fish/right/Fish12.png',
		'images/fish/right/Fish13.png',
	];

	const backgrounds = [
		'/images/backgrounds/Background1.png',
		'/images/backgrounds/Background2.png',
		'/images/backgrounds/Background3.png',
	];
	return (
		<main id='aquarium' className='min-h-[100lvh] md:min-h-screen'>
			<FrontLayer fish={rightFish} backgrounds={backgrounds} />
			<MiddleLayer fish={leftFish} backgrounds={backgrounds} />
			<BackLayer fish={leftFish} backgrounds={backgrounds} />
		</main>
	);
}

export default App;
