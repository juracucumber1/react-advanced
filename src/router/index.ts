import React from "react";
import Event from '../pages/Event'
import Login from "../pages/Login";

export interface IRoute {
    patch: string;
    component: React.ComponentType;
    exact?: boolean;
}


export enum RoteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {patch: RoteNames.LOGIN , exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
    {patch: RoteNames.EVENT , exact: true, component: Event}
]