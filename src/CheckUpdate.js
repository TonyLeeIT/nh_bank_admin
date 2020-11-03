import * as React from "react";
import {List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateTimeInput,DeleteButton } from 'react-admin';


export const objList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="tableName"/>
            <DateField source="updateTime" showTime />
            <TextField source="status"/>
            <EditButton basePath="/CheckUpdate"/>
            <DeleteButton basePath="/CheckUpdate"/>
        </Datagrid>
    </List>
);

export const objEdit = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput disabled  source="id" />
            <TextInput source="tableName"/>
            <DateTimeInput source="updateTime" />
            <TextInput source="status"/>
        </SimpleForm>
    </Edit>
);

export const objCreate = (props) => (
    <Create{...props}>
        <SimpleForm>
        <TextInput source="tableName"/>
        <DateTimeInput source="updateTime" />
        <TextInput source="status"/>
        </SimpleForm>
    </Create>
);
