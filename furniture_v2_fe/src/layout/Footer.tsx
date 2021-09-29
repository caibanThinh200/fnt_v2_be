import Wrapper from "../Component/Wrapper";
import { Affix, Card, Descriptions } from "antd";
import "../style/footer.scss";
import clsx from "clsx";
import { getRestProps } from "../Util/functions";

interface Props extends Omit<getRestProps, "restProps"> {

}

const Footer: React.FC<Props> = props => {
    return (
        <Wrapper style={{ backgroundColor: "black"}} className={clsx("furniture_footer__wrapper w-100 p-5 h200", props.className)}>
            <Wrapper className="row">
                <Wrapper className="col text-center">
                    <h3 className="furniture_footer__title">
                        About us 
                    </h3>
                </Wrapper>
                <Wrapper className="col text-center">
                    <h3 className="furniture_footer__title">
                        About us 
                    </h3>
                </Wrapper>
                <Wrapper className="col text-center">
                    <h3 className="furniture_footer__title">
                        About us 
                    </h3>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default Footer;