const Contact = ({name, number}) => {
    return (
        <>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button">Delete</button>
        </>
    )
}

export default Contact
