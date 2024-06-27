import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = {id: 1, icon: '⬇️'}
const upIcon = {id: 2, icon: '⬆️'}
const noneIcon = {id: 3, icon: '↕️'}

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value: columnName, onChange, id = 'hw15',
    }
) => {
    const up = '0' + columnName
    const down = '1' + columnName

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + columnName}
            onClick={onChangeCallback}
        ><span id={id + icon.id + sort}
        >{icon.icon}</span>
        </span>
    )
}

export default SuperSort
