import { Route } from "react-router-dom"
import { useEffect } from "react";

interface Props {
    component: any,
    location: any,
    getLocation: any
}

const PrviateRoute: React.FC<Props> = ({ component, location, getLocation, ...rest }: Props) => {
    useEffect(() => {
        getLocation(location);
    }, [location]);
    return <Route {...rest}>
        {component(rest)}
    </Route>
}

export default PrviateRoute;