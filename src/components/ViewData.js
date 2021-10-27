import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { remove ,selectHero} from '../action';
class ViewData extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
            <h4>Characters</h4> 
            <ul className='list-group'>
                <li className='list-group-item'>
                    name
                </li>
                <li className='list-group-item'>
                    Age
                </li>
                <li className='list-group-item'>
                    Power
                </li>
            </ul>
            <div >
                {
                    this.props.heros?this.props.heros.map(
                        hero=>{
                            return(
                                <ul style={{display:'inline-flex'}} >
                                    <button onClick={()=>this.props.selectHero(hero.id,hero.name,hero.age,hero.power)}>Edit</button>
                                <li className='list-group-item' key={hero.id}>
                                    {hero.name}
                                    </li>
                                    <li className='list-group-item'>{hero.age}</li>
                                    <li className='list-group-item' >{hero.power}</li>
                                    <button onClick={()=>this.props.remove(hero.id)}>x</button>
                                    </ul>
                            )
                        }
                    ):<div>NO HERO HERE</div>
                }
                </div>
         </div>
        );
    }
}
function mapStateToProps(state){
    console.log('state',state);
    return{
        heros:state.heros,
        select:state.select
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({remove,selectHero},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(ViewData);