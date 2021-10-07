import { Dispatch, useEffect, useState } from "react";
import Modal from "../../Component/Modal"                                                                                                                                                 
import Wrapper from "../../Component/Wrapper";
import TAG_DEFINE from "../../constant/tagDefine";
import Login from "./Login";
import Register from "./Register";
import "../../style/auth.scss"
import { getRestProps } from '../../Util/functions';
import { registerAction, loginAction } from '../../action/authAction';
import { connect } from "react-redux";
import Form, {Function} from "../../Component/Form";
import Tabs from "../../Component/Tab";
import { Action } from 'redux';
import { Tabs as AntTab } from 'antd';
import React from 'react'

interface Props extends Omit<getRestProps, "restProps"> {
    visible: boolean
    onOK?: void
    onCancel?: any
}

const Authentication: React.FC<Props> = (props: any) => {
    const [form] = Function.useForm(),
    [isModalOpen, setIsModalOpen] = useState(props.visible),
    [action, setAction] = useState(props.action)

    useEffect(() => {
        setAction(props.action)
    }, [props.action]);

    useEffect(() => {
        if(props.auth.isRegistered) {
            setAction(TAG_DEFINE.PAGE.CUSTOMER.auth.login.key);
            form.setFieldsValue(null);
        }
    }, [props.auth.isRegistered])
    useEffect(() => {
        if(props.auth.isLogged) {
            form.setFieldsValue(null);
            setIsModalOpen(false);
        }
    }, [props.auth.isLogged])

    useEffect(() => {
        setIsModalOpen(props.visible);
    }, [props.visible]);

    const submitAuth = (data: any) => {
        if(action === TAG_DEFINE.PAGE.CUSTOMER.auth.register.key) {
            props.registerAction(data);
        } else {
            props.loginAction(data);
        }
    }

    const onTabChange = (key: string, e: MouseEvent) => {
        setAction(key);
    }
    
    const onFieldsChange = (e: any) => {
        //console.log(e);
    }
    return <Modal {...props} 
                visible={isModalOpen}
                footer={null}>
        <Wrapper>
            <Form onFieldsChange={onFieldsChange} onFinish={submitAuth} form={form}>
                <Tabs animated
                    active={action}
                    onTabClick={onTabChange}
                    tabsPane={[
                        {
                            component: <Login {...props}
                                handleTabChange={onTabChange}
                                title={TAG_DEFINE.PAGE.CUSTOMER.auth.login.title}
                                form={form} 
                                className="furniture_auth"/>,
                            key: "login",
                            tab: TAG_DEFINE.PAGE.CUSTOMER.auth.login.title
                        },
                        {
                            component: <Register {...props}
                                title={TAG_DEFINE.PAGE.CUSTOMER.auth.register.title}
                                form={form}
                                className="furniture_auth"/>,
                            key: "register",
                            tab: TAG_DEFINE.PAGE.CUSTOMER.auth.register.title
                        }
                    ]}/>
            {/* {
                props.title === TAG_DEFINE.PAGE.CUSTOMER.auth.login.title ? 
                    <Login {...props} 
                        form={form}
                        className="furniture_auth"/> : 
                    <Register {...props}
                        form={form} 
                        className="furniture_auth"/>
            } */}
            </Form>
        </Wrapper>
    </Modal>                                                                                            
}

export default Authentication;