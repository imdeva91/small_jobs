import React from "react";

const SearchSection = () => {
    return(
        <>
            <div className=' p-6 max-w-100 w-full rounded-2xl shadow-black shadow-2xl'>

                <div className=' block'>
                    <h1>Search Worker</h1>
                    <form className='' action="search">

                        <div className=' flex justify-evenly'>
                            <div className='  p-0 m-0 '>
                                <label htmlFor="job-title">Select job title</label>
                                <input className=' border-solid border-2 border-sky-500 rounded-md ' type="search" id='search' name='search' />
                            </div>
                            <div>
                                <label htmlFor="job-title">Select City</label>
                                <input className=' border-solid border-2 border-sky-500 rounded-md ' type="search" id='search' name='search' />
                                <input type="submit" value='submit' />
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        
        
        </>
    )
}

export default SearchSection;