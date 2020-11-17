import * as React from "react";
import {Filter,List, Datagrid, Edit, SimpleForm, DateField, TextField, TextInput, DateTimeInput } from 'react-admin';
import SearchIcon from "@material-ui/icons/Search";
import {InputAdornment } from "@material-ui/core";

const ObjFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn resettable helperText={true} InputProps={{
            endAdornment: (
                <InputAdornment>
                    <SearchIcon />
                </InputAdornment>
            )
        }} />
    </Filter>
);
export const objList = props => (
    <List {...props} filters={<ObjFilter/>}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="tableName"/>
            <DateField source="updateTime"  showTime={true}/>
            <TextField source="status"/>
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


