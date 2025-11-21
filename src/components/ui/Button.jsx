export default function Button({text = "texto", url= "#"}){
    return (
        <a href={url} className="py-3 px-6 bg-accent hover:bg-accentHover rounded-lg font-semibold">{text}</a>
    )
}