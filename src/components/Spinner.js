import './Spinner.css';
export function Spinner() {
  return <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh' }} >
       <span style={{ display: 'flex' }} className="loader"></span>
   </div>
}