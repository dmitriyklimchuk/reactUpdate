export default function Button({children, textOnly, className, ...props}) {
    let cssDynamic = className || '';
    let cssClasses = textOnly ? `text-button ${cssDynamic}` : `button ${cssDynamic}`;
    // cssClasses += ' ' + className;

    return <button type="button" className={cssClasses} {...props}>{children}</button>;
}