import './modalInfo.scss';
import { useData } from '../../store/store';

const ModalInfo = ({ card }) => {

    const {setClassNames} = useData();

    const onHideModal = (e) => {
        console.log(e.target.getAttribute('class'));
        if(e.target.getAttribute('class') === 'close'){
            setClassNames('modalInfo displayNone');
        }
    }

    return (
        <div className='cardBody' onClick={onHideModal}>
            <h2 className="p-10">
                {card[0].title}
            </h2>
            <div className="image">
                <img src={card[0].image} alt={card[0].title} />
            </div>
            <p>
                {card[0].description}
            </p>
            <div className="price">
                <h3>
                    Price: {card[0].price} $
                </h3>
            </div>
            <div className="close">
                X
            </div>
        </div>
    );
}

export default ModalInfo;