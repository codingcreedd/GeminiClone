const Button = ({className, title, icon, paddings, children, State = true}) => {

    const classes = `flex gap-6 ${className || ""} ${paddings || "px-2 py-1"}`;

    return (
        <button className={classes}>
            <div>{icon}</div>
            {
                State ? (
                    <>
                        {title && <div>{title}</div>}
                        {children}
                    </>
                ) : 
                null
            }
        </button>
    )
}

export default Button;