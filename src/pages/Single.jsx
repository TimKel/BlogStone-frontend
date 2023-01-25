import React from 'react'
import { Link } from "react-router-dom"
import Edit from "../img/pencil.png"
import Delete from "../img/delete.png"
import Menu from './Menu'

const Single = () => {
  return (
    <div className="single">
        <div className="content">
            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user image" />
                <div className="info">
                    <span>John</span>
                    <p>Posted 2 Days ago</p>
                </div>
                <div className="edit">
                    <Link to={`/write?edit=2`}>
                    <img src={Edit} alt="" />
                    </Link>
                    <img src={Delete} alt="" />
                </div>   
            </div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quo ipsam minus veritatis placeat magni natus, delectus, dolores eius explicabo aspernatur </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius perferendis animi qui nostrum optio ipsam dignissimos, eum ipsa error facilis ea deleniti? Provident magni, officia eveniet accusamus animi blanditiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore iusto necessitatibus aliquam eveniet pariatur eius similique deserunt? Accusamus earum officiis facilis nulla eaque neque architecto nemo magnam qui recusandae.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cum excepturi, obcaecati voluptatibus beatae laboriosam vitae, necessitatibus iusto expedita a commodi doloribus dolore quisquam non accusamus provident? Neque, nihil cupiditate!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam debitis in, voluptatem itaque corporis nesciunt possimus, eius tenetur ipsa molestias ut vitae tempora! Commodi atque quibusdam quae illum, debitis ipsam.

            </p>
        
        </div>
        <Menu />
    </div>
  );
};

export default Single
