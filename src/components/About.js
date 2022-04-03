import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className='lead mb-4'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi optio deleniti fugiat quasi unde eveniet consectetur officiis. Enim non quasi aperiam cumque magnam vitae iste repellendus, commodi iure ullam adipisci eaque officiis praesentium ipsa voluptas debitis! Nostrum provident, omnis porro magnam id corporis ab quibusdam enim ut quo reiciendis atque dolorum. Vel similique quidem exercitationem quibusdam reiciendis neque? Corrupti ad voluptatem optio accusantium ipsum fuga exercitationem alias reprehenderit minus necessitatibus. Eum, debitis eligendi. Praesentium, dolorum amet. Eaque ipsa numquam fugit quo ad optio, maiores sunt, amet voluptatum ipsum incidunt id, reiciendis tempore iste ea doloribus. Et omnis dolor nostrum!
                        </p>
                        <NavLink to='/contact' className='btn btn-outline-primary mb-5 px-3'>Contact Us</NavLink>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <img src='' alt='' height='400px' width='400px' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;