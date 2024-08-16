import React, {useEffect, useState} from 'react';
import App from './App';

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <StyledEngineProvider injectFirst>
        <App/>
    </StyledEngineProvider>
);



