import { ROUTES } from "./Routes";
import {Switch, useLocation} from "react-router-dom"
import React from "react"
import PrviateRoute from "./PrivateRoute";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

const Section = (props: any) => {
    const [routes, setRoutes] = React.useState([]),
    location= useLocation();

    React.useEffect(() => {
        setRoutes(Object.values(ROUTES));
    }, [])
    
    return (
        <TransitionGroup>
            <CSSTransition 
                key={location.key}
                classNames="fade"
                timeout={300}>
                <Switch>
                    {
                        routes.length > 0 && routes.map((item, index) => <PrviateRoute key={index} {...item} {...props}/>)
                    }
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
} 

export default Section;