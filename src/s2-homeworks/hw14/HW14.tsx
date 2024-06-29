import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios, {AxiosError, AxiosResponse} from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import {useSearchParams} from 'react-router-dom'


/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14
* 3 - дописать функцию onChangeText в HW14
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW14 в HW5/pages/JuniorPlus
* */
/**
 *
 *
 */
const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            {params: {find}}
        )
    /**
     * прикол лол кек
     * здесь кэтч мешает потому ts думает если мы
     *  получим ошибку то в try  придут другие
     *  данные
     */
    // .catch((e) => {
    //     alert(e.response?.data?.errorText || e.message);
    // });
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    /**
     *
     *
     * если отработает кэтч на 25 строке  то в зен на 42 придет уже другой объект рес без даты!!))
     */
    let error: any = undefined;
    const sendQuery = async (value: string) => {
        setLoading(true)
        try {
            const res = await getTechs(value)

            /**
             * тест на Error чере throw new
             */
            // throw new Error('foo error')
            setTechs(res.data.techs)
            setLoading(false)
        } catch (e) {

            if (e instanceof AxiosError) {
                console.log(' e.message: ',e, e.message ? e.message : e.response?.data.errorText);
                return
            }
            if (e instanceof Error) {
                console.log(' e.message: ', e.message);
                error = e;
                return
            }
            console.log(' some error occurred:');
        }
        // finally {
        //     console.log(' error: ', error.message);
        // }
    }

    const onChangeText = (value: string) => {
        setFind(value)
        setSearchParams({find: value})
    }

    useEffect(() => {

        const params = Object.fromEntries(searchParams)
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'}>
            <div className={s2.hwTitle}>Homework #14</div>

            <div className={s2.hw}>
                <SuperDebouncedInput
                    className={s2.superDebounceInput}
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br/>}
                </div>
                {mappedTechs}
            </div>
        </div>
    )
}

export default HW14
