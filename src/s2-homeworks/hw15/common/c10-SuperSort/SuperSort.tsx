import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = {idTech: '4', icon: '⬇️', idDev: '24'}
const upIcon = {idTech: `2`, icon: '⬆️', idDev: '1'}
const noneIcon = {idTech: `3`, icon: '↕️', idDev: '33'}

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    return sort === "" ? down :
        sort === down ? up : ""
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value: columnName, onChange, id = 'hw15',
    }
) => {
    const up = '0' + columnName
    const down = '1' + columnName

    const onChangeCallback = () => {
        console.log(' sort, down, up: ', sort, down, up);

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
        ><span id={id + `-${columnName}-` + columnName === 'tech' ? icon.idTech : icon.idDev}
        >{icon.icon}</span>
        </span>
    )
}

export default SuperSort
