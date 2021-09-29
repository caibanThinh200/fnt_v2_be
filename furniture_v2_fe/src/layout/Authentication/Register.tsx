import clsx from "clsx"
import Wrapper from "../../Component/Wrapper";
import Form, {FormItem} from "../../Component/Form"
import TAG_DEFINE, { formButtonLayout } from "../../constant/tagDefine";
import Input from "../../Component/Input";
import { getRestProps } from "../../Util/functions";
import { FormInstance } from "antd";

interface Props extends Omit<getRestProps, "restProps"> {
    title: string,
    className?: string,
    form: FormInstance
}

const Register: React.FC<Props> = (props: any) => {
    const submitRegister = (data: any) => {
        
    }
    return <Wrapper className={clsx(props.className, "p-3")}>
        <Wrapper>
            <span className="h3">Form {props.title}</span>
        </Wrapper>
        <Wrapper className="mt-3 p-3 pl-5 pr-5">
            <FormItem name="name" label={TAG_DEFINE.PAGE.CUSTOMER.fullname.title}>
                    <Input/>
                </FormItem>
                <FormItem name="phone" label={TAG_DEFINE.PAGE.CUSTOMER.phoneNum.title}>
                    <Input/>
                </FormItem>
                <FormItem name="email" label={TAG_DEFINE.PAGE.CUSTOMER.email.title}>
                    <Input/>
                </FormItem>
                <FormItem name="address" label={TAG_DEFINE.PAGE.CUSTOMER.address.title}>
                    <Input/>
                </FormItem>
                <FormItem name="password" label={TAG_DEFINE.PAGE.CUSTOMER.password.title}>
                    <Input/>
                </FormItem>
                <FormItem {...formButtonLayout}>
                    <button className="btn btn-dark">
                        {TAG_DEFINE.PAGE.CUSTOMER.auth.register.title}
                    </button>
                </FormItem>
        </Wrapper>
    </Wrapper>
}

export default Register