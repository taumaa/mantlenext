const MainContainer = ({children}) => {
    return (
        <div className="bg-primary min-h-screen">
            <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 py-8 flex flex-col space-y-8">
                {children}
            </div>
        </div>
    )
}

export default MainContainer