import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/globalStyle';
import { MainComponent } from './components/Main';
import RightSection from './components/RightSection';
import LeftSection from './components/LeftSection';

const MainPage = () => {
    return (
        <MainComponent>
            <LeftSection />
            <RightSection />
        </MainComponent>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route path="/" component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
