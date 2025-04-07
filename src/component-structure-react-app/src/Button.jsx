import "./Button.css"

function Button({clickFunc , label="Click me"}) {
    return <button onClick={clickFunc} className="Button">{label}</button>
}

export default Button;