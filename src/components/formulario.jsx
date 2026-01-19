import styles from '../styles/formulario.module.css';

export function formulario() {
    return ( <section id="Appontament" className={styles.Appontament}>
				{/* LADO ESQUERDO */}
				<div className={styles["Div-Apponntament"]}>

					<img
						className={styles["Img-Appontament"]}
						src={`${process.env.PUBLIC_URL}/Images/barbearia3.png`}
						alt="Barbearia"
					/>
				</div>
				{/* LADO DIREITO */}
				<div className={styles.Formulario}>
					<h2>Make an Appointment</h2>


					<p>
						Barber is a person whose occupation is mainly to cut dress groom
						style and shave men's and boys hair.
					</p>

					<form>
						<input placeholder="Name" />
						<input placeholder="Your Email" />
						<input placeholder="Your Phone No" />
						<input placeholder="Your Free Time" />

						<select>
							<option>Services</option>

							<option value="hair-styling">Hair Styling</option>
							<option value="shaving">Shaving</option>
							<option value="face-mask">Face Mask</option>
							<option value="hair-wash">Hair Wash</option>
							<option value="beard-trimming">Beard Trimming</option>
						</select>

						<select>
							<option>Choose Barbers</option>
							<option value="michel-brown">Michel Brown</option>
							<option value="jonathan-smith">Jonathan Smith</option>
							<option value="jack-tosan">Jack Tosan</option>
							<option value="martin-lane">Martin Lane</option>
						</select>

						<button type="submit">SUBMIT APPOINTMENT</button>
					</form>


				</div>


			</section >
    );
}