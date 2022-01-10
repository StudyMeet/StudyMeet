import React, {PropsWithChildren} from 'react';

interface Props {

}

export function UITabGroup({ children }: PropsWithChildren<Props>) {
    return (
        <div className='flex'>
            {children}
        </div>
    )
}