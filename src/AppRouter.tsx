import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RoteNames} from "./router";
import {useTypedSelector} from "./hooks/useTypedSelector";

const AppRouter:FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        path={route.patch}
                        exact={route.exact}
                        component={route.component}
                        key={route.patch}
                    />
                )}
                <Redirect to={RoteNames.EVENT}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        path={route.patch}
                        exact={route.exact}
                        component={route.component}
                        key={route.patch}
                    />
                )}
                <Redirect to={RoteNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;