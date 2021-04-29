import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'
const CakeContainer = (props:any) => {
    return (
        <div>
             <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return{
        numOfCakes: state.numofCakes
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)

// import React from 'react'

// const CakeContainer = () => {
//     return (
//         <div>
//             asd
//         </div>
//     )
// }

// export default CakeContainer
