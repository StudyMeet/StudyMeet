import React, { useState } from 'react';
import { PropsWithChildren } from "react";
import { Tab } from '../Tab';
import { UITabGroup } from "./UITabGroup";

interface Props {}

export function TabGroup(props: PropsWithChildren<Props>) {
    const [activeTab, setActiveTab] = useState<number>(0);
    
    const onSelect = (tabIndex: number) => setActiveTab(tabIndex);

    const childrenWithProps = React.Children.map<React.ReactNode, React.ReactNode>(props.children, (child, index) => {
        if (React.isValidElement(child)) {
            if (child.type === Tab) {
                return React.cloneElement(child, { ...props, index, onSelect, activated: activeTab === index })
            }

            return child;
        }

        return child;
    })

    console.log("Active: " + activeTab);

    return (
        <UITabGroup>{childrenWithProps}</UITabGroup>
    )
}