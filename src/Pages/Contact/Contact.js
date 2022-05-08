import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <h1 className="section-title">Contact Me</h1> <br />

                <div className="contact-container">
                    <form>
                        <div>
                            <div className="left">
                                <label for="fullname">Name </label>
                            </div>
                            <div className="right">
                                <input type="text" name="fullname" id="person-name" required />
                                <label for="user" className="fa fa-user input-icon"></label>
                            </div>
                        </div>
                        <div>
                            <div className="left">
                                <label for="email">Email </label>

                            </div>
                            <div className="right">
                                <input type="text" name="email" required />
                                <label for="email" className="far fa-envelope-open input-icon"></label>
                            </div>
                        </div>

                        <div>
                            <div className="left">
                                <label for="message">Message </label> <br />
                            </div>
                            <div className="right">
                                <textarea name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="left">

                            </div>
                            <div className="right">
                                <button className="contact-button" type="submit">Submit</button>
                                <button className="contact-button" type="reset">Reset</button>
                            </div>
                        </div>


                    </form>
                </div>

            </section>
        </div>
    );
};

export default Contact;