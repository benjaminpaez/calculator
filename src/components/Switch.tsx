import {useState, useEffect} from 'react'
import './switch.css'

export const Switch = () => {
    const [theme, setTheme] = useState('light')
    const handleTheme = (e:React.ChangeEvent<HTMLInputElement>) => setTheme(e.currentTarget.checked ? 'dark' : 'light')
  
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    },[theme])
  
  
    return (
    <section className="switch">
        <label className="toggle">
            <input type="checkbox" className="check-switch" onChange={handleTheme} hidden/>
            <span className="slider" />
        </label>
    </section>
  )
}
