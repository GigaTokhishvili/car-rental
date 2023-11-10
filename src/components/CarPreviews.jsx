import './CarPreviews.css';

export default function CarPreviews({ carName, className, imgLink }) {


    function handleClick() {
        imgLink(carName)
    }
    

    return (
        <>
            <button onClick={handleClick} className={`car-pre-button ${className}`}>
                {carName}
            </button>
        </>
    )
}