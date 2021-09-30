import { Input as AntInput, InputNumber as AntInputNumber } from "antd"
import { getRestProps } from "../Util/functions"

interface Props extends Omit<getRestProps, "restProps"> {
    
}

const Input: React.FC<Props> = (props: Props) => {
    switch(props.type) {
        case "number": {
            return <AntInput type="number" {...props}/>
        }
        case "textArea": {
            return <AntInput.TextArea {...props}/>
        }
        default: {
            return <AntInput {...props}/>
        }
    }
}

export default Input;