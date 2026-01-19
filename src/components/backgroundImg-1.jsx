//import styles from '../styles/backgroundImg-1.module.css';

export function BackgroudImg1() {
    return( 
        
			<section className='Sec-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/Images/barbearia.jpg)`}}>
				<div className='section-img'>
					<div className='division-img'>
						<h2>Making You Look Good <br></br>Is In Our Haritage</h2>
						<p>Barber is a person whose occupation is mainly to cut dress groom
							style and shave men's and boys hair.</p>
						<div>
							<a href="#Appontament" className='btn-s'> MAKE APPONTAMENT </a>
						</div>
					</div>

				</div>


			</section>
    );
}
