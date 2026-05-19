import react from "react";


export default function DashboardCard({ icon, title, description, lists, buttonText, onClick }) {
    return (
        <div key={title} className="bg-white ">
           <i>{icon}</i> 
            <h2>{title}</h2>
            <p>{description}</p>
            <ul key={lists}>
                <li>{lists.one}</li>
                <li>{lists.two}</li>
                <li>{lists.three}</li>
                <li>{lists.four}</li>
            </ul>

            <button>{buttonText}</button>
        </div>

    )
}