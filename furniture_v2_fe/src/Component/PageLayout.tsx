import { Breadcrumb, Layout as AntLayout, PageHeader } from "antd";
import Wrapper from "./Wrapper";
import "../style/component/PageLayout.scss"
import clsx from "clsx";
import { ROUTES } from "../Route/Routes";
import * as Func from "../Util/functions"
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    sider?: any, 
    children: any, 
    className?: any, 
    breadcrumb?: any, 
    title?: any, 
    subTitle?: any
}

interface breadCrump {
    title: string,
    href: string
}

const Layout: React.FC<Props> = ({sider, children, className, breadcrumb, title, subTitle, ...rest}: Props)=> {
    const {Content, Sider, Header} = AntLayout;
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

    const breadCrumbPath: breadCrump[] = getCurrentBreadCrumpPath();

    return (
        <Wrapper className={clsx(className, "mt-5 container mb-5")} {...rest}>
            <AntLayout className="row furniture_page-layout p-0">
                    <Wrapper className="justify-content-center w-100 mb-5">
                        {
                            title && <span className={clsx(sider ? "ml-50" : "ml-40","h1 w-100 font-weight-bold furniture_page-layout__title")}>
                                {title}
                            </span>
                        }
                    </Wrapper>
                {
                    breadcrumb && <Breadcrumb className="mb-4 col-12 ml-5">
                        {
                            breadCrumbPath.map((bread: breadCrump, index) => 
                                <Breadcrumb.Item key={index}>
                                    {
                                        index === breadCrumbPath.length - 1
                                            ? <span className="furniture_page-layout__breadcrumb">{bread.title}</span> : <Link className="furniture_page-layout__breadcrumb" to={bread.href}>{bread.title}</Link>
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
                    <Content className=" ml-5">
                        {children}
                    </Content>
                }
            </AntLayout>
        </Wrapper>
        
    )
}

export default Layout;