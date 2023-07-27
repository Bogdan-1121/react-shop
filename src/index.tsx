import React from 'react'
import ReactDOM from 'react-dom/client'

// // without jsx
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// //JSX
// const h1 = (
//     <h1 id="title-2" className="title">
//         Hello React.js
//     </h1>
// )

// const p123 = (
//     <div className="div">
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
//             ducimus quae asperiores officia dolorem suscipit omnis optio
//             architecto illo impedit, deserunt iusto odit error dolore eligendi
//             natus unde! Fugit, reiciendis.
//         </p>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
//             corrupti quo dolor dolorem praesentium animi itaque et dicta libero
//             sapiente? Esse rerum exercitationem voluptatibus? Sed facere eveniet
//             vero. Explicabo, assumenda?
//         </p>
//         <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
//             voluptate tempore! Excepturi, animi eius ab deleniti aliquid,
//             debitis optio enim error perspiciatis illo itaque dignissimos,
//             accusantium sunt. Nemo, velit? Aliquam?
//         </p>
//     </div>
// )

// const App = () => {
//     return (
//         <div className="div">
//             <h1>Hello React</h1>
//             <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Libero, repellat praesentium odit commodi porro officia
//                 doloremque itaque quae, neque quam nulla sed numquam aliquid
//                 sequi atque veniam soluta unde ipsa.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Molestiae repellat voluptas laborum incidunt, distinctio illum.
//                 Sint cumque accusamus explicabo aliquam doloremque mollitia iure
//                 cupiditate? Sint aut incidunt sed perferendis deleniti?
//             </p>
//         </div>
//     )
// }

const Header = () => {
    return <h1>Hello</h1>
}

const Con = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                autem molestias tenetur veniam commodi corporis alias quam, quas
                non quaerat sunt temporibus soluta quibusdam, magnam ut quidem
                asperiores, quia fugiat.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                iusto sit praesentium itaque veritatis quaerat minus magni
                omnis, suscipit commodi harum, amet ipsam explicabo adipisci
                aspernatur fuga, blanditiis voluptatibus totam.]
            </p>
        </>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Con />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/* {h1}
        {title}
        {p123} */}
        <App />
    </React.StrictMode>
)
