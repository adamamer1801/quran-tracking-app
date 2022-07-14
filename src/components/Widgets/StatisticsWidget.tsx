import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import { Text, View, StyleSheet, ViewStyle, StyleProp, TextStyle } from "react-native";
import { BaseWidget } from './BaseWidget';
import { DataTable } from 'react-native-paper';
import { IconItem } from '../Icon';

type StatisticsProps = {
    versesToday: number,
    versesTotal: number,
    charactersToday: number,
    charactersTotal: number,
    style?: StyleSheet.NamedStyles<{}>;
}

export const StatisticsWidget = (props: StatisticsProps) => {
    return (
        <BaseWidget doubleSized={true} colors={["#C4695D", "#BD5446", "#B53E2F", "#AE2917", "#A61300"]} style={props}>
            {/*@ts-ignore*/}
            <DataTable style={styles.table}>

                <DataTable.Header style={styles.tableHeader}>
                    <TableTitleNonNumeric>Statistics</TableTitleNonNumeric>
                    <TableTitle>Today</TableTitle>
                    <TableTitle>All Time</TableTitle>
                </DataTable.Header>

                <DataTable.Row style={styles.tableRow}>
                    <TableCellTitle>Hasanat</TableCellTitle>
                    <TableCell>{props.charactersToday * 10}</TableCell>
                    <TableCell>{props.charactersTotal * 10}</TableCell>

                </DataTable.Row>

                <DataTable.Row style={styles.tableRow}>

                    <TableCellTitle style={{ fontSize: 15 }}>Verses Read</TableCellTitle>
                    <TableCell>{props.versesToday}</TableCell>
                    <TableCell>{props.versesTotal}</TableCell>

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