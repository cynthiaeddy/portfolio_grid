import React from 'react';
import Home from '../home/Home';
import Splash from './Splash';

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			timePassed: false
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
		setTimeout(() => {
			this.setTimePassed();
		}, 5000);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	setTimePassed() {
		this.setState({
			timePassed: true
		});
	}

	render() {
		let mainClass = document.querySelector('.main');

		console.log(mainClass);
		let isMobile;
		let width = this.state.width;
		width <= 600 ? (isMobile = true) : (isMobile = false);
		if (!this.state.timePassed) {
			return (
				<div>
					<Splash />;
				</div>
			);
		} else if (this.state.timePassed && !isMobile) {
			return (
				<div>
					<Home />
				</div>
			);
		} else if (isMobile && this.state.timePassed) {
			return (
				<div>
					{mainClass.classList.add('fixPosition')}
					<Home />
				</div>
			);
		}
	}
}

export default SplashScreen;

// return !this.state.timePassed && !isMobile ?
// return !this.state.timePassed ? <Splash /> : <Home />;
