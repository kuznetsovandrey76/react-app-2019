import React, {Fragment} from 'react';

export const Questions = () => {
    let qustions = [
        {
            id: 1,
            title: 'Типы данных в js',
            answer: '2sdf'
        }
    ];

    return (
        <Fragment>
            {qustions.map((item) => {                
                return (
                    <div>
                        <p className='mb-0'>Вопрос: {item.title}</p>
                        <p>Ответ:{item.answer}</p>
                    </div>
                )   
            })}
        </Fragment>
    )
}