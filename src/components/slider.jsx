import React, { useState } from "react";


export function Slider() {


    const [imgAtiva, setImgAtiva] = useState(1);
    // corrige esses erros ai 

    const imagens = [
        { src: './Images/about-1.jpg', alt: 'Our hair style enhances your smile' },
        { src:  './Images/Barbearia-1.jpg', alt: 'Being a barber is about taking care of your hair' },
        { src: './Images/Babearia-2.jpg', alt: 'Where mans want to look there very best' }
    ];


    const avancar = () => {
        setImgAtiva((prev) => (prev + 1) % imagens.length);
    };

    const voltar = () => {
        setImgAtiva((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    return (


        <section id="home" className='slider'>
            <div className='interface'>
                <div className="slider-container">
                    {imagens.map((img, index) => (
                        <div key={index} className={`slider-box ${index === imgAtiva ? 'ativo' : ''}`}>
                            <img src={`${process.env.PUBLIC_URL}${img.src}`} alt={img.alt} />
                            <div className='texto-slider'>
                                <h3>Welcome to BarberShop</h3>
                                <h2>{img.alt}</h2>
                                <p>our barbershopis the territory created purely for males who appreciate premium quality,<br></br>times and flawless look.</p>



                                <a href="#appontament" className="btn-slider">
                                    MAKE APPOINTMENT
                                </a> </div>
                        </div>
                    ))}
                </div>

                <div className='setas'>
                    <button onClick={voltar}><i className="bi bi-caret-left-fill"></i></button>
                    <button onClick={avancar}><i className="bi bi-caret-right-fill"></i></button>
                </div>
            </div>
        </section>

    );

}    