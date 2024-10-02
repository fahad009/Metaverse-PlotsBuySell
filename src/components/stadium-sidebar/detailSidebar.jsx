import React, {useEffect, useState} from 'react';
import {Badge, Button} from "reactstrap";
import Tippy from "@tippyjs/react";
import SectionDetails from "./sectionDetails";
import {getSeatsOfSection, getUserSeats} from "../../utils/httpService";
import {faker} from '@faker-js/faker';

const DetailSidebar = (props) => {
    const [seat, setSeat] = useState(null);
    const [seats, setSeats] = useState(null);
    const [userSeats, setUserSeats] = useState(null);

    useEffect(() => {
        
        loadSeats().then(result => {
            setSeats(result);
            loadUserSeats().then(res => setUserSeats(res));
        });
    }, []);

    const loadSeats = async () => {
        return getSeatsOfSection(props.section);
    }
    const loadUserSeats = async () => {
        return await getUserSeats(props.account);
    }

    const selectSeat = (item) => {
        
        setSeat(item + 1);
        
    }

    // let data = [
    //     {
    //         headLine: "Lower Sideline - 107",
    //         row: "17",
    //         section: "G14",
    //         seat: "Aisle seat",
    //         view: "Unrestricted View"
    //     },
    //     {
    //         headLine: "Lower Sideline - 107",
    //         row: "17",
    //         section: "G14",
    //         seat: "Aisle seat",
    //         view: "Unrestricted View"
    //     },
    //     {
    //         headLine: "Lower Sideline - 107",
    //         row: "17",
    //         section: "G14",
    //         seat: "Aisle seat",
    //         view: "Unrestricted View"
    //     },
    //     {
    //         headLine: "Lower Sideline - 107",
    //         row: "17",
    //         section: "G14",
    //         seat: "Aisle seat",
    //         view: "Unrestricted View"
    //     },
    //     {
    //         headLine: "Lower Sideline - 107",
    //         row: "17",
    //         section: "G14",
    //         seat: "Aisle seat",
    //         view: "Unrestricted View"
    //     },
    //     {
    //         headLine: "Lower Sideline - 107",
    //         row: "17",
    //         section: "G14",
    //         seat: "Aisle seat",
    //         view: "Unrestricted View"
    //     },
    // ]

    return (
        seat ? <SectionDetails section={props.section} seat={seat} setSeat={setSeat}/> :
            <div className="p-3 bg-primary text-white">
                {props.section.map((item, i) => (
                    <>
                        <Tippy content={<img
                            src={item.viewImage} alt="#"
                            className="tooltip-image"
                        />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true} animateFill={true}
                               theme="translucent">
                            <div className="">
                                <div>
                                    <h5 className="mb-0">{item.name}
                                        {item.onSale &&
                                        <span className="float-end">
                                        <Badge pill className="fw-light badge">Available</Badge>
                                        </span>}
                                        {item.ownedBy === props.account &&
                                        <span className="float-end">
                                            <Badge pill className="fw-light badge">My Seat</Badge>
                                        </span>}
                                    </h5>
                                    <p className="mb-1 small text-muted">Row {item.row},
                                        Section: {item.section}</p>
                                    <p className="mb-0"><span>{faker.address.streetAddress()}</span></p>
                                    <p className="mb-0 d-flex justify-content-between">
                                        <span>{item.section}</span></p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h4 className="my-0 mt-4"><span
                                        className="fs-6">$ </span>{item.price}</h4>
                                    <div className="">
                                        <Button color="secondary" onClick={() => selectSeat(i)}>
                                            Select
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Tippy>
                        <hr/>
                    </>
                ))}
            </div>
    );
};

export default DetailSidebar;