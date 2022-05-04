import Rating from "./Rating"

export default function DriverCard(props) {
    
    return (
        <div className="background">
            <div>
            <img src="{props.img}" className="image" alt="profile" />
            </div>
            <div>
                <p>{props.name}</p>
                <Rating/>
                <p>{props.rating}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
};
