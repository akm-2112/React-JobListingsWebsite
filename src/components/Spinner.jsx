import ClipLoader from "react-spinners/Cliploader";

const override = {
    display: "block",
    margin: "100px auto",
}
const Spinner = ({loading}) => {
    return (
        <ClipLoader
            color='#4338ca'
            cssOverride={override}
            loading={loading}
            size={150}
        />    )
}
export default Spinner;