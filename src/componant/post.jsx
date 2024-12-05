import React from 'react'

export const Post = (props) => {
  return (
    <div className='Post-container'>
      <h4> <strong>Employee Id:</strong> {props.id}</h4>
      <p style={{textAlign:'center'}}><strong>Title:</strong> {props.title}</p>
      <p> <strong>Body:</strong> {props.body}</p>
    </div>
  )
}

