import { Button, Divider, Tag } from "antd";
import Form, {FormItem} from "../../Component/Form";
import Input from "../../Component/Input";
import Wrapper from "../../Component/Wrapper";
import TAG_DEFINE from "../../constant/tagDefine";
import { getRestProps } from '../../Util/functions';

interface Props extends Omit<getRestProps, "restProps"> {

}

const ContactBox: React.FC = props => {
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    },
    buttonLayout = {
        wrapperCol: {
          span: 14,
          offset: 8,
        }
    }
    return <Wrapper shadow className="p-4">
        <Wrapper>
            <p className="h4 m-0 furniture-cart__title font-weight-bold">{TAG_DEFINE.PAGE.CART.contactInfo}</p>
        </Wrapper>
        <Wrapper className="mt-5">
            <Form {...layout}>
                <FormItem label={TAG_DEFINE.PAGE.CUSTOMER.fullname.title}>
                    <Input/>
                </FormItem>
                <FormItem label={TAG_DEFINE.PAGE.CUSTOMER.phoneNum.title}>
                    <Input/>
                </FormItem>
                <FormItem label={TAG_DEFINE.PAGE.CUSTOMER.email.title}>
                    <Input/>
                </FormItem>
                <FormItem label={TAG_DEFINE.PAGE.CUSTOMER.address.title}>
                    <Input/>
                </FormItem>
                <FormItem label={TAG_DEFINE.PAGE.CUSTOMER.note.title}>
                    <Input type="textArea"/>
                </FormItem>
                <FormItem {...buttonLayout}>
                    <button className="btn btn-success mt-4">
                        {TAG_DEFINE.PAGE.ORDER.confirmInfo}
                    </button>
                </FormItem>
                
            </Form>
        </Wrapper>
    </Wrapper>
}

export default ContactBox;