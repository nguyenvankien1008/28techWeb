function NavigationMenu() {

    const handleClick = (e) => {
        console.log(e.target);
        
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        
    }

    const handleFocus = (e) => {
        e.target.classList.add("input--active");
    }

    const handleBlur = (e) => {
        e.target.classList.remove("input--active");
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // ngăn chặn event mặc định, ở đây là sau khi submit tự load lại trang
        console.log(e.targer[0].value);
        
    }

    return (
        <>
            <div className="box">
                <div>Navigation Menu</div> 
                <form onSubmit={handleSubmit}>
                    <input 
                        className="input" 
                        type="text" 
                        onChange={handleChange} 
                        onFocus={handleFocus}
                        onBlur={handleBlur} />
                    <button onClick={handleClick}>Search</button>
                </form>
            </div>
            
        </>
    )
}

export default NavigationMenu;