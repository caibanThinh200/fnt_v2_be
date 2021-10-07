import { Collapse as AntCollapse } from "antd"
import { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode,
    data: any
}
import React from 'react'
const Collapse: React.FC<Props> = ({children, data, ...rest}: Props) => {
    const [dataPanel, setDataPanel] = useState(data);
    
    useEffect(() => {
        setDataPanel(data)
    }, [data]);
    
    return <AntCollapse {...rest}>
        {
            dataPanel.categories.map((item: any, key: string) => 
                <AntCollapse.Panel key={key} header={item.title}>
                    {children}
                </AntCollapse.Panel>
            )
        }
    </AntCollapse>
}

export default Collapse;