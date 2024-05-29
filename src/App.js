import React from "react";
import './App.css';
import {MainComponent} from "./components/banner/MainComponent";
import {Winners} from "./components/winners/Winners";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Play} from "./components/play/Play";
import {Shops} from "./components/shops/Shops";
import {QuestionAnswer} from "./components/question/QuestionAnswer"
import {Footer} from "./components/footer/Footer";
import {NavigationContainer} from "./containers/navigation-container/NavigationContainer";
import {UserCabinetContainer} from "./components/cabinet/UserCabinetContainer";
import {Auth} from "./common/auth/auth";
import {RegistrationPopup} from "./common/registration/popup-registration";


function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <UserCabinetContainer/>
                {/*<Routes>*/}
                {/*    <Route path="*" element={} />*/}
                    {/*<Route path="/login" element={<Auth/>}/>*/}
                    {/*<Route path="/registration" element={<RegistrationPopup/>}/>*/}
                    {/*<Route*/}
                    {/*    path="*"*/}
                    {/*    element={*/}
                    {/*        <>*/}
                    {/*            <NavigationContainer />*/}
                    {/*            <MainComponent/>*/}
                    {/*            /!*<MainComponent />*!/*/}
                    {/*            <Play />*/}
                    {/*            <Winners />*/}
                    {/*            <Shops />*/}
                    {/*            <QuestionAnswer />*/}
                    {/*            <Footer/>*/}
                    {/*        </>*/}
                    {/*    }*/}
                    {/*/>*/}
                {/*</Routes>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
