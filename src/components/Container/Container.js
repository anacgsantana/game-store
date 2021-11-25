import './Container.css';

export default function Container(props) {
  return (
    <div className='container-div'>
      <h2 className='container-title'>{props.title}</h2>
      <div className='container-cards'>
        {props.children}
      </div>
    </div>
  )
}