import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';

const BugsList = () => {
    const dispatch = useDispatch(function)
    const state = useSelector(state => state.state)
    
    useEffect(() => {
        dispatch(loadBugs())
    }, [])

    return ( 
        <ul>
        {/* {this.props.bugs.map(bug => (
          <li key={bug.id}>{bug.description}</li>
        ))} */}
      </ul>
     );
}
 
export default BugsList;