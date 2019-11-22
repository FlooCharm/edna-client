import React from "react";
import PropTypes from 'prop-types';

const ManSilhouette = props => (
  <svg width='100%' height='100%' fill="none" viewBox='0 0 112.88 276.92'>
    <g clipPath="url(#prefix__clip0)" fill="#00000022">
      {/* head part*/}
        <path
          stroke='#ebebeb'
          d="M56.29,0h1.43A10.94,10.94,0,0,1,68.65,10.94V28.12A9.63,9.63,0,0,1,59,37.75H55a9.63,9.63,0,0,1-9.63-9.63V10.94A10.94,10.94,0,0,1,56.29,0Z"
        />
      {/* head part*/}
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.mask.color}
        onClick={() => props.onClick('mask')}
        d="M68.28,14.21a12.63,12.63,0,0,0-7.05-.55c-2.12.5-2.71,1.33-4.69,1.33-2.36,0-3-1.3-5.36-1.45a10.91,10.91,0,0,0-5.42,1.15c0,.43-.33,3.27,1.5,4.82s4.42.9,5.54.66C55,19.7,55.11,19,56.88,18.89s2,.7,4.33,1c1.46.19,3.51.46,5.08-.69C68.35,17.69,68.29,14.69,68.28,14.21Zm-18,4.15a3.2,3.2,0,0,1-2.54-1.94,3.53,3.53,0,0,1,5.61,1A3.23,3.23,0,0,1,50.25,18.36Zm13.22,0a3.2,3.2,0,0,1-3.06-.91,3.52,3.52,0,0,1,5.6-1A3.18,3.18,0,0,1,63.47,18.36Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.neck.color}
        onClick={() => props.onClick('neck')}
        d="M65.16,41.78a22,22,0,0,1-16.32,0V35.52a10,10,0,0,0,2.5,1.54c1.52.63,2.84.66,5.4.69s3.86,0,5.36-.5a10.39,10.39,0,0,0,3.06-1.73Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.rightArm.color}
        onClick={() => props.onClick('rightArm')}
        d="M10.55,130.08a28.13,28.13,0,0,0-5.84,4.5c-1.82,1.85-5.55,5.62-4.54,8.25.25.65.85,1.39,1.42,1.36s.84-.88,2-2.46c.28-.38,1.59-2.13,2.25-1.82.24.12.33.5.37.79a25.08,25.08,0,0,1-1.53,8.22c-1,2.73-2.08,4.06-1.44,5.49.71,1.6,3.18,2.47,5.11,2,1-.24,2.14-.91,4.17-4.34a36.17,36.17,0,0,0,3.66-8.5,52.24,52.24,0,0,0,1.84-12.66c1.56-3.95,2.84-7.4,3.83-10.17,2.61-7.31,3.72-10,4.17-14a35.51,35.51,0,0,0,.14-6.19A90.7,90.7,0,0,0,28.8,89.42,90.19,90.19,0,0,0,30,77.57l.38-.15a118,118,0,0,0,.17-19.67q-.32-4-.84-7.67a13.07,13.07,0,0,0-7.83,4.17,14.47,14.47,0,0,0-3,6.94,20.41,20.41,0,0,0-.32,6.21,173.17,173.17,0,0,0-2.44,17.95c-.4,4.79-.57,9.33-.58,13.57A28.25,28.25,0,0,0,12,106.67c-.83,2.92-.93,5.12-1.12,11.41C10.72,123.2,10.61,127.35,10.55,130.08Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.leftArm.color}
        onClick={() => props.onClick('leftArm')}
        d="M102.33,130.08a28.13,28.13,0,0,1,5.84,4.5c1.82,1.85,5.55,5.62,4.54,8.25-.25.65-.85,1.39-1.42,1.36s-.84-.88-2-2.46c-.28-.38-1.59-2.13-2.25-1.82-.24.12-.33.5-.37.79a25.08,25.08,0,0,0,1.53,8.22c1,2.73,2.08,4.06,1.44,5.49-.71,1.6-3.18,2.47-5.11,2-1-.24-2.15-.91-4.17-4.34a36.17,36.17,0,0,1-3.66-8.5,52.24,52.24,0,0,1-1.84-12.66C93.26,127,92,123.52,91,120.75c-2.62-7.31-3.72-10-4.17-14a35.51,35.51,0,0,1-.14-6.19,90.7,90.7,0,0,1-2.61-11.14,92.08,92.08,0,0,1-1.21-11.85l-.37-.15a118,118,0,0,1-.17-19.67c.2-2.67.49-5.23.84-7.67A13.07,13.07,0,0,1,91,54.25a14.47,14.47,0,0,1,3,6.94,20.41,20.41,0,0,1,.32,6.21,173.17,173.17,0,0,1,2.44,17.95c.39,4.79.57,9.33.58,13.57a28,28,0,0,1,3.54,7.75c.84,2.92.93,5.12,1.13,11.41C102.16,123.2,102.27,127.35,102.33,130.08Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.torso.color}
        onClick={() => props.onClick('torso')}
        d="M82.12,62.42c.16-4.46.54-8.58,1-12.34l-18-8.3a22,22,0,0,1-16.32,0q-4.32,2-8.84,4Q34.78,48,29.71,50.08a117.47,117.47,0,0,1,1.16,15.71c0,4.18-.16,8.07-.49,11.63.73,2.59,1.78,6.45,2.95,11.16,2.29,9.25,3.45,14,3.84,19,.26,3.42.11,5.66-.55,11.21a94.84,94.84,0,0,0,19.84,2,94.44,94.44,0,0,0,19.81-2.15,75.26,75.26,0,0,1-.22-11c0-.21,0-.57.06-1a100.64,100.64,0,0,1,3.06-17.34c1.17-4.91,2.4-9,3.33-11.83A126,126,0,0,1,82.12,62.42Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.belt.color}
        onClick={() => props.onClick('belt')}
        d="M36.62,118.78c-.2,1.65-.44,3.59-.72,6l-.09.68a88.37,88.37,0,0,0,20.6,2.39,87.81,87.81,0,0,0,20.5-2.45l.26-.11c-.41-2.27-.7-4.46-.9-6.59a94.44,94.44,0,0,1-19.81,2.15A94.84,94.84,0,0,1,36.62,118.78Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.underwear.color}
        onClick={() => props.onClick('underwear')}
        d="M56.33,127.74a89,89,0,0,1-11.4-.72,88.36,88.36,0,0,1-9.19-1.67c-.21,1.69-.4,3.3-.59,4.8L54,142.75a23.88,23.88,0,0,0,2.79.13c.86,0,1.67-.07,2.39-.16L78,130.12c0-.28-.1-.71-.17-1.24-.13-1-.15-1.25-.22-1.71a18.07,18.07,0,0,0-.39-1.92A91.44,91.44,0,0,1,56.33,127.74Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.rightLeg.color}
        onClick={() => props.onClick('rightLeg')}
        d="M54.23,225c0-.66.08-1.38.1-2.2.31-9.5-1.24-11.3-2-21.83-.71-9.84.34-12.54,1.17-28.84.35-6.91.7-16.94.53-29.26l-18.8-12.6c-1.36,11.14-2.07,17-2.23,19.2a148,148,0,0,0,1,33.66c1.51,10.14,2.58,9.33,3.83,19,1.75,13.52-.24,15.89.33,23.31A33,33,0,0,0,54.23,225Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.leftLeg.color}
        onClick={() => props.onClick('leftLeg')}
        d="M79.17,183a147.42,147.42,0,0,0,1-33.66c-.16-2.21-.86-8.06-2.22-19.2l-18.81,12.6c-.17,12.32.18,22.35.53,29.26.84,16.3,1.88,19,1.17,28.84-.76,10.53-2.31,12.33-2,21.83,0,.8.06,1.5.1,2.15a33.23,33.23,0,0,0,16.06.58c.6-7.49-1.41-9.82.34-23.4C76.59,192.31,77.66,193.12,79.17,183Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.rightFoot.color}
        onClick={() => props.onClick('rightFoot')}
        d="M54.92,271.42a15.5,15.5,0,0,0-1.23-3.77c-1.21-2.61-1.15-7.11-1.11-10.32.19-15.58,0-12.93.17-16.16.59-10.16,1.19-11.91,1.48-16.22a33,33,0,0,1-16.07.44,49.67,49.67,0,0,0,.67,5c2.5,13.84,5.79,18.48,5.5,27A30.83,30.83,0,0,1,42,268.08a17.87,17.87,0,0,1,4.21-.25,16.28,16.28,0,0,1,5.5,1.25,24,24,0,0,0-4.59-.91,19.87,19.87,0,0,0-5.29.25,7.54,7.54,0,0,0-2.83,8.5H54.92a15.4,15.4,0,0,0,.25-3.25A15.67,15.67,0,0,0,54.92,271.42Z"
      />
      <path
        stroke='#ebebeb'
        className='clickable'
        fill={props.colors.leftFoot.color}
        onClick={() => props.onClick('leftFoot')}
        d="M58.26,271.42a15.68,15.68,0,0,1,1.22-3.77c1.21-2.61,1.15-7.11,1.11-10.32-.18-15.58,0-12.93-.17-16.16C59.83,231,59.23,229.26,59,225a32.92,32.92,0,0,0,16.06.44,49.67,49.67,0,0,1-.67,5c-2.5,13.84-5.78,18.48-5.5,27a31.06,31.06,0,0,0,2.33,10.66,17.82,17.82,0,0,0-4.2-.25,16.11,16.11,0,0,0-5.5,1.25,24,24,0,0,1,4.58-.91,19.85,19.85,0,0,1,5.29.25,7.54,7.54,0,0,1,2.83,8.5H58.26a14.17,14.17,0,0,1-.25-3.25A14.32,14.32,0,0,1,58.26,271.42Z"
      />
    </g>
  </svg>
);

ManSilhouette.propTypes = {
  onClick: PropTypes.func
}

ManSilhouette.defaultProps = {
  onClick: () => {}
}

export default ManSilhouette;