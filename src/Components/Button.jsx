const Button = ({className, title, icon, paddings}) => {

    const classes = `flex gap-6 ${className || ""} ${paddings || "px-2 px-1"}`;

    return (
        <button className={classes}>
            <div>{icon}</div>
            <div>{title}</div>
        </button>
    )
}

export default Button;