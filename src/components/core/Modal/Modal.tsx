import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import useModal from 'hooks/useModal/useModal';
import { ModalProps } from './Modal.types';
import styles from './Modal.module.scss';


export default function Modal(props: ModalProps) {
    const { close } = useModal();
    return (
        <div className={styles?.modal}>
            <h2>Get your free quote</h2>
            <p>We will ensure a quick and hassle-free experience for you.</p>
            <section>
                <Form>
                    <FloatingLabel
                        controlId="fullName"
                        label="First & Last Name"
                    >
                        <Form.Control type="text" placeholder="John Smith" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="email"
                        label="Email"
                    >
                        <Form.Control type="email" placeholder="john@appleseed.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="phone"
                        label="Phone Number"
                    >
                        <Form.Control type="tel" placeholder="1 (555) 555-5555" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="zipcode"
                        label="Zip Code"
                    >
                        <Form.Control type="text" placeholder="99999" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="container_count"
                        label="Number of Containers"
                    >
                        <Form.Control type="text" placeholder="" />
                    </FloatingLabel>
                </Form>
            </section>
            <footer className={styles?.modalFooter}>
                <button onClick={() => close()}>Cancel</button>
                <button onClick={() => close()}>Confirm</button>
            </footer>
        </div>
    )
}