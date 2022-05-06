import React from 'react';
import './CustomerSays.css';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { GrStar } from 'react-icons/gr';
import customer1 from '../../../images/customer1.png';
import customer2 from '../../../images/customer2.png';
import customer3 from '../../../images/customer3.png';

const CustomerSays = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <h3 className='text-center happy-title'>Happy Clients <BiHappyHeartEyes className='happy-icon' /></h3>
                <div className="col-md-4 col-12 g-4">
                    <div className='customer-says mt-5'>
                        <div className='happy-client'>
                            <div className='client-say'>
                                <div className='d-flex justify-content-center single-pic'>
                                    <img src={customer1} alt="" className='img-fluid client-pic' />
                                </div>
                                <div className='text-center client-info'>
                                    <h5>pushpa dey</h5>
                                    <p>
                                        <b>Status:</b> <span className='headline'>Online Services.</span>  We are satiesfied from his services. So
                                        my family members want to say that, Thanks.
                                    </p>
                                    <p>
                                        <b>Rating:</b> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className='customer-says mt-5'>
                        <div className='special'>
                            <div className='d-flex justify-contebt-center single-pic'>
                                <img src={customer2} alt="" className='img-fluid client-pic' />
                            </div>
                            <div className='text-center client-info'>
                                <h5>Lima john</h5>
                                <p>
                                    <b>Status:</b> <span className='headline'>Home Services.</span>  We are satiesfied from his services. So
                                    my family members want to say that, Thanks.
                                </p>
                                <p>
                                    <b>Rating:</b> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 g-4">
                    <div className='customer-says mt-5'>
                        <div className=''>
                            <div className='d-flex justify-contebt-center single-pic'>
                                <img src={customer3} alt="" className='img-fluid client-pic' />
                            </div>
                            <div className='text-center client-info'>
                                <h5>Nubaied Ibrar</h5>
                                <p>
                                    <b>Status:</b> <span className='headline'>Hospital Services.</span>  We are satiesfied from his services. So
                                    my family members want to say that, Thanks.
                                </p>
                                <p>
                                    <b>Rating:</b> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' /> <GrStar className='fullstar' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerSays;