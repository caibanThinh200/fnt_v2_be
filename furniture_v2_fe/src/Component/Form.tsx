import React from 'react';
import {Form as AntForm} from 'antd';
import { getRestProps } from '../Util/functions';
// import './styles.less';
interface Props extends Omit<getRestProps, "restProps"> {
    className?: string,
    children: any
}

const Form: React.FC<Props> = (props: Props) => {
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    return (
        <AntForm {...props.layout || layout} {...props} className={`${props.className ? props.className : ""}`}>{props.children}</AntForm>
    )
}
export default Form;
export const Function = AntForm;
export const FormItem = AntForm.Item;
