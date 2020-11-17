import * as React from "react";
import {Admin, Resource} from 'react-admin';
import {objEdit, objList} from "./CheckUpdate";
import {myDataProvider} from "./myDataProvider"



class AdminPanel extends React.Component {
    render() {
        return (
            <div>
                <Admin dataProvider={myDataProvider}>
                    <Resource name='CheckUpdate' list={objList} edit={objEdit} />
                </Admin>
            </div>
        );
    }
}

export default AdminPanel;



