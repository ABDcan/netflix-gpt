export const checkValidateData = (email,password) => {
    console.log(email);
    console.log(password);
   
    const isemailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemailvalid){
        return "Email is not valid";
    }
    if(!ispasswordvalid){
        return "Password invalid";
    }
   
    return null;
} 