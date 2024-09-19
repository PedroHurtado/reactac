import { forwardRef } from 'react';
import './Input.css'
function Input({ id, label}, ref) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input ref={ref} name={id} id={id} />
    </div>
  );
}
export default forwardRef(Input)
