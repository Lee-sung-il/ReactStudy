// function handleClick() {
//     console.log('CLICKED THE BUTTON!!!');
// }
// function handleHover() {
//     console.log('HOVERED')
// }

export default function Clicker({buttonText, message}) {
    const handleClick = (e) => {
        alert(message)
    }
    return (
        <button onClick={handleClick}>{buttonText}</button>
        // <div>
        //     {/*<p onMouseOver={handleHover}>Hover Over Me</p>*/}
        //     {/*<button onClick={handleClick}>Click</button>*/}
        // </div>
    )
}