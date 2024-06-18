function ButtonComponent({ type, className, text, loading }) {
    return (
        <button type={type} disabled={loading ? true : false} className={className}>{!loading ? text : "loading..."}</button>
    )
}

export default ButtonComponent;