import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false); // destructuring assigment. присвоили значения  массива useState в массив [editMode, setEditMode]. false первоначальное знач первого элемента массива useState
    let [status, setStatus] = useState(props.status); // использ для  локального статуса

    useEffect( () => { // синхронизируем локал стейт и данные из пропсов , визывается после отрисовки компоненты , (если компонента отрисовалась но в тот момент в пропсах еще не пришли нужные данные, то после всей отрисовки выз этот хук )
        setStatus(props.status);
    }, [props.status]) // если при очередной отрисовки props.status будет другой чем он был раньше то запусти useEffect, это наша зависимость от пришедших пропсов, если ее убрать то этот хук будет выз после каждой отрисовки ,

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
         props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value) // изменяем локальный статус по одному символу
    }

    return (
        <div>
            {!editMode &&
                <div>
                   <b> Status </b> <span onDoubleClick={activateEditMode}> {props.status || "____"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;