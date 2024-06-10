import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {NavigationContainer} from "./containers/navigation-container/NavigationContainer";
import {UserCabinetContainer} from "./components/cabinet/UserCabinetContainer";
import {PlayContainer} from "./containers/play-container/PlayContainer";


function App() {
    return (
            <div className="app-wrapper">
                <Routes>
                    <Route path="*" element={<NavigationContainer/>}/>
                    <Route path="delicadoc-cabinet/cabinet" element = {<UserCabinetContainer/>}/>
                    <Route path="delicadoc-cabinet/play" element = {<PlayContainer/>} />
                </Routes>
                {/*<Routes>*/}
                {/*    <Route path="*" element={} />*/}
                {/*    <Route path="/login" element={<Auth/>}/>*/}
                {/*    <Route path="/registration" element={<RegistrationPopup/>}/>*/}
                {/*    <Route*/}
                {/*        path="*"*/}
                {/*        element={*/}
                {/*            <>*/}
                {/*                <NavigationContainer />*/}
                {/*                <MainComponent/>*/}
                {/*                /!*<MainComponent />*!/*/}
                {/*                <PlayInfo />*/}
                {/*                <Winners />*/}
                {/*                <Shops />*/}
                {/*                <QuestionAnswer />*/}
                {/*                <Footer/>*/}
                {/*            </>*/}
                {/*        }*/}
                {/*    />*/}
                {/*</Routes>*/}
            </div>
    );
}

export default App;
