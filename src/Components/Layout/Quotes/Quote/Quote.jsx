import './Quote.css';

const Quote = ({image, title, subtitle, description, date}) => {
  return (
    <div className='quote__card'>
        <div className="quote__card-row">
            <div className="quote__card-left">
                <img className='quote__card-image' src={image} alt="avatar" />
            </div>
            <div className="quote__card-right">
                <h4 className='quote__card-title'>{title}</h4>
                <p className='quote__card-subtitle'>{subtitle}</p>
            </div>
            
        </div>
        <p className='quote__card-description'>{description}</p>
        <p className='quote__card-date'>{date}</p>
    </div>
  )
}

export default Quote