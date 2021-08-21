export default function TextInput({
    inputValue = 'Valor padrão do Input', 
    onInputChange, 
    labelDescription = 'Descrição do Label',
    id = 'input',
    autoFocus = false
    }) {
    return (
        <div className='flex flex-col'>
        <label htmlFor={id} 
        className='text-sm text-gray-600 mb-0 m-2'>
            {labelDescription}
        </label>
        <input autoFocus = {autoFocus}
        id={id}
        className='border p-1 m-2' 
        type='text' 
        value={inputValue} 
        onChange={onInputChange}>
        </input>
        </div>
    )
}
