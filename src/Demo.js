import * as React from "react";
import {List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput,DeleteButton } from 'react-admin';


export const objList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <DateField source="dob" locales="fr-FR" />
            <EditButton basePath="/Demo"/>
            <DeleteButton basePath="/Demo"/>
        </Datagrid>
    </List>
);

export const objEdit = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput disabled  source="id" />
            <TextInput source="name"/>
            <DateInput source="dob" />
        </SimpleForm>
    </Edit>
);

export const objCreate = (props) => (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <DateInput source="dob" />
        </SimpleForm>
    </Create>
);
