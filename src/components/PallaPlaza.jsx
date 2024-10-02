import {Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import map from "../assets/images/plaza1_1.png";
import React, {useEffect, useState} from "react";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import '../assets/css/pallaPlaza.css';
import {getPlazaPlots, getUserPlazaPlots} from "../utils/httpService";
// import plaza from '../config/payload.json';
import {faker} from '@faker-js/faker';
import {useNavigate} from "react-router-dom";


export default function PallaPlaza(props) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState({modal: false});
    const [plot, setPlot] = useState(null);
    const [plots, setPlots] = useState(null);
    const [userPlots, setUserPlots] = useState(null);
    const [modal, setModal] = useState({});
    useEffect(() => {
        loadPlots().then(result => {
            setPlots(result);
            loadUserPlots().then(res => setUserPlots(res));
        });
    }, []);

    const loadPlots = async () => {
        return await getPlazaPlots();
    }
    const loadUserPlots = async () => {
        return await getUserPlazaPlots(props.account);
    }
    const toggleModal = e => setIsOpen({...isOpen, modal: !(isOpen.modal)});

    const onBlockSelected = async (_data) => {
        // const _plot = await getPlazaPlotDetail(_data);
        // setPlot(_plot);
        const fakeObject = {
            "id": _data,
            "price": faker.commerce.price(100, 200, 0),
            "ownedBy": faker.finance.ethereumAddress(),
            "onSale": true,
            "features": faker.commerce.productDescription(),
            "image": faker.image.nature(0, 0, true)
        }
        setModal(fakeObject);
        toggleModal();
    }

    return (
        <>
            <div className="main-section h-100">
                <div className="legend-sidebar">
                    <div className="fw-bold">
                        <p><i className="fas fa-square text-A1947C me-2"/> Main entrance/exit</p>
                        <p><i className="fas fa-square text-CCC5B3 me-2"/> Openings</p>
                        <p><i className="fas fa-square text-CCC5B3 me-2"/> Merchandise Store</p>
                        <p><i className="fas fa-square text-CCC5B3 me-2"/> Metaverse Plots</p>
                        <p><i className="fas fa-square text-FCD7B0 me-2"/> Empty Spaces (Offices & Stores)</p>
                    </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <TransformWrapper initialScale={1} centerOnInit={true}>
                        {({
                              zoomIn,
                              zoomOut,
                              resetTransform,
                              ...rest
                          }) => (
                            <React.Fragment>
                                <div className="tools">
                                    <ButtonGroup vertical>
                                        <Button color="light" outline onClick={e => {
                                            zoomIn()
                                            e.currentTarget.blur()
                                        }}>
                                            <i className="fas fa-plus"/>
                                        </Button>
                                        <Button color="light" outline onClick={e => {
                                            resetTransform()
                                            e.currentTarget.blur()
                                        }}>
                                            <i className="far fa-dot-circle"/>
                                        </Button>
                                        <Button color="light" outline onClick={e => {
                                            zoomOut()
                                            e.currentTarget.blur()
                                        }}>
                                            <i className="fas fa-minus"/>
                                        </Button>
                                    </ButtonGroup>
                                </div>
                                <Button color="secondary" className="btnBack" onClick={() => navigate(-1)}>
                                    <i className="fas fa-angle-left me-2"/> Go Back
                                </Button>
                                <TransformComponent>
                                    <div style={{display: 'inline', position: 'relative'}}>
                                        <img src={map} alt="#" className="fwh-image"/>

                                        <div className="pallaPlaza-sections hover">
                                            <div className="overlay-div pallaPlaza-section-1"
                                                 onClick={() => onBlockSelected("building-1")}/>
                                            <div className="overlay-div pallaPlaza-section-2"
                                                 onClick={() => onBlockSelected("building-2")}/>
                                            <div className="overlay-div pallaPlaza-section-3"
                                                 onClick={() => onBlockSelected("building-3")}/>
                                            <div className="overlay-div pallaPlaza-section-4"
                                                 onClick={() => onBlockSelected("building-4")}/>
                                            <div className="overlay-div pallaPlaza-section-5"
                                                 onClick={() => onBlockSelected("building-5")}/>
                                            {/*<div className="overlay-div pallaPlaza-section-6"*/}
                                            {/*     onClick={() => onBlockSelected("building-6")}/>*/}
                                            <div className="overlay-div pallaPlaza-section-7"
                                                 onClick={() => onBlockSelected("building-7")}/>
                                            <div className="overlay-div pallaPlaza-section-8"
                                                 onClick={() => onBlockSelected("building-8")}/>
                                            <div className="overlay-div pallaPlaza-section-9"
                                                 onClick={() => onBlockSelected("building-9")}/>
                                            <div className="overlay-div pallaPlaza-section-10"
                                                 onClick={() => onBlockSelected("building-10")}/>
                                            <div className="overlay-div pallaPlaza-section-11"
                                                 onClick={() => onBlockSelected("building-11")}/>
                                            <div className="overlay-div pallaPlaza-section-12"
                                                 onClick={() => onBlockSelected("building-12")}/>
                                            <div className="overlay-div pallaPlaza-section-13"
                                                 onClick={() => onBlockSelected("building-13")}/>
                                            <div className="overlay-div pallaPlaza-section-14"
                                                 onClick={() => onBlockSelected("building-14")}/>
                                            <div className="overlay-div pallaPlaza-section-15"
                                                 onClick={() => onBlockSelected("building-15")}/>
                                            <div className="overlay-div pallaPlaza-section-16"
                                                 onClick={() => onBlockSelected("building-16")}/>
                                            <div className="overlay-div pallaPlaza-section-17"
                                                 onClick={() => onBlockSelected("building-17")}/>
                                            <div className="overlay-div pallaPlaza-section-18"
                                                 onClick={() => onBlockSelected("building-18")}/>
                                            <div className="overlay-div pallaPlaza-section-19"
                                                 onClick={() => onBlockSelected("building-19")}/>
                                            <div className="overlay-div pallaPlaza-section-20"
                                                 onClick={() => onBlockSelected("building-20")}/>
                                            <div className="overlay-div pallaPlaza-section-21"
                                                 onClick={() => onBlockSelected("building-21")}/>
                                            <div className="overlay-div pallaPlaza-section-22"
                                                 onClick={() => onBlockSelected("building-22")}/>
                                            <div className="overlay-div pallaPlaza-section-23"
                                                 onClick={() => onBlockSelected("building-23")}/>
                                            <div className="overlay-div pallaPlaza-section-24"
                                                 onClick={() => onBlockSelected("building-24")}/>
                                            <div className="overlay-div pallaPlaza-section-25"
                                                 onClick={() => onBlockSelected("building-25")}/>
                                            <div className="overlay-div pallaPlaza-section-26"
                                                 onClick={() => onBlockSelected("building-26")}/>
                                            <div className="overlay-div pallaPlaza-section-27"
                                                 onClick={() => onBlockSelected("building-27")}/>
                                            <div className="overlay-div pallaPlaza-section-28"
                                                 onClick={() => onBlockSelected("building-28")}/>
                                            <div className="overlay-div pallaPlaza-section-29"
                                                 onClick={() => onBlockSelected("building-29")}/>
                                            <div className="overlay-div pallaPlaza-section-30"
                                                 onClick={() => onBlockSelected("building-30")}/>
                                            <div className="overlay-div pallaPlaza-section-31"
                                                 onClick={() => onBlockSelected("building-31")}/>
                                            <div className="overlay-div pallaPlaza-section-32"
                                                 onClick={() => onBlockSelected("building-32")}/>
                                            <div className="overlay-div pallaPlaza-section-33"
                                                 onClick={() => onBlockSelected("building-33")}/>
                                            <div className="overlay-div pallaPlaza-section-34"
                                                 onClick={() => onBlockSelected("building-34")}/>
                                            <div className="overlay-div pallaPlaza-section-35"
                                                 onClick={() => onBlockSelected("building-35")}/>
                                            <div className="overlay-div pallaPlaza-section-36"
                                                 onClick={() => onBlockSelected("building-36")}/>
                                            <div className="overlay-div pallaPlaza-section-37"
                                                 onClick={() => onBlockSelected("building-37")}/>
                                            <div className="overlay-div pallaPlaza-section-38"
                                                 onClick={() => onBlockSelected("building-38")}/>
                                            <div className="overlay-div pallaPlaza-section-39"
                                                 onClick={() => onBlockSelected("building-39")}/>
                                            {/*<div className="overlay-div pallaPlaza-section-40"*/}
                                            {/*     onClick={() => onBlockSelected("building-40")}/>*/}
                                            <div className="overlay-div pallaPlaza-section-41"
                                                 onClick={() => onBlockSelected("building-41")}/>
                                            <div className="overlay-div pallaPlaza-section-42"
                                                 onClick={() => onBlockSelected("building-42")}/>
                                            <div className="overlay-div pallaPlaza-section-43"
                                                 onClick={() => onBlockSelected("building-43")}/>
                                            <div className="overlay-div pallaPlaza-section-44"
                                                 onClick={() => onBlockSelected("building-44")}/>
                                            <div className="overlay-div pallaPlaza-section-45"
                                                 onClick={() => onBlockSelected("building-45")}/>
                                            <div className="overlay-div pallaPlaza-section-46"
                                                 onClick={() => onBlockSelected("building-46")}/>
                                            <div className="overlay-div pallaPlaza-section-47"
                                                 onClick={() => onBlockSelected("building-47")}/>
                                            <div className="overlay-div pallaPlaza-section-48"
                                                 onClick={() => onBlockSelected("building-48")}/>
                                            <div className="overlay-div pallaPlaza-section-49"
                                                 onClick={() => onBlockSelected("building-49")}/>
                                            <div className="overlay-div pallaPlaza-section-50"
                                                 onClick={() => onBlockSelected("building-50")}/>

                                        </div>
                                    </div>
                                </TransformComponent>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </div>
            </div>

            <Modal isOpen={isOpen.modal} toggle={toggleModal} backdrop="static" scrollable={true}
                   modalClassName="full-height-modal modal-left">
                <ModalHeader toggle={toggleModal}>Palla Plaza</ModalHeader>
                <img
                    src={modal.image}
                    alt=""/>
                <ModalBody>
                    <h3>{modal.id}</h3>
                    <hr/>
                    <p>
                        {modal.features}
                    </p>
                    {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do*/}
                    {/*eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad*/}
                    {/*minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
                    {/*aliquip ex ea commodo consequat. Duis aute irure dolor in*/}
                    {/*reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla*/}
                    {/*pariatur.*/}
                </ModalBody>
                <ModalFooter className="text-center d-flex justify-content-between">
                    <h3 className=""><span className="fs-5">$ </span>{modal.price}</h3>
                    <Button color="primary">
                        Buy Now
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}