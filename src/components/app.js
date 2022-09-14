import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import SearchResults from '../routes/results';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<SearchResults path="/results/:queryLocation/" />
		</Router>
	</div>
)

export default App;
