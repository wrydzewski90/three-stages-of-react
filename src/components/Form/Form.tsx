import React from 'react';
import '../Form/Form.scss';

const Form = () => {
    return (
        <div className="form-wrapper">
            <div className="wrapper-form">
                <div className="form-description">
                    <p className="first-description-form">
                        Write to me if you are <br /> interested cooperation
                    </p>
                    <p className="name-description">Wiktor Rydzewski</p>

                    <p className="form-email">laplaya18@gmail.com</p>
                </div>

                <form action="https://formspree.io/f/mnqobwlw" method="POST">
                    <div className="form-column">
                        <input type="text" name="name" placeholder="Enter your name" />

                        <input type="email" name="email" required placeholder="Enter your email" />
                        <textarea
                            className="textarea"
                            name="textarea"
                            placeholder="Enter your message"></textarea>

                        <button className="form-button" type="submit">
                            Prześlij
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
