import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Error404 from "../common/Error404";
import Page1 from "../components/page1/Page1";
import Page2 from "../header/Page2";
import Page3 from "../components/page3/Page3";
import Page4 from "../components/page4/Page4";

const  Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <div> Hello</div>} />
                <Route exact path={'/Page1'} render={() => <Page1 />} />
                <Route exact path={'/Page2'} render={() => <Page2 />} />
                <Route exact path={'/Page3'} render={() => <Page3 />} />
                <Route exact path={'/Page4'} render={() => <Page4 />} />
                {/*<Route  path={'/login'} render={() => <Login />} />*/}
                <Route path={ '/404' } render={ () => <Error404 /> }/>
                <Redirect path={ '*' } to={ '/404' }/>
            </Switch>
        </div>
    );
}

export default Routes;