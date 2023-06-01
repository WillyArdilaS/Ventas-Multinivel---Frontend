import ReactModal from 'react-modal';
import {useState} from 'react';
import axios from 'axios';

const ModalPassword = ({setModalOpen, name, lastName}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const closeModal = (e) => {
        e.preventDefault();
        if(oldPassword.length > 0 && newPassword.length > 0) {
            axios.post('http://localhost:8080/api/auth/database_password_restore', null, {params:{username:(name+"_"+lastName), oldPassword:oldPassword, newPassword:newPassword}})
            .then(res => {
                console.log(res);
                if("codeError" in res.data) {
                    alert("Error: " + res.data.codeError + "\n" + res.data.message);
                } else {
                    alert("Contraseña reestablecida");
                    setModalOpen(false);
                }
            })
            .catch(err => {
                console.log(err);  
            })
        } else {
            alert("Por favor complete todos los campos");
        }
    };
  
    return (
        <ReactModal isOpen={true} onRequestClose={closeModal} className="outline-none">
            <main className="container flex justify-center mx-auto mt-60 2xl:mt-72">
                <article id="restorePassword" className={`w-3/4 2xl:w-1/4 xl:w-1/3 lg:w-1/3 md:w-2/5 sm:w-2/3 absolute rounded-t-2xl shadow-xl rounded-b-xl bg-gradient-to-b 
                from-lightGreen to-darkGreen `}>
                    <form className="mt-6">
                    <div id="form-oldPassword" className="flex justify-center">
                            <label htmlFor="oldPassword"></label>
                            <input type="password" name="oldPassword" id="oldPassword" placeholder="Ingrese su antigua contraseña" value={oldPassword} required
                            className="w-3/4 mt-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setOldPassword(e.target.value)}/>
                        </div>

                        <div id="form-newPassword" className="flex justify-center">
                            <label htmlFor="newPassword"></label>
                            <input type="password" name="newPassword" id="newPassword" placeholder="Ingrese su nueva contraseña" value={newPassword} required
                            className="w-3/4 mt-8 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setNewPassword(e.target.value)}/>
                        </div>

                        <section id="form-nutton" className="flex justify-center pb-8 mx-10 mt-10">
                            <input type="button" id="button-restore" value="Reestablecer contraseña" onClick={closeModal}
                            className={`w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
                            hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                        </section>
                    </form>
                </article>
            </main>
        </ReactModal>
    );
}

export default ModalPassword;