export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string
    errorMessage?: string
    hasError: boolean
}