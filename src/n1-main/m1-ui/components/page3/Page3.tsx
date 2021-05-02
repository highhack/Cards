import React, {ChangeEvent, useCallback, useState} from 'react';
import {Button} from '../../common/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../m2-bll/store';
import {forgotPasswordTC, RequestStatusType} from '../../../m2-bll/forgotReducer';

const Page3 = React.memo(function ForgotPassword() {
    const [value, setValue]= useState<string>("")
    const handleChange =(e:React.FormEvent<HTMLInputElement>)=> {
        if (e.currentTarget.value && e.currentTarget.value.trim() !== ""){
            debugger
            setValue(e.currentTarget.value);
        }
    }
    const statusApp =useSelector((store: AppRootStateType):RequestStatusType =>store.forgotPassword.status );
    const serverError =useSelector((store: AppRootStateType):string|null =>store.forgotPassword.error);
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        debugger
        dispatch(forgotPasswordTC(value))}, [value])

    return (
        <div style={{marginTop:"25px"}}>
            Enter your email
            {(statusApp==="loading")?<div style={{color:"blue"}}>Loading...</div>:null}
            <input type="email" value={value} onChange={handleChange} style={{display:"block",    marginLeft: "auto", marginRight:'auto', marginBottom:"5px", marginTop:"5px"}}/>
            {(statusApp==="succeeded")?<div style={{color:"green"}}> Please check your inbox</div>:null}
            {serverError && <div style={{color:"red"}}>{serverError}</div>}
            <Button size={'small'} label={"Forgot Password"} backgroundColor={"rgb(100 214 124)"} onClick={onClick}/>
        </div>
    );
})

export default Page3;