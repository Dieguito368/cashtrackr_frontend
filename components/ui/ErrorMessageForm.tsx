import React from 'react'

const ErrorMessageForm = ({ message } : { message: string }) => {
    return (
        <div className=" text-red-700 font-bold px-5 py-2 rounded text-sm border-l-4">{ message }</div>
    )
}

export default ErrorMessageForm;