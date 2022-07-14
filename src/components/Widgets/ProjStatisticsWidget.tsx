import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import { Text, View, StyleSheet, ViewStyle, StyleProp, TextStyle } from "react-native";
import { BaseWidget } from './BaseWidget';
import { DataTable } from 'react-native-paper';
import { daysTillNextMonth } from '../../utils/Date/daysTillNextMonth';
import { daysTillNextYear } from '../../utils/Date/daysTillNextYear';
import { getNextMonth } from '../../utils/Date/getNextMonth';
import { getNextYear } from '../../utils/Date/getNextYear';
import { IconComponentProvider } from '@react-native-material/core';

type StatisticsProps = {
    versesToday: number,
    versesTotal: number,
    charactersToday: number,
    charactersTotal: number,
    goal: number
    style?: StyleSheet.NamedStyles<{}>;
}


export const ProjStatisticWidget = (props: StatisticsProps) => {
    const hasanatByNextMonth = (props.charactersTotal * 10) + (111 * props.goal * daysTillNextMonth());
    const hasanatByNextYear = (props.charactersTotal * 10) + ((111 * 10) * props.goal * daysTillNextYear());
    const versesByNextMonth = (props.versesTotal) + (props.goal * daysTillNextMonth());
    const versesByNextYear = (props.versesTotal) + (props.goal * daysTillNextYear());
    return (
        <BaseWidget doubleSized={true} colors={["#D8B168", "#D4A857", "#CF9E44", "#C99534", "#B6872F"]} style={props.style}>
            {/*@ts-ignore*/}
            <DataTable style={styles.table}>

                <DataTable.Header style={styles.tableHeader}>
                    <TableTitleNonNumeric>Projected</TableTitleNonNumeric>
                    <TableTitle>By {getNextMonth()}</TableTitle>
                    <TableTitle>By {getNextYear()}</TableTitle>
                </DataTable.Header>

                <DataTable.Row style={styles.tableRow}>

                    <TableCellTitle>
                        Hasanat
                        </TableCellTitle>
                    <TableCell>{hasanatByNextMonth}</TableCell>
                    <TableCell>{hasanatByNextYear}</TableCell>

                </DataTable.Row>

                <DataTable.Row style={styles.tableRow}>

                    <TableCellTitle style={{ fontSize: 15 }}>Verses Read</TableCellTitle>
                    <TableCell>{versesByNextMonth}</TableCell>
                    <TableCell>{versesByNextYear}</TableCell>

                </DataTable.Row>
            </DataTable>
        </BaseWidget>
    )
}

export const TableCellTitle = (props: { children: React.ReactNode, style?: StyleSheet.NamedStyles<{}> }) => {
    return (
        <DataTable.Cell>
            <Text style={{ ...styles.tableCellTitle, ...props.style }}>
                {props.children}
            </Text>
        </DataTable.Cell>
    )
}

export const TableCell = (props: { children: React.ReactNode, style?: StyleProp<ViewStyle> }) => {
    return (
        <DataTable.Cell numeric>
            <Text style={styles.tableCell}>
                {props.children}
            </Text>
        </DataTable.Cell>
    )
}

export const TableTitle = (props: { children: React.ReactNode, style?: StyleSheet.NamedStyles<{}> }) => {
    return (
        <DataTable.Title numeric>
            <Text style={{ ...styles.tableTitle, ...props.style }}>
                {props.children}
            </Text>
        </DataTable.Title>
    )
}

export const TableTitleNonNumeric = (props: { children: React.ReactNode, style?: StyleSheet.NamedStyles<{}> }) => {
    return (
        <DataTable.Title>
            <Text style={{ ...styles.tableTitle, ...props.style }}>
                {props.children}
            </Text>
        </DataTable.Title>
    )
}

const styles = StyleSheet.create({

    statisticsText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },

    dateText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },

    table: {
        width: '100%',
        marginTop: "1%",
        marginBottom: "1%",
    },

    tableCellTitle: {
        fontSize: 17.5,
        fontWeight: 'bold',
        color: 'white',
    },

    tableCell: {
        fontSize: 16,
        color: 'white',
    },

    tableTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },

    cancelWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "nowrap",
    },

    tableHeader: {
        height: "auto",
        borderRadius: 10,
    },

    tableRow: {
        height: "auto",
        borderRadius: 10,
    },

});