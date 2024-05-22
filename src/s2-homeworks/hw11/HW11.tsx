import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        const minDistance = 2
        console.log(' activeThumb: ', activeThumb);
        if (Array.isArray(newValue)) {
            const [val1, val2] = newValue
            if (val2 - val1 < minDistance) {
                if (activeThumb === 0) {
                    // debugger
                    const clamped = Math.min(newValue[0], 100 - minDistance);
                    setValue1(clamped);
                    setValue2(clamped + minDistance);
                } else {
                    const clamped = Math.max(newValue[1], minDistance);
                    setValue1(clamped - minDistance);
                    setValue2(clamped);
                }
            } else {
                setValue1(val1)
                setValue2(val2)
            }
        }
        if (typeof newValue === 'number') {
            setValue1(newValue)
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>

                        <SuperRange
                            id={'hw11-single-slider'}
                            // сделать так чтоб value1 изменялось // пишет студент
                            value={value1}
                            onChange={handleChange}
                        />

                    </div>

                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>

                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            value={[value1, value2]}
                            onChange={handleChange}
                        />

                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
