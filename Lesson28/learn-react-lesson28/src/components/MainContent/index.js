import { FaCss3Alt, FaDelicious } from "react-icons/fa"

function MainContent() {
    let name = "Nguyễn Văn Kiên";
    const css = {
        // color: "red", 
        // backgroundColor: "blue"
    };
    return(
        <>
            <div className="box">
                <div className='test' style={css}>
                    Xin chào {name}!
                </div>
                <div className='test' style={css}>
                    Xin chào {name}!
                </div>
                <FaCss3Alt style={{fontSize: "50px"}} />
                <FaDelicious className="icon" />
            </div>

            
        </>

    )
}

export default MainContent;