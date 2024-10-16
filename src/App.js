import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import Start from './components/Test/Starting/Start'
import Test from './components/Test/Testing/Test'
import Ending from './components/Test/Ending/Ending'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/start' element={<Start />} />
                <Route path='/testing' element={<Test />} />
                <Route path='/ending' element={<Ending />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App