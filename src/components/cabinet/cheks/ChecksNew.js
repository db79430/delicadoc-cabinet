import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checksUser } from "../../../redux/function/function-service";
import "./Checks.css"
import styled from 'styled-components';
import {setChecks} from "../../../redux/action/action";
import "./Checks.css"
import {MenuCabinetButtonChecksPlayUp} from "../buttons-checks-play/MenuCabinetButtonChecksPlayUp";
import {Box, Typography} from "@mui/material";


const TableContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    boxSizing: "border-box",
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '0px 30px 30px 30px;',
    fontFamily: '"Blue curve", sans-serif'

});

const TableHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: '30px',
    textAlign: 'center',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#ff6600',
    color: 'white',
    '@media (max-width: 430px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': {
            margin: '10px 0',
            width: '100%',
            justifyContent: 'center',
        },
    },
});

const TableRow = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    width: '90%',
    padding: '12px',
    borderBottom: '1px solid #FFC18E',
    '&:nth-child(even)': {
        backgroundColor: 'transparent',
    },
    '@media (max-width: 430px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': {
            margin: '10px 0',
            width: '100%',
            justifyContent: 'center',
        },
    },
});

const TableCell = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    textAlign: 'center',
});

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString().slice(2);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export const ChecksNew = ({ token }) => {
    const checks = useSelector((state) => state.infoPromo.checks);
    const dispatch = useDispatch();
    const [currentData, setCurrentData] = useState([]);

    console.log('cheks', checks)

    useEffect(() => {
        dispatch(checksUser(token));
    }, [dispatch, token]);

    useEffect(() => {
        if (Array.isArray(checks)) {
            setCurrentData(checks);
        } else {
            setCurrentData([]);
        }
    }, [checks]);

    return (
        <div>
            <MenuCabinetButtonChecksPlayUp token={token} />
            <div className="table-checks">
                <TableHeader>
                    <Typography>Дата</Typography>
                    <Typography>Номер чека</Typography>
                    <Typography>Статус</Typography>
                </TableHeader>
                <TableContainer>
                    {currentData.map((check, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <img
                                    style={{ width: '50px', height: 'auto' }}
                                    src={check.general_attachment}
                                />
                            </TableCell>
                            <TableCell>
                                <Typography>{formatDate(check.date)}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{check.id}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{check.name_status}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableContainer>
            </div>
        </div>
    );
};