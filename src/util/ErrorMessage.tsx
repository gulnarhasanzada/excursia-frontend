const ErrorMessage = (props:  {errors: string[]})=>{
    console.log(props.errors)
    return <>
        {props.errors && props.errors.map((err:string, index: number)=>{
            return <p className="text-rose-500 font-semibold" key={index}>{err}</p>
        })}</>
}

export default ErrorMessage;