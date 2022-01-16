import React from 'react';

type OptionColor = 'red' | 'default';

interface Option {
    text: string;
    icon?: JSX.Element;
    color?: OptionColor;
}

interface Props {
    options: Option[]
}

const colors: Map<OptionColor, string> = new Map([
    ['default', 'dark:text-gray-300 dark:hover:bg-red-500 dark:hover:text-white'],
    ['red', 'text-red-500 dark:hover:bg-white dark:hover:text-red-500']
]);

export function UIContextMenu({ options }: Props) {

    return (
        <div className='absolute dark:bg-black-900 bg-gray-900 rounded-md mt-2 min-w-max w-48 right-0 shadow-md'>
            { options.map((option, i) => 
                <div className={`flex justify-between first:rounded-t-md last:rounded-b-md cursor-pointer px-3 py-1 text-sm font-medium ${colors.get(option.color || 'default' )} ${ option.color && colors.get(option.color) }`} key={i}>
                    <p className='h-6'>{ option.text }</p>
                    <div className=''>
                    { option.icon && React.cloneElement(option.icon, { ...option.icon.props, className: `w-5 align-baseline ${ option.color && colors.get(option.color)}`}) }
                    </div>
                </div>
            )}
        </div>
    );
}