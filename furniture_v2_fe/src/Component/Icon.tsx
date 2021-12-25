import { HomeOutlined, DeleteOutlined, LogoutOutlined, UserOutlined, MoneyCollectOutlined } from "@ant-design/icons"
import React from "react";
import { getRestProps } from "../Util/functions";

interface Props extends Omit<getRestProps,"restProps"> {
    type: string,
    [rest: string]: any
}

const Icon: React.FC<Props> = (props: any) => {
    switch (props.type) {
        case "logo" : {
            return (
                <HomeOutlined {...props}/>
            )
        }
        case "delete" : {
            return ( 
                <DeleteOutlined {...props}/>
            )
        }
        case "logout" : {
            return (
                <LogoutOutlined {...props}/>
            )
        }
        case "profile" : {
            return (
                <UserOutlined {...props}/>
            )
        }
        case "cash" : {
            return (
                <MoneyCollectOutlined {...props}/>
            )
        }
        default: return null
    }
}

export default Icon;