import * as React from "react";
import {List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateTimeInput,DeleteButton, Pagination} from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10, 15, 20, 25]} {...props} />;

export const objList = props => (
    <List {...props} pagination={<PostPagination />}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="tableName"/>
            <DateField source="updateTime" showTime />
            <TextField source="status"/>
            <EditButton basePath="/update"/>
            <DeleteButton basePath="/update"/>
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
