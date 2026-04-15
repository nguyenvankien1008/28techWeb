// Conditioner Rendering

function Login() {
    const isLogin = true;
    return (
        <>
            {isLogin ? (<>
                <div>
                    Thông tin người dùng, nút Logout
                </div>
            </>) : (<>
                <div>
                    Nút đăng nhập, Nút đăng ký
                </div>
            </>)}

            {/* {isLogin ? (<>
                <div>
                    Avatar
                </div>
            </>) : (
            <></>
            )} */}

            {isLogin && <div>Avatar</div>}
            
        </>
    )
}

export default Login;