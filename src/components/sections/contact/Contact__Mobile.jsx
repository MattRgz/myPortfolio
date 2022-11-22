import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import ContactStyles__Mobile from "./ContactStyles__Mobile.scss";
import githubContact from '../../../assets/images/githubIconMobile.png';
import linkedInContact from '../../../assets/images/linkedInIconMobile.png';
import mailContact from "../../../assets/images/mailContact.png";
import {useForm} from "react-hook-form";
import {Link} from "react-scroll";
import { useRef } from 'react';
import Swal from 'sweetalert2'

const ContactMobile = () => {
    const form = useRef();
    const [formActive, setFormActive] = useState(false);
    const activatingForm = () =>{
        setFormActive(!formActive)
    }
    const {register, handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (e) =>{
        console.log(e);
        emailjs.sendForm('service_tfnbbq8', 'template_1cwfvoq', form.current, 'jaBmdcSrJfSOGJSvE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      Swal.fire(
        '¡Muchas gracias!',
        'Correo enviado de manera exitosa.',
        'success'
      )
      form.current.reset();
    }
    return (
        <div className='contactContainer'>
            <div className={`${'contactTextContainerMobile'}  ${formActive?'contactTextContainerActivated':'contactTextContainerDesactivated'}`}>
                <h1 className='letsTalkText'>
                    Let<span>'</span>s talk<span>!</span>
                </h1>
                <div>
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
            </div>
            <div style={{height:"200px", position:"relative", top:"0",width:'100%'}}>
                    <div className={` ${"formContainerMobile"} ${formActive?'showForm':'hideForm'}`}>
                        <form onSubmit={handleSubmit(onSubmit)} ref={form} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',height:'100%',width:'100%'}}>
                            <div  className='inputBoxes'>
                                <div className='dataBoxes'>
                                    <label>Name:</label>
                                    <input type="text" {...register('userName',
                                    {required:true,
                                    maxLength:20
                                    })} />
                                </div>
                                <div className='errorBoxes' >
                                    {errors.userName?.type === 'required' && <p>Required field!</p>}
                                    {errors.userName?.type === 'maxLength' && <p>No more than 20 characters!</p>}
                                </div>
                            </div>
                            <div className='inputBoxes'>
                                <div className='dataBoxes'>
                                    <label>E-mail:</label>
                                    <input type="email" {...register('userMail',
                                    {required:true,
                                        pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                                    })} />    
                                </div>
                                <div className='errorBoxes'>
                                    {errors.userMail?.type === 'required' && <p>Required field!</p>}
                                    {errors.userMail?.type === 'pattern' && <p>Please, enter a valid E-Mail!</p>}
                                </div>
                            </div>
                            <div className='textAreaBoxMobile'>
                                <div className='textAreaDataBoxes'>
                                    <label>Message:</label>
                                    <textarea {...register('message',
                                    {required:true,
                                    maxLength:100
                                    })} />
                                </div>
                                <div className='textAreaErrorBox'>
                                    {errors.message?.type === 'required' && <p>Required field!</p>}
                                    {errors.message?.type === 'maxLength' && <p>No more than 100 characters!</p>}
                                </div>
                            </div>
                            <div style={{width:'center', height:'30%'}}>
                                <input className='inputBtn' type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
            </div>
            <Link className='toTheTopBtn' style={{cursor:"pointer"}} to="homeId" spy={true} smooth={true} offset={-150} duration={700}>
                <p>
                    Take me to the top!
                </p>
                <div className="arrow">
                    <div>
                        <span className='leftArrowPart'></span>
                        <span className='rightArrowPart'></span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ContactMobile;
