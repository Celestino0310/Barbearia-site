import styles from '../styles/appontament.module.css';
import { useState } from 'react';
export  function Appontament() {    
   
	const[form, setForm]= useState({


		name: '',
		horario: '',
		phone: '',
		freeTime: '',
		service: '',
		barber: ''
	});
	function MudaInfo(event){
		
		event.preventDefault();
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}
	function EnviaInfo(event){
		alert('Appointment Submitted Successfully!');
		event.preventDefault();
		console.log(form);
		//Numero do WhatsApp da Barbearia
		const numeroWhats = "5516993504136";
        //mensagem a ser enviada
		const mensagem = `
		Olá Barbearia, me chamo ${form.name}.
		Sou portador do telefone ${form.phone},
		Gostaria de agendar um horário no dia ${form.freeTime} as ${form.horario}.
		com o barbeiro ${form.barber}
		para fazer ${form.service} está disponível?.
        `;

		const mensagemCodificada = encodeURIComponent(mensagem);
	    const urlWhatsApp = `https://wa.me/${numeroWhats}?text=${mensagemCodificada}`;
		//abrir o link em uma nova aba
		window.open(urlWhatsApp, '_blank');
	}

    return ( 
        
			<section id="appontament" className={styles.Appontament}>
				{/* LADO ESQUERDO */}
				<div className={styles.DivApponntament+ ' animate-on-scroll fade-in'}>

					<img
						className={styles['Img-Appontament']}
						src={`${process.env.PUBLIC_URL}/Images/Back-appontament.jpg`}
						alt="Barbearia"
					/>
				</div>
				{/* LADO DIREITO */}
				<div className={styles.Formulario + ' animate-on-scroll fade-in'}>
					<h2>Make an Appointment</h2>


					<p>
						Barber is a person whose occupation is ma`inly to cut dress groom
						style and shave men's and boys hair.
					</p>

					 <form onSubmit={EnviaInfo}>

                    <input
                        name="name"
                        value={form.name}
                        onChange={MudaInfo}
                        placeholder="Name"
                        required
                    />

                    <input
                        name="horario"
                        value={form.horario}
                        onChange={MudaInfo}
                        placeholder="Time to Appointment"
                        required
                    />

                    <input
                        name="phone"
                        value={form.phone}
                        onChange={MudaInfo}
                        placeholder="Your Phone No"

                    />

                    <input
                        name="freeTime"
						type='date'
                        value={form.freeTime}
                        onChange={MudaInfo}
                        placeholder="Date and Time"
                         required
                    />

                    <select
                        name="service"
                        value={form.service}
                        onChange={MudaInfo}
                    >
                        <option value="">Services</option>
                        <option value="hair-styling">Hair Styling</option>
                        <option value="shaving">Shaving</option>
                        <option value="face-mask">Face Mask</option>
                        <option value="hair-wash">Hair Wash</option>
                        <option value="beard-trimming">Beard Trimming</option>
                    </select>

                    <select
                        name="barber"
                        value={form.barber}
                        onChange={MudaInfo}
                    >
                        <option value="">Choose Barbers</option>
                        <option value="michel-brown">Michel Brown</option>
                        <option value="jonathan-smith">Jonathan Smith</option>
                        <option value="jack-tosan">Jack Tosan</option>
                        <option value="martin-lane">Martin Lane</option>
                    </select>

                    <button type="submit">
                        SUBMIT APPOINTMENT
                    </button>

                </form>


				</div>


			</section >
    );
}