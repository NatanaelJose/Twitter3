const SearchBar = () => {
    <div className="flex mt-3 h-3 w-4/5 bg-slate-100">

    </div>
}
export default function Happening() {
    return (
        <>
            <div className={`flex justify-center max-h-fit ${window.scrollY < 3 / 4 ? "absolute" : "fixed"} right-0 w-1/4 h-screen bg-white border-l border-l-gray-200`}>
                <div className="m-5 ml-4 h-screen w-4/5 bg-slate-200">
                    <SearchBar />
                </div>
            </div >
        </>
    )
}