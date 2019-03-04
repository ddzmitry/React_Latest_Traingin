import jsonPlaceHolder from '../apis/jsonplaceholder';
import _ from 'lodash';

export const fetchposts = () =>
    async  dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({ type: "FETCH_POSTS", payload: response.data });

    };

export const getuser = (userid) =>
    async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${userid}`);
        dispatch({ type: "FETCH_USER", payload: response.data });
    }

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchposts())
    // Get UniqUserId JS
    // console.log([...new Set(getState().posts.map(x => x.userId))])
    // Get UniqUserId LODASH
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(getuser(id)))
    // Optional: JUST LODASH
    // _.chain(getState().posts)
    // .map('userId')
    // .uniq()
    // .forEach(id => dispatch(getuser(id)))
    // .value()


}


// MEMOZATION
// export const getuser = (userid) =>
//      dispatch => {
//      _fetchUser(userid, dispatch)
//     }
// const _fetchUser = _.memoize(async (userid, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${userid}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// });
