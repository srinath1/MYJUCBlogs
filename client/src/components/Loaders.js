    import React from 'react'
    function Loader(){
        return (
            <div className="bg-black h-screen w-screen flex items-center justify-center opacity-50 absolute inset-0">
                <div className="h-10 w-10 border-4 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }
    export default Loader