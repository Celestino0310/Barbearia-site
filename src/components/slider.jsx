import React, { useState, useRef } from "react";
//

export function Slider() {

 
        const [imgAtiva, setImgAtiva] = useState(1);
        // corrige esses erros ai 
        useRef();

        const imagens = [
            { src: './Images/about-2.jpg', alt: 'Our hair style enhances your smile' },
            { src: './Images/about-1.jpg', alt: 'Lorem ipsum dolor sit amet ' },
            { src: './Images/barbearia3.png', alt: 'lorem ipsum dolor sit amet sit alert' }
        ];


        const avancar = () => {
            setImgAtiva((prev) => (prev + 1) % imagens.length);
        };

        const voltar = () => {
            setImgAtiva((prev) => (prev - 1 + imagens.length) % imagens.length);
        };

        return (


            <section className='slider'>
                <div className='interface'>
                    <div className="slider-container">
                        {imagens.map((img, index) => (
                            <div key={index} className={`slider-box ${index === imgAtiva ? 'ativo' : ''}`}>
                                <img src={`${process.env.PUBLIC_URL}${img.src}`} alt={img.alt} />
                                <div className='texto-slider'>
                                    <h2>{img.alt}</h2>
                                    <p>Your Style, Our Passion</p>



                                    <a href="#Appontament" className='btn-s'> MAKE APPONTAMENT </a>
                                </div>
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