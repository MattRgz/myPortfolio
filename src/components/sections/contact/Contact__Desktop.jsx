import React,{useState} from 'react';
import ContactStyles__Desktop from "./ContactStyles__Desktop.scss";
import githubContact from "../../../assets/images/githubContact.png";
import linkedInContact from "../../../assets/images/linkedInContact.png";
import mailContact from "../../../assets/images/mailContact.png";
import {useForm} from "react-hook-form";


const ContactDesktop = () => {
    const [formActive, setFormActive] = useState(false);
    const activatingForm = () =>{
        setFormActive(!formActive)
    }
    const {register, handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <div className='contactContainer'>
            <h1 className='letsTalkText'>
                Let<span>'</span>s talk<span>!</span>
            </h1>
            <div>
                <span></span>
                <ul>
                    <li>
                        <a href="https://github.com/MattRgz" target="_blank"  rel="noreferrer">
                            <img src={githubContact} alt="Github" />    
                        </a>
                    </li>
                    <li onClick={(e)=>activatingForm()}>
                        <img src={mailContact} alt="eMail" />
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/matiasreyesgonzalez/" target="_blank"  rel="noreferrer">
                            <img src={linkedInContact} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className={formActive?'showForm':'hideForm'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Name</label>
                                <input type="text" {...register('userName',
                                {required:true,
                                maxLength:20
                                })} />
                                <div>
                                    {errors.userName?.type === 'required' && <p>El campo es requerido.</p>}
                                    {errors.userName?.type === 'maxLength' && <p>El campo debe tener menos de 20 caracteres.</p>}
                                </div>
                            </div>
                            <div>
                                <label>Mail</label>
                                <input type="email" {...register('userMail',
                                {required:true,
                                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                                })} />
                                <div>
                                    {errors.userMail?.type === 'required' && <p>El campo es requerido.</p>}
                                    {errors.userMail?.type === 'pattern' && <p>Por favor ingrese un email valido!</p>}
                                </div>
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea {...register('message',
                                {required:true,
                                maxLength:100
                                })} />
                                <div>
                                    {errors.message?.type === 'required' && <p>El campo es requerido.</p>}
                                    {errors.message?.type === 'maxLength' && <p> El campo debe tener menos de 100 caracteres.</p>}
                                </div>
                            </div>
                            <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactDesktop;
