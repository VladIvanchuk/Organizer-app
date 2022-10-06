// Core
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';


// Components
import { App } from './app';

// Instruments
import { store } from './lib/redux/init/store';
import './theme/styles/index.scss';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from './lib/queryClient';


render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <Router>
                <App />
            </Router>
        </QueryClientProvider>

    </Provider>,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },
);
