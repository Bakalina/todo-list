import React, {FC} from 'react';
import StatisticList from "./StatisticList";
import style from './StatisticList.module.css';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {NoteType, StatisticNotes} from "../../types/noteTypes";

type StatisticListContainerType = {
    dataNotes: Array<NoteType>,
}

const StatisticListContainer: FC<StatisticListContainerType> = ({dataNotes}) => {

    const statistic: Array<StatisticNotes> = [
        {
            select: "Task",
            selectImage: "https://cdn-icons-png.flaticon.com/512/1368/1368593.png",
            active: 0,
            archive: 0,
            id: 1
        },
        {
            select: "Idea",
            selectImage: "https://cdn-icons-png.flaticon.com/512/841/841743.png",
            active: 0,
            archive: 0,
            id: 2
        },
        {
            select: "Quote",
            selectImage: "https://cdn-icons-png.flaticon.com/512/206/206059.png",
            active: 0,
            archive: 0,
            id: 3
        },
        {
            select: "Random Thought",
            selectImage: "https://cdn-icons-png.flaticon.com/512/7268/7268079.png",
            active: 0,
            archive: 0,
            id: 4
        }
    ];

    dataNotes.forEach(not => {
        statistic.forEach(st => {
            if (not.select === st.select) {
                not.active ? st.active += 1 : st.archive += 1;
            }
        });
    });

    return (
        <>
            <StatisticList logo={'https://cdn-icons-png.flaticon.com/512/82/82122.png'} name={'Note Category'}
                active={'Active'} archive={'Archive'} styleRow={style.rowHeader}/>
            {statistic.map(el => {
                if (el.active > 0 || el.archive > 0) {
                    return <StatisticList logo={el.selectImage}
                        name={el.select}
                        active={el.active}
                        archive={el.archive}
                        styleRow={style.rowList}
                        key={el.id}/>;
                }
            }
            )
            }
        </>
    );
};

const mapStateToProps = (store: RootState) => (store.notesReducers);

export default connect(mapStateToProps)(StatisticListContainer);