import React, { useState } from 'react';
import MoveDetails from './MoveDetails';

const MoveItem = ({ move }) => {
    const [detailsVisible, setDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setDetailsVisible(!detailsVisible);
    };

    return (
        <div className="move-item">
            <div className="move-summary">
                <div className='top-summary'>
                    <div>
                        <i className="fas fa-truck icon"></i><span><b>From</b></span>
                        <p>{move.moving_from}</p>
                    </div>
                    <div>
                        <i className="fas fa-map-marker-alt icon"></i><span> <b>To</b></span>
                        <p>{move.moving_to}</p>
                    </div>
                    <div>
                        <span> <b>Request#</b></span>
                        <p className='request'>{move.estimate_id}</p>
                    </div>

                </div>
                <div className="down-summary">
                    <div>
                        <i className="fas fa-calendar-alt icon"></i>
                        <span>Size: {move.property_size}</span>
                    </div>
                    <div>
                    <i class="fas fa-couch icon"></i>
                        <span>{move.total_items}</span>
                    </div>
                    <div>
                        <i className="fas fa-map-marker-alt icon"></i>
                        <span>Distance: {move.distance}</span>
                    </div>
                    <div>
                        <i className="fas fa-calendar-alt icon"></i>
                        <span>{move.moving_on}</span>
                    </div>
                    <div>
                        <i class="fas fa-check-square icon"></i>
                        <span>{move.move_date_flexible == "0" ? "No" : "Yes"}</span>
                    </div>
                    <button className="view-move-details-btn" onClick={toggleDetails}>
                        {detailsVisible ? 'Hide Move Details' : 'View Move Details'}
                    </button>

                </div>
                <br />
                <div>
                    <i class="fas fa-exclamation-triangle icon"></i>
                    <span><b>Disclaimer: </b>Please update your move date before two days of shifting</span>
                </div>
            </div>
            {detailsVisible && <MoveDetails items={move.items.inventory} />}
            {detailsVisible &&
                <div>
                    <h3>House Details</h3>
                    <br />
                    <div className="ex-house-div">
                        <h3>Existing House Details</h3>
                        <div className="ex-house-details">
                            <div>
                                <p><b>Floor No.</b></p>
                                <p>{move.old_floor_no}</p>
                            </div>
                            <div>
                                <p><b>Elevator Available</b></p>
                                <p>{move.old_elevator_availability}</p>
                            </div>
                            <div>
                                <p><b>Packing Required</b></p>
                                <p>{move.packing_service}</p>
                            </div>
                            <div>
                                <p><b>Distance from truck to door</b></p>
                                <p>{move.old_parking_distance}</p>
                            </div>
                            <div>
                                <p><b>Additional Information</b></p>
                                <p>{move.old_house_additional_info}</p>
                            </div>
                        </div>
                    </div>
                    <div className="new-house-div">
                        <h3>New House Details</h3>
                        <div className="new-house-details">
                            <div>
                                <p><b>Floor No.</b></p>
                                <p>{move.new_floor_no}</p>
                            </div>
                            <div>
                                <p><b>Elevator Available</b></p>
                                <p>{move.new_elevator_availability}</p>
                            </div>
                            <div>
                                <p><b>Packing Required</b></p>
                                <p>{move.unpacking_service}</p>
                            </div>
                            <div>
                                <p><b>Distance from truck to door</b></p>
                                <p>{move.new_parking_distance}</p>
                            </div>
                            <div>
                                <p><b>Additional Information</b></p>
                                <p>{move.new_house_additional_info == "" ? "No Additional information": <p>{move.new_house_additional_info}</p>}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MoveItem;


