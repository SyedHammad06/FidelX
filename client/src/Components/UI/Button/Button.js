import './Button.scss';

const button = (props) => {
  return (
    <button className='Button'>
      <a href={props.to} className='Button__link'>
        {props.children}
      </a>
    </button>
  );
};

export default button;
