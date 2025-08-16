type ResponseMessageProps = {
    ok: boolean
    message: string
}

const ResponseMessage = ({ ok, message } : ResponseMessageProps) => {
    if(!message) return null

    return (
        <div 
            className={ `
                ${ok ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700 " }
                font-bold px-5 py-4 rounded border-l-4
                ` }
        >{ message }</div>
    )
}

export default ResponseMessage;