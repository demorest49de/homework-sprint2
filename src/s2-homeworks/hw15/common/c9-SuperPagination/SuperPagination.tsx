import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    const lastPage = totalCount / itemsCountForPage // пишет студент // вычислить количество страниц
    console.log(' page, itemsCountForPage, totalCount: ', page, itemsCountForPage, totalCount);
    const onChangeCallback = (event: any, page: number) => {
        console.log(' page, lastPage: ', page, lastPage);
        onChange(page, lastPage)

    }

    const onChangeSelect = (event: any) => {
        // пишет студент
    }

    return (
        <div className={s.pagination}>
            <Pagination
                shape={"rounded"}
                id={id + '-pagination'}
                color={'primary'}
                sx={{
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                style={{height: '24px', width: '39px'}}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
