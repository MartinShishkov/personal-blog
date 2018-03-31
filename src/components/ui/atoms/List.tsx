import * as React from "react";

export interface IListItem{
    text: string;
    children?: IListItem[];
}

export interface IListProps{
    items: IListItem[];
    className?: string;
    style?: object;
    itemStyle?: object;
    itemClassName?: string;
}

export const List = (props: IListProps) => {
    return (
        <ul className={props.className} style={props.style}>
            {
                props.items.map((item, i) => 
                    <li className={props.itemClassName}
                        style={props.itemStyle}
                        key={i}
                    >
                        {item.text}
                        {
                            item.children && (
                                <List items={item.children}/>
                            )
                        }
                    </li>
                )
            }
        </ul>
    );
}