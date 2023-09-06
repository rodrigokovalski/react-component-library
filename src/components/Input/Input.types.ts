import React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'secondary'
}