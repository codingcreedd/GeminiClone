const Button = ({className, title, icon, paddings, children}) => {

    const classes = `flex gap-6 ${className || ""} ${paddings || "px-2 px-1"}`;

    return (
        <button className={classes}>
            <div>{icon}</div>
            {title && <div>{title}</div>}
            {children}
        </button>
    )
}

export default Button;