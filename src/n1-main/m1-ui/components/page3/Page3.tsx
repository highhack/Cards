import React, {ChangeEvent, useState} from 'react';
import {Button} from '../../common/Button/Button';

const Page3 = React.memo(function ForgotPassword() {
    const [value, setValue]= useState<string>("")
    const handleChange =(e:React.FormEvent<HTMLInputElement>)=> {
        if (e.currentTarget.value && e.currentTarget.value.trim() !== ""){
            debugger
            setValue(e.currentTarget.value);
        }
    }
    return (
        <div style={{marginTop:"25px"}}>
            Enter your email.
            <input type="email" value={value} onChange={handleChange} style={{display:"block",    marginLeft: "auto", marginRight:'auto', marginBottom:"5px", marginTop:"5px"}}/>
            <Button size={'small'} label={"Forgot Password"} backgroundColor={"rgb(100 214 124)"} onClick={()=>{}} />
        </div>
    );
})

export default Page3;