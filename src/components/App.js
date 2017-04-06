import React from 'react'

import Books from '../containers/Books'
import NewBookContainer from '../containers/NewBookContainer'
import Overlay from '../containers/Overlay'

const App = () => (
    <div>
        <Books />
        <NewBookContainer />
        <Overlay />
    </div>
)

export default App
