import "./CoreConcept.css"

function CoreConcept(props) {
    return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
    )
  }

  //sama
  // function CoreConcept({image, title, description}) {
  //   return (
  //   <li>
  //     <img src={image} alt="" />
  //     <h3>{title}</h3>
  //     <p>{description}</p>
  //   </li>
  //   )
  // }

  export default CoreConcept;