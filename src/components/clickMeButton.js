export default function MyButton() {
    function ButtonClicked() {
        alert("ButtonClicked");
    }
    return(
        <div className="mybtn">
        <button onClick={ButtonClicked}
        className="btn"
        >iam button </button>
        </div>
    );
}