import React, {FC} from 'react';
import style from './StatisticList.module.css'
import {StatisticListType} from "../../types/noteTypes";


const StatisticList: FC<StatisticListType> = ({logo, name, active,
                                                  archive,styleRow}) => {
    return (
        <div className={style.container}>
            <div className={`${style.row} ${styleRow}`}>
                <div className={style.colLogo}><img alt='logo' src={logo}/></div>
                <div className={style.colName}>{name}</div>
                <div className={style.col}>{active}</div>
                <div className={style.col}>{archive}</div>
            </div>
        </div>
    );
};

export default StatisticList;