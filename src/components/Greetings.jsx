
export default function Greeting(props) {
    let word = ''
    switch(props.lang){
        case"de":
            word = "Hallo"
            break;
        case"en":
            word = "Hello"
            break;
        case"es":
            word = "Hola"
            break;
        case"fr":
            word = "Bonjour"
            break;
        default:
            word = "Welcome"
            break;
    }

    return(
        
        <div className='card'>
            <p>{word} {props.children}</p>
        </div>

    )

}




//object literals

// const languages = {
//     en: "Hello",
//     es: "Hola",
//     de: "Hallo",
//     fr: "Bonjour"
// };



// return (
//     <p>
//         {languages[props.lang]} {props.children}
//     </p>
// )