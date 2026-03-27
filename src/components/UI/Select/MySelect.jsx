export default function MySelect({options, defaultValue, value, onChange}) {
    
    return (
        <select value = {value} onChange = {event => onChange(event.target.value)}>
            {options.map(option => (
                <option key = {option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    )
}