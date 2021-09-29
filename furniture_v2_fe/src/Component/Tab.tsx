import {Tabs as AntTab} from "antd";
import { getRestProps } from '../Util/functions';

interface Props extends Omit<getRestProps, "restProps"> {
    tabsPane?: any
}

const Tabs: React.FC<Props> = (props: Props) => {
const { TabPane } = AntTab;

return <AntTab {...props} activeKey={props.active}>
        {
            (props.tabsPane || []).length > 0 && (props.tabsPane || []).map((item: any, index: number) => (
                <TabPane {...item}
                    tab={item.tab} 
                    key={item.key || index}   
                >
                    {item.component}
                </TabPane>
            ))
        }
    </AntTab>
}
export default Tabs;