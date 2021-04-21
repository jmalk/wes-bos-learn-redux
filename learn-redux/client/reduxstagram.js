import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

import { Main } from './components/Main'

render(<Main><p>hello</p></Main>, document.getElementById('root'))

