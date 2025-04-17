export default function List({children}){
    return(
        <div className="w-full flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 md:grid-cols-2 md:grid">
            {children}
        </div>
    )
}