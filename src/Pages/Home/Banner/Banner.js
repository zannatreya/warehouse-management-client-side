import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/Background (1).png';
import banner2 from '../../../images/Background (4).png';
import banner3 from '../../../images/Background.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className='d-flex justify-content-center'>
                        <div className='mt-5'>
                            <h1 className='text-primary'>FruitLab</h1>
                            <p className='fs-5 fw-light font-monospace"'>
                                Fruit is the sweet, fleshy, edible part of a plant.
                                It generally contains seeds.What are the importance of fruits?
                                Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber.
                                Fruits also provide a wide range of health-boosting antioxidants, including flavonoids.
                                Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.
                            </p>
                            <a href="/blogs">
                                <button class="btn-design mb-5">Check me</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner3} height={450}
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner2} height={450}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner1} height={450}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    );
}




export default Banner;