//props
export default function Dashboard({name, job, age}) {
    return(
        <div className="dashboard">
            <h2>{name}</h2>
        <p>{job}</p>
        <p>{age}</p>
            </div>
    )
}