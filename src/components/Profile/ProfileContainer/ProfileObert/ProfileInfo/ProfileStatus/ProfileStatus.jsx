import React from 'react';

//клаsсовая компонента

class ProfileStatus extends React.Component {
    state = {
        editMode: false // режим редактирования
    }

    activateEditMode = () => {
        this.setState({   // тип метод для перерисовки , лучше почитать / setState - асинхронин
            editMode: true
        })
}
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) { // компонент перерисовывается если меняеться локал стейт либо  из вне, prevProps, prevState просто приходят
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode }>{this.props.status || "____"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;