import clsx from "clsx";
import Form, {FormItem} from "../../Component/Form";
import Wrapper from "../../Component/Wrapper";
import Input from "../../Component/Input";
import TAG_DEFINE, {formButtonLayout} from "../../constant/tagDefine";

const Login: React.FC = (props: any) => {
    return <Wrapper className={clsx(props.className, "p-3")}>
        <Wrapper>
            <span className="h3">Form {props.title}</span>
        </Wrapper>
        <Wrapper className="mt-3 p-3 pl-5 pr-5">
                <FormItem name="email" label={TAG_DEFINE.PAGE.CUSTOMER.email.title}>
                    <Input/>
                </FormItem>
                <FormItem name="password" label={TAG_DEFINE.PAGE.CUSTOMER.password.title}>
                    <Input/>
                </FormItem>
                <FormItem {...formButtonLayout}>
                    <button type="submit" className="btn btn-dark mr-4">
                        {TAG_DEFINE.ACTION.confirm}
                    </button>
                    <button onClick={() => props.handleTabChange(TAG_DEFINE.PAGE.CUSTOMER.auth.register.key, null)} className="btn btn-light">
                        {TAG_DEFINE.PAGE.CUSTOMER.auth.register.title}
                    </button>
                </FormItem>
        </Wrapper>
    </Wrapper>
}

export default Login