import './Button.css';


const STYLES = ['btn--primary', 'btn--outline','btn--outline--large'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize,page}) => {
  // get buttons to default to STYLE and SIZE default if none is specified
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];

  return (
    <a href={`${page}`} className='btn-mobile' target='_blank'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  )
};