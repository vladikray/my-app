import { useNavigate } from "react-router-dom";

// import { withRouter } from "react-router-dom";
// this also works with react-router-native

const Button = () => {
    const navigate = useNavigate();
    return(<button
            type='button'
            onClick={() => {
                navigate('/new-location')
            }}
        >
            Click Me!
        </button>
    );
}

export default Button;