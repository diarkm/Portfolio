import MobileMenu from './components/mobileMenu';
import Header from './components/header';
import Slider from './components/slider';

const App = () => {
	return (
		<>
			<MobileMenu />

			<div className="unslate_co--site-wrap">
				<div className="unslate_co--site-inner">
					<div className="lines-wrap">
						<div className="lines-inner">
							<div className="lines"></div>
						</div>
					</div>
				</div>

				<Header />

				<Slider />
			</div>
		</>
	);
};

export default App;
