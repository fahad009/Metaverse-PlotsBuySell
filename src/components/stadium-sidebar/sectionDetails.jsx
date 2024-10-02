import React, {useEffect, useState} from 'react';
import {Button} from "reactstrap";
import {getSeatDetails} from "../../utils/httpService";
import {faker} from '@faker-js/faker';

const SectionDetails = (props) => {
    const [seatDetails, setSeatDetails] = useState()

    useEffect(() => {
        loadSeatDetails().then(result => setSeatDetails(result));
    }, []);

    const loadSeatDetails = async () => {
        return await getSeatDetails(props.seat);
    }
    const goBack = () => {
        props.setSeat(null);
    }

    return (
        <div className="bg-primary text-white h-100">
            <div className="p-3">
                <Button color="secondary" onClick={goBack} className="w-100">
                    <i className="fas fa-angle-left me-2"/> Go Back
                </Button>
            </div>
            <img src={faker.image.nature(0, 0, true)} alt="#" className="img-fluid"/>
            <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="mb-0 text-muted small">Row 17</p>
                        <p className="mb-0">Seat {props.seat}</p>
                    </div>
                    <div>
                        <h4 className="mb-0"><span className="fs-5">$ </span>{faker.commerce.price(100, 200, 0)}</h4>
                    </div>
                </div>
                <hr/>
                <ul>
                    <li>{faker.lorem.words()}</li>
                    <li>{faker.lorem.words()}</li>
                    <li>{faker.lorem.words()}</li>
                    <li>{faker.lorem.words()}</li>
                </ul>
                <Button color="primary" block className="mt-5">Buy Now on ARC Marketplace</Button>
            </div>
        </div>
    );
};

export default SectionDetails;