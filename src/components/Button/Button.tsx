import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // custom properties goes here
  variant?: 'outlined' | 'contained';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, ...props }, ref) {
  const innerRef = React.useRef<HTMLButtonElement>(null);
  React.useImperativeHandle(ref, () => innerRef.current!, []);
  React.useEffect(() => {
    innerRef.current?.addEventListener('click', function ({ pageX, pageY, currentTarget }) {
      let x: number, y: number;
      if (currentTarget instanceof HTMLButtonElement) {
        x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
        y = ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;
      }
      const ripple = document.createElement('span');
      const rippleColor = innerRef.current?.getAttribute('data-ripple') || '#212129';
      ripple.classList.add('ripple-effect');
      ripple.style.background = rippleColor;
      innerRef.current?.appendChild(ripple);
      ripple.style.left = x + '%';
      ripple.style.top = y + '%';
      setTimeout(() => {
        ripple.remove();
      }, 700);
    });
  }, []);
  return (
    <button className={`btn btn-ripple variant-${variant || 'contained'} ${className || ''}`} ref={innerRef} {...props}>
      {props.children}
    </button>
  );
});

export default Button;
