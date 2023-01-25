import React from 'react'

const Menu = () => {

    const posts = [
        {
        id: 1,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
        id: 2,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        img: "https://plus.unsplash.com/premium_photo-1663014611296-1af1ab71aee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
        id: 3,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        img: "https://images.unsplash.com/photo-1514195037031-83d60ed3b448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        },
        {
        id: 4,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        {
        id: 5,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis iure perferendis at fuga non consequatur libero distinctio veniam, est, sit ducimus illo reiciendis voluptatum voluptate? Repudiandae eaque dolores modi?",
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
    ]

  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu