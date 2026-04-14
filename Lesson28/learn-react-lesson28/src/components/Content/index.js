// props: truyền từ cha sang con( chỉ 1 chiều)

function Content(props) {
    const { text, number, active } = props;
    // console.log(props);
    // console.log(props.text);
    
    return (
        <>
            <div className={"box" + (active ? "box--active" : "")}>
                {text} - {number}
            </div>
        </>
    )
}

export default Content;