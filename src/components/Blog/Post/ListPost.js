import React from 'react';

import { useQuery } from '@apollo/client';
import { GetPosts } from '../../../queries/index';
import BlogPost from '../components/BlogPost';

const ListPost = () => {
    const { loading, data, error } = useQuery(GetPosts);
	if (loading) return <div style={{textAlign:'center'}}>Yükleniyor...</div>;
    if (error) return <div style={{textAlign:'center'}}>Hata...</div>;   
    console.log(data);
   
    return (
        <div>
        {
            data.Posts.map( dat => {
                return(
                    <BlogPost 
                        key = { dat.id }
                        id = { dat.id }
                        userName = { dat.User.UserName }
                        userRole= { dat.User.role }
                        content = { dat.content }
                        like = { dat.like }
                    />
                );
            })
        }
        </div>
    )
}

export default ListPost;