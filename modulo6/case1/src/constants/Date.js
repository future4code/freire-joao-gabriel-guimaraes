

export const changeDate = (date) => {
    const newDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear() 
    return newDate
}