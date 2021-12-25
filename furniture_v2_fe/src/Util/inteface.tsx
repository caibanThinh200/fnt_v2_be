export interface getRestProps {
    [restProps: string]: any
}

export interface ApiResponse extends Omit<getRestProps, "restProps"> {
    data?: any,
    errors?: any,
    headers?: any,
    message?: string,
    request?: any,
    status?: number,
    statusText?: string,
    success?: boolean
}

export interface ReactComponentProps extends Omit<getRestProps, "restProps"> {
    className?: string,
    style?: Object,
    children?: React.ReactNode,
    key?: string | number,
    ref?: string
}