const response = (type, message, other=null)=>{
    let obj = {
        tyep: type,
        message: message,
        data: other
    }
    return obj;
}

export { response };