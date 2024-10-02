import React from "react";
import {useNavigate} from "react-router-dom";
import Tippy from "@tippyjs/react";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import {Button, ButtonGroup, Col, FormGroup, Input, Label, Row} from "reactstrap";
import classNames from "classnames";
import mapImage from "../assets/images/map-clean.png";
import stadium from '../assets/icons/Starcard.svg';
import pavilion from '../assets/icons/Pavillion.svg';
import hallOfFame from '../assets/icons/Hall-of-Fame.svg';
import trainingField from '../assets/icons/Training-Field.svg';
import farm from '../assets/icons/Farm.svg';
import outdoorBar from '../assets/icons/Outdoor-Bar.svg';
import gym from '../assets/icons/Gym.svg';
import clinic from '../assets/icons/Physician.svg';
import pallaPlaza from '../assets/icons/Palla.svg';
import renderStadium from "../assets/images/render-Stadium.jpg";
import renderPavilion from "../assets/images/render-GreenPavilion.jpg";
import renderComingSoon from "../assets/images/render-CoominSoon.png";

const tooltipImage = "https://cdn.wallpapersafari.com/84/67/lKThwR.jpg";

export default function MainMap({}) {

    const navigate = useNavigate();

    const onClickHandler = (areaId) => {
        navigate(`/minimap/${areaId}`, {replace: false});
    }

    return (
        <div className="main-section h-100">
            <div className="legend-sidebar">
                <div className="fw-bold">
                    {/*<h6 className="fw-normal text-muted">Legend</h6>*/}
                    {/*<hr/>*/}
                    <p><img src={stadium} alt="" className="icon me-2"/> Stadium</p>
                    <p><img src={pavilion} alt="" className="icon me-2"/> Green Pavilion</p>
                    <p><img src={hallOfFame} alt="" className="icon me-2"/> Hall of Fame</p>
                    <p><img src={trainingField} alt="" className="icon me-2"/> Training Field</p>
                    <p><img src={farm} alt="" className="icon me-2"/> Farm</p>
                    <p><img src={outdoorBar} alt="" className="icon me-2"/> Outdoor bar</p>
                    <p><img src={gym} alt="" className="icon me-2"/> Gym</p>
                    <p><img src={clinic} alt="" className="icon me-2"/> Physical Therapy Clinic</p>
                    <p className="mb-0"><img src={pallaPlaza} alt="" className="icon me-2"/> Palla Plaza</p>
                </div>
            </div>
            <div className="h-100 d-flex justify-content-center align-items-center">
                <TransformWrapper initialScale={1.5} centerOnInit={true}>
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
                            <TransformComponent>
                                <div style={{display: 'inline', position: 'relative'}}>
                                    <img src={mapImage} alt="#" className="fwh-image"/>

                                    <Tippy content={<img
                                        src={renderStadium} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div starcard-stadium"
                                             onClick={() => onClickHandler("stadium")}/>
                                    </Tippy>
                                    <Tippy content={<img
                                        src={renderComingSoon} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div palla-plaza"
                                             onClick={() => onClickHandler("palla-plaza")}/>
                                    </Tippy>
                                    <Tippy content={<img
                                        src={renderPavilion} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div green-pavilion"
                                             onClick={() => onClickHandler("green-pavilion")}/>
                                    </Tippy>
                                    <Tippy content={<img
                                        src={renderComingSoon} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div hall-of-fame" onClick={() => onClickHandler("b")}/>
                                    </Tippy>
                                    <Tippy content={<img
                                        src={renderComingSoon} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div training-field"
                                             onClick={() => onClickHandler("b")}/>
                                    </Tippy>
                                    <Tippy content={<img
                                        src={renderComingSoon} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div farm" onClick={() => onClickHandler("b")}/>
                                    </Tippy>
                                    <Tippy content={<img
                                        src={renderComingSoon} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div physical-therapy-clinic"
                                             onClick={() => onClickHandler("b")}/>
                                    </Tippy>
                                    <Tippy content={<img
                                        src={renderComingSoon} alt="#"
                                        className="tooltip-image"
                                    />} placement="auto" touch={["hold", 500]} maxWidth="none" arrow={true}
                                           animateFill={true} theme="translucent">
                                        <div className="overlay-div gym" onClick={() => onClickHandler("b")}/>
                                    </Tippy>
                                </div>
                            </TransformComponent>
                        </React.Fragment>
                    )}
                </TransformWrapper>
            </div>
        </div>
    )
}