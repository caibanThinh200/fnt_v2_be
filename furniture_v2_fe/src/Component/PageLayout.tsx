import { Breadcrumb, Layout as AntLayout, PageHeader } from "antd";
import Wrapper from "./Wrapper";
import "../style/component/PageLayout.scss"
import clsx from "clsx";
import { ROUTES } from "../Route/Routes";
import * as Func from "../Util/functions"
import { useState } from "react";
import { Link, match } from "react-router-dom";
import useBreadcrumbs, {BreadcrumbsRoute} from 'use-react-router-breadcrumbs';
import React from 'react'
interface Props {
    sider?: any, 
    children: any, 
    className?: any, 
    breadcrumb?: any, 
    breadcrumpClassname?: string,
    contentClassname?: string
    title?: any, 
    subTitle?: any
}

interface Breadcrump {
    path: string,
    breadcrump: string
}

const Layout: React.FC<Props> = ({sider, children, className, breadcrumb, contentClassname, breadcrumpClassname,title, subTitle, ...rest}: Props)=> {
    const {Content, Sider, Header} = AntLayout,
    routes = Object.values(ROUTES).map((item: any) => ({
        path: item.path,
        breadcrumb: item.breadcrump
    })),
    breadcrumbs = useBreadcrumbs(routes);

    const getCurrentBreadCrumpPath = () => {
        let paths = [{
            href: "/",
            title: "Homepage"
        }];
        const path = (window.location.pathname || "").split("/");
        Object.entries(ROUTES).forEach((route: any) => {
            path.forEach(endpoint => {
                if(route[0].toUpperCase() === endpoint.toUpperCase()) {
                    paths.push({
                        href: route[1].path,
                        title: Func.capitalizeFirstLetter(endpoint)
                    });
                }
            });
        });
        return paths;
    }


    return (
        <Wrapper className={clsx(" container", className, !className && "mb-5")} {...rest}>
            <AntLayout className="row furniture_page-layout p-0 p-5">
                {
                    title && <Wrapper className="justify-content-center w-100 mb-5">
                        {
                            <span className={clsx(sider ? "ml-50" : "ml-40","h1 w-100 font-weight-bold furniture_page-layout__title")}>
                                {title}
                            </span>
                        }
                    </Wrapper>
                }
                {
                    breadcrumb && <Breadcrumb className={clsx("mb-4 col-12", breadcrumpClassname || "ml-5")}>
                        {
                            breadcrumbs.map((item, index) => <Breadcrumb.Item key={item.match.url}>
                                    {
                                        index === breadcrumbs.length - 1 ? <span className="furniture_page-layout__breadcrumb">{item.breadcrumb}</span> : 
                                            <Link className="furniture_page-layout__breadcrumb" to={item.match.url}>{item.breadcrumb}</Link>
                                    }
                                </Breadcrumb.Item>
                            )
                        }
                    </Breadcrumb>
                }
                {
                   sider && <Sider theme="light" className="p-4 mr-5">
                        {sider}
                    </Sider>
                }
                {
                    <Content className={clsx(contentClassname)}>
                        {children}
                    </Content>
                }
            </AntLayout>
        </Wrapper>
        
    )
}

export default Layout;