export default function Random (props) {

const random = Math.floor(Math.random() * props.max) + 1
return (
    <div className="card">
       <p>Random value between {props.min} and {props.max} =&gt; {random}</p>
    </div>
    )
}