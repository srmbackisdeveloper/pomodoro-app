import React from 'react';
import '../css/rounded-btn.scss';

export default function RoundedButton() {
  return (
    <a href="https://github.com/srmbackisdeveloper/" className="link">
        <svg viewBox='0 0 200 200' width='200' height='200' className="link__svg">
          <path id="link-circle" className="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />

          <g className="link__face">
            <path d='M 95 102 Q 100 107 105 102' fill="none" />
            <ellipse className='' cx='90' cy='100' rx='2' ry='2' stroke="none" />
            <ellipse className='' cx='110' cy='100' rx='2' ry='2' stroke="none" />
            <ellipse className='' cx='100' cy='100' rx='35' ry='35' fill="none" />
          </g>

          <text className="link__text">
            <textPath href="#link-circle" stroke="none">
              FOLLOW MY GITHUB
            </textPath>
          </text>
        </svg>
    </a>

    
  )
}
