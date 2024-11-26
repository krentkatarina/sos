import './RequirementsBlock.css';

const RequirementsBlock = ({title, description}) => {
  return (
    <div className='requirements__block'>
        <h4 className='requirements__block-title'>{title}</h4>
        <p className='requirements__block-description'>{description}</p>
    </div>
  )
}

export default RequirementsBlock