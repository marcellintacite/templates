import React from 'react'

export default function Bars({ title, width, color, circle }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="progress-bar">
                <div className="html" style={{
                    width: width, background: color
                }}>
                    <span style={{
                        background: circle,
                        border: `3px solid ${color}`

                    }}>{width}</span>
                </div>
            </div>
        </>
    )
}
