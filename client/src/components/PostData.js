import { useQuery, gql } from '@apollo/client';
import Shareddealcard from './SharedDeals';
import { QUERY_SINGLE_POST } from '../utils/queries';


export default function PostData(posts) {
    const tempid = (posts.posted._id);
    console.log(tempid);
    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId: tempid },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const post = data;

    return <Shareddealcard post={post.post} />;
}

