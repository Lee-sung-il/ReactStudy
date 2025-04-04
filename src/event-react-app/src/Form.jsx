function handleFormSubmit(evt) {
    evt.preventDefault()
    console.log("SUBMITTED THE FORM!")
}

export default function Form(props) {
    return (
        <form onClick={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}