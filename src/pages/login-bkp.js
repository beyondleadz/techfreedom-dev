import React, {useState}from "react";
//import { useNavigate } from "react-router-dom";
import {postMethod,getMethod} from "../services/HttpServices"

const Login1 = () => {
    // const [userName,setUserName] = useState();
    // const[password,set]
    const [form,setForm] = useState()
    const [errorObj,setError] = useState()
    //const navigate=useNavigate();
    const onChange=(ele)=>{
        setForm({
            ...form,
            [ele.target.name]:ele.target.value
        })
        //setError({});
    }
    const submitForm = () => {
        let errObj = {}
        if(!form?.userName){
            errObj = {
                ...errObj,
                userName:"Please enter username"
            }
        }
        if(!form?.password){
            errObj = {
                ...errObj,
                password:"Please enter password"
            }
        }
        setError(errObj)
        if (Object.keys(errObj).length === 0) {
               //calling API  
               console.log(form);
               postMethod("/signin.php",form).then((res)=>{
                if(res.data.id_token){
                    sessionStorage.setItem("token",res.data.id_token);
                    //navigate("/company",{});
                    window.location.href=`${window.location.href}company`           
                }else{
                setError({error:"Invalid Credentials"});
                setForm({userName:"",password:""})        
                console.log(res.data.id_token);
                }
               }).catch((error)=>{
                    console.log(error);
               })                
        }
    }

    return (
        <section className="sign-in-up">
                <div id="page-wrapper" className="sign-in-wrapper">
                    <div className="graphs">
                        <div className="sign-in-form">
                            <div className="sign-in-form-top">
                                <p><span>Sign In to</span> <a href="index.html">Admin</a></p>
                            </div>
                            <div className="signin">
                                <div className="signin-rit">
                                    <span className="checkbox1">
                                         <label className="checkbox">Forgot Password ?</label>
                                    </span>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="">{errorObj?.error}</div>
                                <div className="log-input">
                                    <div className="log-input-left has-error">
                                       <input type="text" className="user" name="userName" value={form?.userName} onChange={onChange}/>
                                       <p class="help-block">{errorObj?.userName}</p>                                               
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="log-input">
                                    <div className="log-input-left has-error">
                                       <input type="password" className="lock" name="password" value={form?.password}  onChange={onChange}/>
                                       <p class="help-block">{errorObj?.password}</p>    
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <button className="submit" onClick={submitForm}>Login to your account</button>
                            </div>
                            <div className="new_people">
                                <a href="sign-up.html">Register Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                   <p>&copy 2015 Easy Admin Panel. All Rights Reserved | Design by <a href="https://w3layouts.com/" target="_blank">w3layouts.</a></p>
                </footer>
        </section>
    )
}

export default Login1;