import { Tree as AntTree } from "antd";
import { useEffect, useState } from "react";
import {generateDataToTree, getNodePath, hasPath, endingAt} from "../Util/functions";
import React from 'react'

interface Props {
    data: any, 
    onSelectors: any, 
    onExpanding: any
}

const Tree: React.FC<Props> = ({data, onSelectors, onExpanding, ...rest}: Props) => {
    const [dataTree, setDataTree] = useState([]),
    [currentTree, setCurrentTree] = useState({}),
    [path , setPath] = useState("");

    useEffect(() => {
        let newData = generateDataToTree(data);
        setDataTree(newData);
    }, [data]);

    useEffect(() => {
        setCurrentTree({
            key: 0,
            children: generateDataToTree(data)
        })
    }, [data])
    
    const generateDataToTree = (data: any) => {
        const treeModel = data.length > 0 && data.map((item: any) => 
            ({
                title: item.title,
                key: item.key,
                children: !!item.select && generateDataToTree(item.select) || []
            })
        );
        return treeModel;
    }

    const onSelect = async (selectedKeys: any, info: any) => {
        const pathResult = await Promise.all([endingAt(currentTree, selectedKeys[0]).next().value]);
        return onSelectors({
            title: info.node.title,
            keys: selectedKeys,
            tabInfo: info,
            path: pathResult[0],
            treeDataModel: currentTree
        }) 
    }
    
    const onExpand = (expandKey: any, info: any)=> {
        return onExpanding({
            title: info.node.title,
            keys: expandKey,
            tabInfo: info,
            treeDataModel: currentTree
        })
    }

    return (
        <AntTree {...rest} 
            onExpand={onExpand} 
            onSelect={(selectedKeys, info) => onSelect(selectedKeys, info)}
            treeData={dataTree}
        />
    )
}

export default Tree;