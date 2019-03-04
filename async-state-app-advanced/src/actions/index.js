import jsonPlaceHolder from '../apis/jsonplaceholder';
import _ from 'lodash';

export const fetchposts = () => 
        async  dispatch =>{
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type:"FETCH_POSTS",payload:response.data});

};

export const getuser = (userid) => 
     dispatch => {
        _fetchUser(userid,dispatch);

    }


// MEMOZATION IMPORTANT
const _fetchUser = _.memoize(async (userid,dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${userid}`);
    dispatch({ type: "FETCH_USER", payload: response.data });

});
   
