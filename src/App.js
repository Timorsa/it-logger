import React, { Fragment, useEffect } from 'react';
import store from './store';
import { Provider } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import SearchBar from './components/layout/SearchBar';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {
	useEffect(() => {
		// initializes Materialize JS
		M.AutoInit();
	});

	return (
		<Provider store={store}>
			<Fragment>
				<SearchBar />
				<div className='container'>
					<AddBtn />
					<EditLogModal />
					<AddLogModal />
					<AddTechModal />
					<TechListModal />
					<Logs />
				</div>
			</Fragment>
		</Provider>
	);
}

export default App;
